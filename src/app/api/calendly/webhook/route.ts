import { NextRequest, NextResponse } from "next/server";
import { start } from "workflow/api";
import {
  parseCalendlyLead,
  verifyCalendlySignature,
  type CalendlyInviteePayload,
} from "@/lib/calendly/webhook";
import { processCalendlyLead } from "@/workflows/calendly-lead";

const HANDLED_EVENTS = new Set([
  "invitee.created",
  "invitee.canceled",
  "invitee.rescheduled",
]);

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const signature = request.headers.get("Calendly-Webhook-Signature");

  try {
    if (!verifyCalendlySignature(rawBody, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
  } catch (error) {
    console.error("Calendly webhook verification failed:", error);
    return NextResponse.json(
      { error: "Webhook verification is not configured" },
      { status: 500 }
    );
  }

  let payload: CalendlyInviteePayload;
  try {
    payload = JSON.parse(rawBody) as CalendlyInviteePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  if (!HANDLED_EVENTS.has(payload.event)) {
    return NextResponse.json({ ok: true, ignored: payload.event });
  }

  if (payload.event !== "invitee.created") {
    // Cancellations/reschedules are acknowledged; CRM sync focuses on new bookings.
    return NextResponse.json({ ok: true, event: payload.event });
  }

  const lead = parseCalendlyLead(payload);

  await start(processCalendlyLead, [lead]);

  return NextResponse.json({
    ok: true,
    message: "Calendly lead workflow started",
  });
}
