import type { Locale } from "./routes";

export interface CareerFrontmatter {
  visibility: "public";
  title: string;
  period: string;
  role: string;
  summary: string;
  impact: string;
  skills: string[];
  evidence: string[];
}

interface MarkdownModule {
  frontmatter: CareerFrontmatter;
  Content: any;
}

export interface CareerEntry {
  slug: string;
  locale: Locale;
  data: CareerFrontmatter;
  Content: any;
}

const modules = import.meta.glob<MarkdownModule>("../content/career/*/*.md", {
  eager: true
});

const timelineOrder = [
  "ai-assisted-career-system",
  "knowledge-management",
  "cross-functional-delivery",
  "data-informed-decisions",
  "workflow-automation",
  "foundation-systems-thinking"
];

function parseEntry(path: string, module: MarkdownModule): CareerEntry {
  const match = path.match(/career\/(zh|en)\/(.+)\.md$/);

  if (!match) {
    throw new Error(`Unexpected career content path: ${path}`);
  }

  return {
    locale: match[1] as Locale,
    slug: match[2],
    data: module.frontmatter,
    Content: module.Content
  };
}

export function getCareerEntries(locale: Locale) {
  return Object.entries(modules)
    .map(([path, module]) => parseEntry(path, module))
    .filter((entry) => entry.locale === locale && entry.data.visibility === "public")
    .sort((a, b) => timelineOrder.indexOf(a.slug) - timelineOrder.indexOf(b.slug));
}

export function getCareerEntry(locale: Locale, slug: string) {
  return getCareerEntries(locale).find((entry) => entry.slug === slug);
}
