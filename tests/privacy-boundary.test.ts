import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = fileURLToPath(new URL("..", import.meta.url));

describe("public repository privacy boundary", () => {
  it("does not track the private career vault or private-note directories", () => {
    const tracked = execFileSync("git", ["ls-files"], {
      cwd: root,
      encoding: "utf8"
    }).split(/\r?\n/);

    const disallowedPathFragments = [
      "career-vault/",
      "nodes/",
      "projects/",
      "reviews/",
      "planning/",
      "public-extracts/",
      "evidence/raw/"
    ];

    for (const file of tracked) {
      for (const fragment of disallowedPathFragments) {
        expect(file).not.toContain(fragment);
      }
    }
  });

  it("documents the three public homepage sections", () => {
    const homePage = fs.readFileSync(path.join(root, "src", "components", "HomePage.astro"), "utf8");

    expect(homePage).toContain("Career Timeline");
    expect(homePage).toContain("Skills & Credentials");
    expect(homePage).toContain("Current Focus");
  });

  it("lets visitors jump directly to each public career section", () => {
    const homePage = fs.readFileSync(path.join(root, "src", "components", "HomePage.astro"), "utf8");

    expect(homePage).toContain('href="#timeline"');
    expect(homePage).toContain('href="#skills"');
    expect(homePage).toContain('href="#focus"');
  });

  it("renders timeline entries as an ordered career ledger", () => {
    const homePage = fs.readFileSync(path.join(root, "src", "components", "HomePage.astro"), "utf8");

    expect(homePage).toContain('<ol class="timeline-list">');
    expect(homePage).toContain("</ol>");
  });
});
