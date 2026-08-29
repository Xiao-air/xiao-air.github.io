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
    expect(homePage).toContain("profile-identity");
    expect(homePage).toContain("profile-photo");
    expect(homePage).toContain("profile-facts");
    expect(homePage).toContain("profile.friendLinks");
    expect(homePage).toContain("profile.email");
    expect(homePage).toContain("profile-main");
    expect(homePage).toContain("profile.intro");
    expect(homePage).toContain("extracurricularTimeline");
    expect(homePage).toContain("honorsAwards");
    expect(homePage).toContain("groupHonorsByYear");
    expect(homePage).toContain("honorYearGroups");
    expect(homePage).toContain("homeTimelineGroups");
    expect(homePage).toContain("heading-mark");
    expect(homePage).toContain("项目经历");
    expect(homePage).toContain("社会活动与领导经历");
    expect(homePage).toContain("Leadership & Activities");
    expect(homePage).toContain("荣誉奖项");
    expect(homePage).not.toContain("把经历整理成");
    expect(homePage).not.toContain("本科以来参与的科研、竞赛与企业研发项目。");
    expect(homePage).not.toContain("近期更新");
    expect(homePage).not.toContain("Selected Experience");
    expect(homePage).not.toContain("Skills & Credentials");
    expect(homePage).not.toContain("Current Focus");
    expect(homePage).not.toContain("updates");
    expect(homePage).not.toContain("highlightedSkills");
    expect(homePage).not.toContain("currentFocusThemes");
    expect(homePage).not.toContain("home-shell");
    expect(homePage).not.toContain("home-identity");
    expect(homePage).not.toContain("gateway-card");
    expect(homePage).not.toContain("headline-line");
    expect(homePage).not.toContain("skill-category-list");
    expect(homePage).not.toContain("focus-list");
  });

  it("separates project and extracurricular timelines on the public timeline page", () => {
    const timelinePage = fs.readFileSync(path.join(root, "src", "components", "TimelinePage.astro"), "utf8");

    expect(timelinePage).toContain('getCareerEntries(locale, "project")');
    expect(timelinePage).toContain("extracurricularTimeline");
    expect(timelinePage).toContain("groupHonorsByYear");
    expect(timelinePage).toContain("award-year-list");
    expect(timelinePage).toContain("timeline-title-link");
    expect(timelinePage).toContain("项目经历");
    expect(timelinePage).toContain("社会活动与领导经历");
    expect(timelinePage).toContain("Leadership & Activities");
    expect(timelinePage).not.toContain("本科以来参与的科研、竞赛与企业研发项目。");
    expect(timelinePage).not.toContain("entry.data.skills");
    expect(timelinePage).not.toContain("entry.data.outcome");
    expect(timelinePage).not.toContain("entry.data.role");
  });

  it("uses a compact circular portrait and non-wrapping time ranges", () => {
    const styles = fs.readFileSync(path.join(root, "src", "styles", "global.css"), "utf8");

    expect(styles).toContain(".profile-photo");
    expect(styles).toContain("border-radius: 50%");
    expect(styles).toContain("width: 132px");
    expect(styles).toContain("white-space: nowrap");
  });

  it("keeps the visual language restrained and editorial", () => {
    const styles = fs.readFileSync(path.join(root, "src", "styles", "global.css"), "utf8");
    const layout = fs.readFileSync(path.join(root, "src", "layouts", "SiteLayout.astro"), "utf8");

    expect(styles).toContain("--color-page: #fbfbfa");
    expect(styles).toContain("--font-serif");
    expect(styles).toContain(".heading-mark");
    expect(styles).toContain(".award-year-list");
    expect(styles).toContain(".timeline-title-link");
    expect(styles).toContain("position: sticky");
    expect(styles).not.toContain("box-shadow");
    expect(styles).not.toContain("linear-gradient");
    expect(layout).toContain('aria-current={isCurrentPath(item.href) ? "page" : undefined}');
  });

  it("keeps the top navigation focused on timeline, blog, and language switching", () => {
    const layout = fs.readFileSync(path.join(root, "src", "layouts", "SiteLayout.astro"), "utf8");
    const blogPage = fs.readFileSync(path.join(root, "src", "components", "BlogPage.astro"), "utf8");

    expect(layout).toContain("blogPath");
    expect(layout).toContain('label: isZh ? "博客" : "Blog"');
    expect(layout).not.toContain("focusPath");
    expect(layout).not.toContain('label: isZh ? "方向" : "Focus"');
    expect(layout).not.toContain("skillsPath");
    expect(layout).not.toContain("resumePath");
    expect(layout).not.toContain('class="external-link" href={profile.githubUrl}>GitHub');
    expect(blogPage).toContain("非学术文章");
    expect(blogPage).toContain("Non-Academic Writing");
  });
});
