import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  company: "SumiTech",
  email: "info@sumitech.eu",
  phone: "+38670493447",
  whatsapp: "+38670493447",
  address: "Planinska Cesta 29, Sevnica, 8290, Slovenia",
  website: "https://sumitech.eu",
};

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Returns SumiTech's official contact information: email, phone, WhatsApp, and address.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});
