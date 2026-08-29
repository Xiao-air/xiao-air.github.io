import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { describe, expect, it } from "vitest";

const root = fileURLToPath(new URL("..", import.meta.url));
const contentRoot = path.join(root, "src", "content", "career");
const locales = ["zh", "en"] as const;
const publicFrontmatterKeys = [
  "category",
  "period",
  "summary",
  "title",
  "visibility"
];
const publicFrontmatterKeysWithPaper = [...publicFrontmatterKeys, "paper"].sort();
const expectedProjectSlugs = [
  "ai4s-data-ml-dft-cuzn-catalyst",
  "chemistry-station-science-outreach",
  "dynamic-covalent-memory-plastics",
  "photochromic-azo-isomerization-dft",
  "saint-gobain-minhang-crl-ppc-internship",
  "sodium-cathode-precursor-process",
  "supramolecular-hydrogel-assembly"
].sort();
const detailedPrivateFragments = [
  "500mmol/L",
  "0.1u/mg",
  "5u/mL",
  "800s",
  "G'",
  "G''",
  "王义明",
  "孙泽",
  "指导教师",
  "称量、配液",
  "加热回流"
];

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
  it("keeps the seven public project entries in each locale", () => {
    for (const locale of locales) {
      const entries = readEntries(locale);
      expect(entries.map((entry) => entry.slug).sort()).toEqual(expectedProjectSlugs);
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
        const expectedKeys = entry.slug === "supramolecular-hydrogel-assembly"
          ? publicFrontmatterKeysWithPaper
          : publicFrontmatterKeys;

        expect(Object.keys(entry.data).sort()).toEqual(expectedKeys);
        expect(entry.data.visibility).toBe("public");
        expect(entry.data.category).toBe("project");
        expect(entry.data.title).toEqual(expect.any(String));
        expect(entry.data.summary).toEqual(expect.any(String));
        expect(entry.data.period).toEqual(expect.any(String));
        expect(entry.data).not.toHaveProperty("role");
        expect(entry.data).not.toHaveProperty("outcome");
      }
    }
  });

  it("keeps every project summary substantial enough for public display", () => {
    for (const locale of locales) {
      for (const entry of readEntries(locale)) {
        const lines = String(entry.data.summary).split(/\r?\n/).filter((line) => line.trim().length > 0);

        expect(lines.length).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it("publishes the hydrogel paper metadata without raw experiment details", () => {
    for (const locale of locales) {
      const hydrogel = readEntries(locale).find((entry) => entry.slug === "supramolecular-hydrogel-assembly");

      expect(hydrogel?.data.paper).toEqual({
        title: "Spatially Controlled Self-Assembly of Supramolecular Hydrogels Enabled by Light-Triggered Catalysis",
        doi: "10.1002/marc.202401156",
        journal: "Macromolecular Rapid Communications",
        url: "https://doi.org/10.1002/marc.202401156"
      });
    }
  });

  it("keeps detailed retrospective notes out of public markdown bodies", () => {
    for (const locale of locales) {
      for (const entry of readEntries(locale)) {
        expect(entry.content.trim()).toBe("");
      }
    }
  });

  it("does not publish raw experiment notes or advisor details", () => {
    for (const locale of locales) {
      for (const entry of readEntries(locale)) {
        const publicText = [JSON.stringify(entry.data), entry.content].join("\n");

        for (const fragment of detailedPrivateFragments) {
          expect(publicText).not.toContain(fragment);
        }
      }
    }
  });
});
