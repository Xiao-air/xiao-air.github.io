import { describe, expect, it } from "vitest";
import {
  blogPath,
  careerPath,
  focusPath,
  homePath,
  languageSwitchPath,
  skillsPath,
  timelinePath
} from "../src/lib/routes";

const exampleProjectSlug = "photochromic-azo-isomerization-dft";

describe("localized routes", () => {
  it("uses Chinese as the default public route", () => {
    expect(homePath("zh")).toBe("/");
    expect(timelinePath("zh")).toBe("/timeline/");
    expect(skillsPath("zh")).toBe("/skills/");
    expect(focusPath("zh")).toBe("/focus/");
    expect(blogPath("zh")).toBe("/blog/");
    expect(careerPath("zh", exampleProjectSlug)).toBe(`/career/${exampleProjectSlug}/`);
  });

  it("uses /en/ for English public routes", () => {
    expect(homePath("en")).toBe("/en/");
    expect(timelinePath("en")).toBe("/en/timeline/");
    expect(skillsPath("en")).toBe("/en/skills/");
    expect(focusPath("en")).toBe("/en/focus/");
    expect(blogPath("en")).toBe("/en/blog/");
    expect(careerPath("en", exampleProjectSlug)).toBe(`/en/career/${exampleProjectSlug}/`);
  });

  it("switches the current page to the paired locale route", () => {
    expect(languageSwitchPath("zh", exampleProjectSlug)).toBe(`/en/career/${exampleProjectSlug}/`);
    expect(languageSwitchPath("en", exampleProjectSlug)).toBe(`/career/${exampleProjectSlug}/`);
  });
});
