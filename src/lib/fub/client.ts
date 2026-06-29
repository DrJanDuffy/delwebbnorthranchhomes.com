import { SITE_ORIGIN } from "@/lib/site";

const FUB_API_BASE = "https://api.followupboss.com/v1";

export type FubLeadInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  source: string;
  type: string;
};

type FubEventResponse = {
  id?: number;
};

function getFubCredentials(): { apiKey: string; systemKey: string } {
  const apiKey = process.env.FUB_API_KEY;
  const systemKey = process.env.FUB_SYSTEM_KEY ?? "DelWebbNorthRanchHomes";

  if (!apiKey) {
    throw new Error("FUB_API_KEY is not configured");
  }

  return { apiKey, systemKey };
}

/** Push a Calendly booking into Follow Up Boss via the /events endpoint. */
export async function createFubEventFromLead(
  lead: FubLeadInput
): Promise<FubEventResponse> {
  const { apiKey, systemKey } = getFubCredentials();
  const auth = Buffer.from(`${apiKey}:`).toString("base64");

  const response = await fetch(`${FUB_API_BASE}/events`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
      "X-System": systemKey,
      "X-System-Key": systemKey,
    },
    body: JSON.stringify({
      source: lead.source,
      system: systemKey,
      type: lead.type,
      message: lead.message,
      person: {
        firstName: lead.firstName,
        lastName: lead.lastName,
        emails: [{ value: lead.email }],
        ...(lead.phone ? { phones: [{ value: lead.phone }] } : {}),
      },
      pageUrl: SITE_ORIGIN,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Follow Up Boss API error (${response.status}): ${body}`);
  }

  return (await response.json()) as FubEventResponse;
}
