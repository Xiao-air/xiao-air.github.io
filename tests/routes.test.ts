import { describe, expect, it } from "vitest";
import { careerPath, homePath, languageSwitchPath } from "../src/lib/routes";

describe("localized routes", () => {
  it("uses Chinese as the default public route", () => {
    expect(homePath("zh")).toBe("/");
    expect(careerPath("zh", "workflow-automation")).toBe("/career/workflow-automation/");
  });

  it("uses /en/ for English public routes", () => {
    expect(homePath("en")).toBe("/en/");
    expect(careerPath("en", "workflow-automation")).toBe("/en/career/workflow-automation/");
  });

  it("switches the current page to the paired locale route", () => {
    expect(languageSwitchPath("zh", "workflow-automation")).toBe("/en/career/workflow-automation/");
    expect(languageSwitchPath("en", "workflow-automation")).toBe("/career/workflow-automation/");
  });
});
