import { describe, expect, it } from "vitest";
import {
  careerPath,
  focusPath,
  homePath,
  languageSwitchPath,
  skillsPath,
  timelinePath
} from "../src/lib/routes";

describe("localized routes", () => {
  it("uses Chinese as the default public route", () => {
    expect(homePath("zh")).toBe("/");
    expect(timelinePath("zh")).toBe("/timeline/");
    expect(skillsPath("zh")).toBe("/skills/");
    expect(focusPath("zh")).toBe("/focus/");
    expect(careerPath("zh", "workflow-automation")).toBe("/career/workflow-automation/");
  });

  it("uses /en/ for English public routes", () => {
    expect(homePath("en")).toBe("/en/");
    expect(timelinePath("en")).toBe("/en/timeline/");
    expect(skillsPath("en")).toBe("/en/skills/");
    expect(focusPath("en")).toBe("/en/focus/");
    expect(careerPath("en", "workflow-automation")).toBe("/en/career/workflow-automation/");
  });

  it("switches the current page to the paired locale route", () => {
    expect(languageSwitchPath("zh", "workflow-automation")).toBe("/en/career/workflow-automation/");
    expect(languageSwitchPath("en", "workflow-automation")).toBe("/career/workflow-automation/");
  });
});
