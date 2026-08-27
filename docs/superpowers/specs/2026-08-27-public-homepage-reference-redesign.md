# Public Homepage Reference Redesign

## Context

The current public site is structurally useful but visually too expressive for the user's preferred direction. The new reference is `https://tyang816.github.io/zh/`, which feels closer to a restrained professional or academic personal homepage: content first, modest typography, plain navigation, and a profile area that supports reading rather than competing with it.

## Goal

Rebuild the public presentation layer so it feels like a trustworthy personal homepage and resume extension, while preserving the existing long-term career system underneath.

The site should read as:

- calm
- credible
- content-led
- easy to maintain
- safe for public viewing

It should no longer read as:

- dashboard-like
- brand-heavy
- decorative
- card-heavy
- system-first

## Scope

In scope:

- Replace the homepage hero and gateway card layout with a two-column professional homepage.
- Keep a left profile column on desktop and a compact profile block on mobile.
- Present homepage sections in a document-like flow: About, Updates, Selected Experience, Projects, Skills & Credentials, Current Focus.
- Keep existing subpages for Timeline, Skills, Focus, Resume, and detail pages.
- Simplify global visual tokens and remove heavy shadows, textured backgrounds, large hero type, and decorative copy.
- Keep bilingual routing and privacy tests.

Out of scope:

- Importing real private career data.
- Publishing private vault content.
- Reworking the private `career-vault`.
- Adding new third-party design systems.
- Adding animation-heavy effects.

## Information Architecture

Homepage desktop layout:

```text
top nav
------------------------------------------------
profile column       main content column
avatar/name          About
role                 Updates
links                Selected Experience
credentials          Projects
                     Skills & Credentials
                     Current Focus
------------------------------------------------
footer
```

Mobile layout:

```text
top nav
profile summary
About
Updates
Selected Experience
Projects
Skills & Credentials
Current Focus
footer
```

## Visual Direction

Use a restrained palette:

- paper: `#ffffff`
- page: `#f7f7f7`
- ink: `#202124`
- muted: `#5f6368`
- link: `#1a5fb4`
- rule: `#dadce0`

Typography:

- System sans stack for interface and body text.
- Moderate sizes, no hero-scale typography on the homepage.
- Clear section headings with bottom rules.

Layout:

- Max width around 1100px.
- Desktop two-column layout with a narrow profile rail and a wider content column.
- Minimal borders and no card shadows for normal content.

Signature choice:

- Use a quiet resume/CV homepage rhythm rather than a landing-page hero. The memorable element is the long-term career record expressed as clean, dated entries.

## Content Rules

Homepage copy must be short and practical:

- No large slogan blocks.
- No abstract system language as the primary visual object.
- No private plans, detailed future tasks, or sensitive reflection.
- Keep Current Focus direction-level only.

## Testing And Verification

Update tests to assert that:

- The homepage uses the new profile/content layout classes.
- The homepage no longer uses the old gateway card or hero identity classes.
- Public boundary tests still reject private vault directories.
- All public profile data remains structured and bilingual.

Run:

- `pnpm test`
- `pnpm privacy-check`
- `pnpm build`

After deployment:

- Check `https://xiao-air.github.io/`
- Check `/timeline/`, `/skills/`, `/focus/`, and `/en/`

## Publishing

After local verification, commit and push to `main`. GitHub Pages should deploy through the existing `Deploy to GitHub Pages` workflow.
