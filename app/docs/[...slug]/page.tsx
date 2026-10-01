// Dynamic route handler with SSG pre-rendering
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ALL_DOC_PAGES, getPageBySlug } from "@/lib/navigation";
import { getDocContent } from "@/content";
import { DocsLayout } from "@/components/DocsLayout";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  return ALL_DOC_PAGES.map((page) => ({
    slug: page.slug.split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.join("/");
  const page = getPageBySlug(slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: `${page.title} | SplitPay Docs`,
      description: page.description,
    },
  };
}

export default async function DocPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.join("/");
  const page = getPageBySlug(slug);
  const doc = getDocContent(slug);

  if (!page || !doc) {
    return notFound();
  }

  return (
    <DocsLayout
      title={page.title}
      description={page.description}
      category={page.category}
      toc={doc.toc}
      prev={page.prev}
      next={page.next}
    >
      {doc.content}
    </DocsLayout>
  );
}
