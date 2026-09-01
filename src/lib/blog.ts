import type { Locale } from "./routes";

export interface BlogFrontmatter {
  visibility: "public" | "draft";
  title: string;
  date: string;
  summary: string;
  category: string;
  tags: string[];
  language: "zh" | "en";
  originalFile?: {
    label: string;
    url: string;
    type: "pdf" | "docx";
  };
}

interface MarkdownModule {
  frontmatter: BlogFrontmatter;
  Content: any;
}

export interface BlogPost {
  slug: string;
  locale: Locale;
  data: BlogFrontmatter;
  Content: any;
}

const modules = import.meta.glob<MarkdownModule>("../content/blog/*/*.md", {
  eager: true
});

function parsePost(path: string, module: MarkdownModule): BlogPost {
  const match = path.match(/blog\/(zh|en)\/(.+)\.md$/);

  if (!match) {
    throw new Error(`Unexpected blog content path: ${path}`);
  }

  return {
    locale: match[1] as Locale,
    slug: match[2],
    data: module.frontmatter,
    Content: module.Content
  };
}

function byNewest(a: BlogPost, b: BlogPost) {
  return b.data.date.localeCompare(a.data.date);
}

export function getBlogPosts(locale: Locale) {
  return Object.entries(modules)
    .map(([path, module]) => parsePost(path, module))
    .filter((post) => post.locale === locale && post.data.visibility === "public")
    .sort(byNewest);
}

export function getBlogPost(locale: Locale, slug: string) {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}
