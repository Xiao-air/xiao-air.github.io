# Xiao-air.github.io

Bilingual public career website for GitHub Pages.

This repository is the public presentation layer of a larger career reflection system. Treat it as public unless repository visibility is explicitly verified otherwise.

## System Architecture

```text
work/
├── Xiao-air.github.io/  # public career website
└── career-vault/        # private reflection vault, outside this repo
```

The private vault must remain physically outside this repository root. Do not rely on `.gitignore` as the privacy boundary.

## Public Website Scope

This site may contain only public-safe career presentation data:

- Career Timeline: selected public career and project entries
- Skills & Credentials: structured public skills, languages, tools, and credentials
- Current Focus: two or three direction-level themes

Public career entries live in `src/content/career/zh` and `src/content/career/en`. Chinese and English versions must use the same stable slug.

Structured public profile data lives in `src/lib/public-profile.ts`.

## Privacy Boundary

Do not create private reflection files in this repository.

These belong in the external private vault:

- raw project retrospectives
- quarterly reviews
- planning notes
- detailed future plans
- capability gaps and private weaknesses
- salary or negotiation notes
- private evidence, screenshots, credentials, internal docs, or unpublished data
- names or feedback from managers, teammates, clients, or interviewers without permission

Publication fails closed: if uncertain, keep it private and ask for explicit approval.

## AI Maintenance Modes

Future AI sessions should follow these modes:

- Capture: write project notes in the private vault only.
- Quarterly Review: synthesize private vault notes only.
- Publication Prep: create public-extract candidates in the private vault only.
- Publish: update this public website only after explicit user instruction such as "发布到网站" or "同步到公开网站".

Never infer publication permission from a private retrospective.

## Workflows

Daily / event workflow:

```text
Important event -> private project node in ../career-vault/projects/
```

Quarterly workflow:

```text
Project nodes -> quarterly review -> growth analysis -> next focus
```

Publication workflow:

```text
Private notes -> public extract candidate -> human review -> website -> test -> build -> publish
```

## Local Development

```powershell
pnpm install
pnpm test
pnpm privacy-check
pnpm build
pnpm dev
```

## Deployment

GitHub Actions builds and deploys this static Astro site to GitHub Pages on pushes to `main`.

Do not push, force-push, rewrite history, change repository visibility, or publish remote changes without explicit user authorization.
