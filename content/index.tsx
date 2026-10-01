import React from "react";
import { TocItem } from "@/types/docs";
import { introductionDocs } from "./introduction";
import { gettingStartedDocs } from "./getting-started";
import { conceptsDocs } from "./concepts";
import { protocolDocs } from "./protocol";
import { webDocs } from "./web";
import { mobileDocs } from "./mobile";
import { sdkDocs } from "./sdk";
import { apiDocs } from "./api";
import { guidesDocs } from "./guides";
import { referenceDocs } from "./reference";
import { contributingDocs } from "./contributing";
import { faqDocs } from "./faq";

const ALL_DOC_CONTENT: Record<string, { content: React.ReactNode; toc: TocItem[] }> = {
  ...introductionDocs,
  ...gettingStartedDocs,
  ...conceptsDocs,
  ...protocolDocs,
  ...webDocs,
  ...mobileDocs,
  ...sdkDocs,
  ...apiDocs,
  ...guidesDocs,
  ...referenceDocs,
  ...contributingDocs,
  ...faqDocs,
};

export function getDocContent(slug: string): { content: React.ReactNode; toc: TocItem[] } | null {
  return ALL_DOC_CONTENT[slug] || null;
}
