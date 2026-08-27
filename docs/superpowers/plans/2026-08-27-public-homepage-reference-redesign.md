# Public Homepage Reference Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the public homepage and visual language into a restrained professional personal homepage inspired by the provided reference.

**Architecture:** Keep Astro routing, bilingual data, content collections, privacy tests, and GitHub Pages deployment intact. Replace the homepage presentation with a profile rail plus document-style content sections, and simplify global CSS so subpages inherit a calmer CV-like look.

**Tech Stack:** Astro, TypeScript, CSS, Vitest, GitHub Pages Actions.

**Spec:** `docs/superpowers/specs/2026-08-27-public-homepage-reference-redesign.md`

## Global Constraints

- Do not import real private career data.
- Do not publish private vault content.
- Keep bilingual routing.
- Keep the public site static.
- Remove dashboard-like, card-heavy, decorative presentation from the homepage.
- Keep Current Focus direction-level only.

---

### Task 1: Homepage Layout Regression Test

**Files:**
- Modify: `tests/privacy-boundary.test.ts`
- Test: `tests/privacy-boundary.test.ts`

**Interfaces:**
- Consumes: `src/components/HomePage.astro`
- Produces: test assertions that require the new reference-style homepage classes and reject old hero/gateway classes.

- [ ] **Step 1: Write the failing test**

```ts
expect(homePage).toContain("profile-home");
expect(homePage).toContain("profile-sidebar");
expect(homePage).toContain("profile-main");
expect(homePage).toContain("Selected Experience");
expect(homePage).toContain("Skills & Credentials");
expect(homePage).not.toContain("home-shell");
expect(homePage).not.toContain("home-identity");
expect(homePage).not.toContain("gateway-card");
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test tests/privacy-boundary.test.ts`

Expected: FAIL because `HomePage.astro` still uses old homepage classes.

- [ ] **Step 3: Implement minimal homepage changes**

Replace the old hero/gateway layout with a profile sidebar and document-style main sections.

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm test tests/privacy-boundary.test.ts`

Expected: PASS.

### Task 2: Visual System Reset

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/layouts/SiteLayout.astro`

**Interfaces:**
- Consumes: existing route helpers and profile data.
- Produces: restrained top navigation, page background, link styling, profile layout, list sections, and calmer subpage styling.

- [ ] **Step 1: Write or update assertions**

Extend the homepage test from Task 1 to reject old classes that depended on the decorative CSS.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test tests/privacy-boundary.test.ts`

Expected: FAIL until old class names are removed.

- [ ] **Step 3: Implement CSS reset**

Replace heavy shadows, textured background, large hero sizing, and card-heavy layout with a clean white/gray CV-style system.

- [ ] **Step 4: Run full tests**

Run: `pnpm test`

Expected: all tests pass.

### Task 3: Build, Preview, Commit, Deploy

**Files:**
- Verify: all modified files

**Interfaces:**
- Consumes: Tasks 1 and 2.
- Produces: committed and pushed redesign deployed through GitHub Pages.

- [ ] **Step 1: Run privacy check**

Run: `pnpm privacy-check`

Expected: all public boundary tests pass.

- [ ] **Step 2: Run production build**

Run: `pnpm build`

Expected: Astro check reports 0 errors and build completes.

- [ ] **Step 3: Inspect locally**

Use local preview or built HTML to verify the homepage reads as a restrained professional homepage.

- [ ] **Step 4: Commit and push**

```bash
git add .
git commit -m "Redesign public homepage around reference style"
git push
```

- [ ] **Step 5: Verify production**

Check:

- `https://xiao-air.github.io/`
- `https://xiao-air.github.io/timeline/`
- `https://xiao-air.github.io/skills/`
- `https://xiao-air.github.io/focus/`
- `https://xiao-air.github.io/en/`
