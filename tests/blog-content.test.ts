import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { describe, expect, it } from "vitest";

const root = fileURLToPath(new URL("..", import.meta.url));
const contentRoot = path.join(root, "src", "content", "blog");
const locales = ["zh", "en"] as const;

interface ParsedPost {
  slug: string;
  data: Record<string, any>;
  content: string;
}

function readPosts(locale: (typeof locales)[number]): ParsedPost[] {
  const dir = path.join(contentRoot, locale);
  const files = fs.readdirSync(dir).filter((file: string) => file.endsWith(".md"));

  return files
    .map((file: string) => {
      const slug = file.replace(/\.md$/, "");
      const parsed = matter.read(path.join(dir, file));
      return { slug, data: parsed.data, content: parsed.content };
    })
    .filter((post) => post.data.visibility === "public")
    .sort((a, b) => String(b.data.date).localeCompare(String(a.data.date)));
}

describe("public blog content", () => {
  it("lists public Chinese blog posts from newest to oldest with stable metadata", () => {
    const posts = readPosts("zh");

    expect(posts.map((post) => post.slug)).toEqual(["ppt-experience"]);
    expect(posts[0].data.title).toBe("个人汇报类 PPT 的制作经验");
    expect(posts[0].data.originalFile?.url).toBe("/files/blog/xyc-ppt-experience.pdf");
  });

  it("keeps English blog routes available as translated entry points", () => {
    const posts = readPosts("en");

    expect(posts.map((post) => post.slug)).toEqual(["ppt-experience"]);
    expect(posts[0].data.language).toBe("zh");
    expect(posts[0].data.originalFile?.type).toBe("pdf");
  });

  it("finds a single post by locale and slug", () => {
    const post = readPosts("zh").find((entry) => entry.slug === "ppt-experience");

    expect(post?.data.summary).toContain("PPT");
    expect(post?.data.tags).toContain("答辩");
  });

  it("keeps original blog attachments in the public files directory", () => {
    expect(fs.existsSync(path.join(root, "public", "files", "blog", "xyc-ppt-experience.pdf"))).toBe(true);
  });
});
