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

  it("keeps the homepage as a restrained professional profile page", () => {
    const homePage = fs.readFileSync(path.join(root, "src", "components", "HomePage.astro"), "utf8");

    expect(homePage).toContain("profile-home");
    expect(homePage).toContain("profile-sidebar");
    expect(homePage).toContain("profile-main");
    expect(homePage).toContain("Selected Experience");
    expect(homePage).toContain("Skills & Credentials");
    expect(homePage).toContain("Current Focus");
    expect(homePage).toContain("timelinePath(locale)");
    expect(homePage).toContain("skillsPath(locale)");
    expect(homePage).toContain("focusPath(locale)");
    expect(homePage).not.toContain("把经历整理成");
    expect(homePage).not.toContain("home-shell");
    expect(homePage).not.toContain("home-identity");
    expect(homePage).not.toContain("gateway-card");
    expect(homePage).not.toContain("headline-line");
    expect(homePage).not.toContain("timeline-list");
    expect(homePage).not.toContain("skill-category-list");
    expect(homePage).not.toContain("focus-list");
  });
});
