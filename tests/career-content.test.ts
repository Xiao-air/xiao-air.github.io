import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { describe, expect, it } from "vitest";

const root = fileURLToPath(new URL("..", import.meta.url));
const contentRoot = path.join(root, "src", "content", "career");
const locales = ["zh", "en"] as const;

interface ParsedEntry {
  slug: string;
  data: Record<string, unknown>;
  content: string;
}

function readEntries(locale: (typeof locales)[number]): ParsedEntry[] {
  const dir = path.join(contentRoot, locale);
  const files = fs.readdirSync(dir).filter((file: string) => file.endsWith(".md"));

  return files.map((file: string) => {
    const slug = file.replace(/\.md$/, "");
    const parsed = matter.read(path.join(dir, file));
    return { slug, data: parsed.data, content: parsed.content };
  });
}

describe("career markdown content", () => {
  it("keeps 5-8 public entries in each locale", () => {
    for (const locale of locales) {
      const entries = readEntries(locale);
      expect(entries.length).toBeGreaterThanOrEqual(5);
      expect(entries.length).toBeLessThanOrEqual(8);
    }
  });

  it("keeps Chinese and English entries paired by slug", () => {
    const zhSlugs = readEntries("zh").map((entry) => entry.slug).sort();
    const enSlugs = readEntries("en").map((entry) => entry.slug).sort();

    expect(enSlugs).toEqual(zhSlugs);
  });

  it("publishes only safe public-facing fields", () => {
    for (const locale of locales) {
      for (const entry of readEntries(locale)) {
        expect(entry.data.visibility).toBe("public");
        expect(entry.data.title).toEqual(expect.any(String));
        expect(entry.data.summary).toEqual(expect.any(String));
        expect(entry.data.period).toEqual(expect.any(String));
        expect(entry.data.role).toEqual(expect.any(String));
        expect(entry.data.impact).toEqual(expect.any(String));
        expect(entry.data.evidence).toEqual(expect.any(Array));
        expect(entry.data.skills).toEqual(expect.any(Array));
        expect(entry.data).not.toHaveProperty("privateNotes");
        expect(entry.data).not.toHaveProperty("salary");
        expect(entry.data).not.toHaveProperty("manager");
      }
    }
  });

  it("uses the growth evidence structure in every entry body", () => {
    const requiredByLocale = {
      zh: ["## 背景", "## 行动", "## 结果", "## 成长"],
      en: ["## Context", "## Actions", "## Results", "## Growth"]
    };

    for (const locale of locales) {
      for (const entry of readEntries(locale)) {
        for (const heading of requiredByLocale[locale]) {
          expect(entry.content).toContain(heading);
        }
      }
    }
  });
});
