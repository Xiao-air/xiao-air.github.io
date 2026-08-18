import { describe, expect, it } from "vitest";
import {
  currentFocusThemes,
  skillCredentialCategories
} from "../src/lib/public-profile";

const locales = ["zh", "en"] as const;

function expectLocalizedText(value: unknown) {
  expect(value).toEqual(expect.any(Object));

  for (const locale of locales) {
    expect((value as Record<string, unknown>)[locale]).toEqual(expect.any(String));
    expect((value as Record<string, string>)[locale].length).toBeGreaterThan(0);
  }
}

describe("public profile data", () => {
  it("keeps skills and credentials structured and bilingual", () => {
    expect(skillCredentialCategories.length).toBeGreaterThanOrEqual(1);

    for (const category of skillCredentialCategories) {
      expect(Object.keys(category).sort()).toEqual(["id", "items", "title"]);
      expect(category.id).toEqual(expect.any(String));
      expectLocalizedText(category.title);
      expect(category.items.length).toBeGreaterThanOrEqual(1);

      for (const item of category.items) {
        expect(Object.keys(item).sort()).toEqual(
          item.credential ? ["credential", "description", "id", "label"] : ["description", "id", "label"]
        );
        expect(item.id).toEqual(expect.any(String));
        expectLocalizedText(item.label);
        expectLocalizedText(item.description);

        if (item.credential) {
          expectLocalizedText(item.credential);
        }
      }
    }
  });

  it("keeps current focus to two or three direction-level themes", () => {
    expect(currentFocusThemes.length).toBeGreaterThanOrEqual(2);
    expect(currentFocusThemes.length).toBeLessThanOrEqual(3);

    for (const theme of currentFocusThemes) {
      expect(Object.keys(theme).sort()).toEqual(["description", "id", "title"]);
      expect(theme.id).toEqual(expect.any(String));
      expectLocalizedText(theme.title);
      expectLocalizedText(theme.description);
    }
  });
});
