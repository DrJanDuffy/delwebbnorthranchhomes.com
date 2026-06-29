import { createHmac, timingSafeEqual } from "crypto";

export type CalendlyInviteePayload = {
  event: string;
  payload: {
    email: string;
    name: string;
    first_name?: string;
    last_name?: string;
    cancel_url?: string;
    reschedule_url?: string;
    scheduled_event?: {
      name?: string;
      start_time?: string;
      end_time?: string;
      location?: {
        type?: string;
        location?: string;
      };
    };
    questions_and_answers?: Array<{
      question: string;
      answer: string;
    }>;
  };
};

export type CalendlyLead = {
  eventType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  scheduledAt?: string;
  eventName?: string;
  location?: string;
  notes: string;
};

function parseNameParts(name: string, firstName?: string, lastName?: string) {
  if (firstName && lastName) {
    return { firstName, lastName };
  }

  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "Calendly" };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

export function parseCalendlyLead(payload: CalendlyInviteePayload): CalendlyLead {
  const { firstName, lastName } = parseNameParts(
    payload.payload.name,
    payload.payload.first_name,
    payload.payload.last_name
  );

  const qaNotes =
    payload.payload.questions_and_answers
      ?.map((item) => `${item.question}: ${item.answer}`)
      .join("\n") ?? "";

  const phoneAnswer = payload.payload.questions_and_answers?.find((item) =>
    /phone/i.test(item.question)
  )?.answer;

  const scheduledEvent = payload.payload.scheduled_event;

  return {
    eventType: payload.event,
    firstName,
    lastName,
    email: payload.payload.email,
    phone: phoneAnswer,
    scheduledAt: scheduledEvent?.start_time,
    eventName: scheduledEvent?.name,
    location: scheduledEvent?.location?.location,
    notes: [
      `Calendly event: ${payload.event}`,
      scheduledEvent?.name ? `Meeting: ${scheduledEvent.name}` : null,
      scheduledEvent?.start_time
        ? `Scheduled: ${scheduledEvent.start_time}`
        : null,
      scheduledEvent?.location?.location
        ? `Location: ${scheduledEvent.location.location}`
        : null,
      qaNotes ? `Responses:\n${qaNotes}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

/** Verify Calendly webhook signature (`Calendly-Webhook-Signature` header). */
export function verifyCalendlySignature(
  rawBody: string,
  signatureHeader: string | null
): boolean {
  const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
  if (!signingKey) {
    throw new Error("CALENDLY_WEBHOOK_SIGNING_KEY is not configured");
  }

  if (!signatureHeader) {
    return false;
  }

  const parts = Object.fromEntries(
    signatureHeader.split(",").map((part) => {
      const [key, value] = part.split("=");
      return [key.trim(), value];
    })
  );

  const timestamp = parts.t;
  const signature = parts.v1;

  if (!timestamp || !signature) {
    return false;
  }

  const signedPayload = `${timestamp}.${rawBody}`;
  const expected = createHmac("sha256", signingKey)
    .update(signedPayload)
    .digest("hex");

  try {
    return timingSafeEqual(
      Buffer.from(signature, "utf8"),
      Buffer.from(expected, "utf8")
    );
  } catch {
    return false;
  }
}
