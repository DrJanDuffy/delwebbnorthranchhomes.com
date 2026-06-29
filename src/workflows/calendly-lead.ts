import { FatalError } from "workflow";
import { createFubEventFromLead } from "@/lib/fub/client";
import type { CalendlyLead } from "@/lib/calendly/webhook";

export async function processCalendlyLead(lead: CalendlyLead) {
  "use workflow";

  if (!lead.email) {
    throw new FatalError("Calendly lead is missing an email address");
  }

  const result = await syncLeadToFollowUpBoss(lead);

  return {
    status: "synced" as const,
    fubEventId: result.id ?? null,
    email: lead.email,
  };
}

async function syncLeadToFollowUpBoss(lead: CalendlyLead) {
  "use step";

  if (!process.env.FUB_API_KEY) {
    throw new FatalError("FUB_API_KEY is not configured");
  }

  return createFubEventFromLead({
    firstName: lead.firstName,
    lastName: lead.lastName,
    email: lead.email,
    phone: lead.phone,
    source: "Del Webb North Ranch Website",
    type: "General Inquiry",
    message: [
      "New Calendly consultation booking",
      lead.eventName ? `Event: ${lead.eventName}` : null,
      lead.scheduledAt ? `Scheduled: ${lead.scheduledAt}` : null,
      lead.location ? `Location: ${lead.location}` : null,
      lead.notes,
    ]
      .filter(Boolean)
      .join("\n"),
  });
}
