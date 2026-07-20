import { defineTool } from "@lovable.dev/mcp-js";

const info = {
  name: "SumiTech",
  tagline: "Built for Scale. Driven by Trust.",
  headquarters: "Slovenia",
  regions: ["Europe", "USA", "Canada"],
  model:
    "Hybrid: core operations managed locally in Slovenia, delivered through a vetted network of trusted collaborators across Europe and North America.",
  offerings: [
    "IT support & system maintenance",
    "Workflow automation (Google Sheets, integrations)",
    "Customer support outsourcing",
    "Logistics & dispatch consulting",
  ],
  positioning:
    "A structured, scalable B2B tech company. Not a freelance marketplace — SumiTech takes ownership of the work it delivers and builds long-term partnerships with every client.",
  whyChoose: [
    "Flexible and scalable team",
    "Fast delivery",
    "Industry experience across logistics and tech",
    "Cost-efficient solutions",
    "Reliable, long-term partnerships",
  ],
};

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Returns an overview of SumiTech: positioning, operating model, regions served, and offerings.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
    structuredContent: info,
  }),
});
