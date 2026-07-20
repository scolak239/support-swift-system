import { defineMcp } from "@lovable.dev/mcp-js";
import getServices from "./tools/get-services";
import getContact from "./tools/get-contact";
import getCompanyInfo from "./tools/get-company-info";

export default defineMcp({
  name: "sumitech-mcp",
  title: "SumiTech MCP",
  version: "0.1.0",
  instructions:
    "Public MCP server for SumiTech, a Slovenia-based B2B tech company serving Europe, USA, and Canada. Use `get_company_info` for positioning and operating model, `get_services` for the service catalog, and `get_contact_info` for contact details.",
  tools: [getCompanyInfo, getServices, getContact],
});
