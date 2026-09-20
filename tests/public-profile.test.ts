import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { profile } from "../src/lib/profile";
import {
  currentFocusThemes,
  extracurricularTimeline,
  groupHonorsByYear,
  honorsAwards,
  skillCredentialCategories
} from "../src/lib/public-profile";

const root = fileURLToPath(new URL("..", import.meta.url));
const locales = ["zh", "en"] as const;

function expectLocalizedText(value: unknown) {
  expect(value).toEqual(expect.any(Object));

  for (const locale of locales) {
    expect((value as Record<string, unknown>)[locale]).toEqual(expect.any(String));
    expect((value as Record<string, string>)[locale].length).toBeGreaterThan(0);
  }
}

describe("public profile data", () => {
  it("keeps the requested public identity and profile photo", () => {
    expect(profile.displayName.zh).toBe("肖奕晨（Xiao Yichen）");
    expect(profile.displayName.en).toBe("Yichen Xiao");
    expect(profile.photoUrl).toBe("/profile-avatar.jpg");
    expect(profile.avatarUrl).toBe("/profile-avatar.jpg");
    expect(profile.email).toBe("xyc18158@163.com");
    expect(profile.friendLinks.map((link) => link.url)).toEqual([
      "https://github.com/Xiao-air",
      "http://www.weigroupfudan.com/"
    ]);
    expect(profile.intro.zh).toContain("复旦大学高分子科学系");
    expect(profile.education.length).toBe(2);
    expect(profile.education[0].period).toBe("2022.09 - 2026.06");
    expect(profile.education[1].period).toBe("2026.09 - 至今");
    expect(profile.education[1].periodEn).toBe("2026.09 - Present");
    expect(fs.existsSync(path.join(root, "public", "profile-avatar.jpg"))).toBe(true);
    expect(fs.existsSync(path.join(root, "public", "profile-photo.png"))).toBe(false);
  });

  it("keeps extracurricular experience grouped by year and bilingual", () => {
    expect(extracurricularTimeline.map((group) => group.year)).toEqual(["2026", "2025", "2024", "2023", "2022"]);
    expect(extracurricularTimeline.flatMap((group) => group.items).length).toBe(12);

    for (const group of extracurricularTimeline) {
      for (const item of group.items) {
        expect(item.id).toEqual(expect.any(String));
        expectLocalizedText(item.title);
        expectLocalizedText(item.role);
      }
    }
  });

  it("keeps honors and awards dated, bilingual, and populated", () => {
    expect(honorsAwards.length).toBeGreaterThanOrEqual(22);
    expect(honorsAwards[0].date).toBe("2026.07");
    expect(honorsAwards.map((award) => award.date)).toContain("2023.11");

    for (const award of honorsAwards) {
      expect(award.date).toMatch(/^\d{4}\.\d{2}$/);
      expectLocalizedText(award.title);
    }
  });

  it("groups honors by year without changing their order", () => {
    const groups = groupHonorsByYear();

    expect(groups.map((group) => group.year)).toEqual(["2026", "2025", "2024", "2023"]);
    expect(groups[0].items[0].date).toBe("2026.07");
    expect(groups.flatMap((group) => group.items)).toEqual(honorsAwards);
  });

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
