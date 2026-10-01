export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface DocSection {
  title: string;
  slug: string;
  items: DocPageMeta[];
}

export interface DocPageMeta {
  title: string;
  slug: string; // e.g. "introduction/overview"
  description: string;
  category: string;
  keywords?: string[];
}

export interface DocPageData extends DocPageMeta {
  toc: TocItem[];
  prev?: { title: string; slug: string };
  next?: { title: string; slug: string };
}
