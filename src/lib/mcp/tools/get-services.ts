import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const services = [
  {
    name: "IT Support & System Maintenance",
    description:
      "Ongoing IT support, monitoring, and maintenance for business systems to keep operations running smoothly.",
  },
  {
    name: "Automation Solutions",
    description:
      "Custom workflow automation using Google Sheets, integrations, and no-code/low-code tools to eliminate repetitive work.",
  },
  {
    name: "Customer Support Outsourcing",
    description:
      "Dedicated customer support teams handling inquiries, tickets, and communications on your behalf.",
  },
  {
    name: "Logistics & Dispatch Consulting",
    description:
      "Dispatch operations, logistics coordination, and operational consulting drawing on years of industry experience.",
  },
  {
    name: "Account Management",
    description:
      "Dedicated account managers overseeing client relationships and day-to-day operations.",
  },
  {
    name: "Data Entry",
    description:
      "Accurate, reliable data entry and processing for structured and unstructured data.",
  },
  {
    name: "Device Troubleshoot & Repair",
    description:
      "Hardware and device troubleshooting, diagnostics, and repair services.",
  },
];

export default defineTool({
  name: "get_services",
  title: "Get services",
  description:
    "Returns the list of services SumiTech offers, with a short description for each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
