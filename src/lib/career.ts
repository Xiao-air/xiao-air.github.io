import type { Locale } from "./routes";

export interface CareerFrontmatter {
  visibility: "public";
  category: CareerCategory;
  title: string;
  period: string;
  summary: string;
  paper?: {
    title: string;
    doi: string;
    journal: string;
    url: string;
  };
}

export type CareerCategory = "project" | "extracurricular";

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
  "photochromic-azo-isomerization-dft",
  "ai4s-data-ml-dft-cuzn-catalyst",
  "saint-gobain-minhang-crl-ppc-internship",
  "dynamic-covalent-memory-plastics",
  "sodium-cathode-precursor-process",
  "chemistry-station-science-outreach",
  "supramolecular-hydrogel-assembly"
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

function byTimelineOrder(a: CareerEntry, b: CareerEntry) {
  const aIndex = timelineOrder.indexOf(a.slug);
  const bIndex = timelineOrder.indexOf(b.slug);

  return (aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex) -
    (bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex);
}

export function getCareerEntries(locale: Locale, category?: CareerCategory) {
  return Object.entries(modules)
    .map(([path, module]) => parseEntry(path, module))
    .filter((entry) => entry.locale === locale && entry.data.visibility === "public")
    .filter((entry) => (category ? entry.data.category === category : true))
    .sort(byTimelineOrder);
}

export function getCareerEntry(locale: Locale, slug: string) {
  return getCareerEntries(locale).find((entry) => entry.slug === slug);
}
