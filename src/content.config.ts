import { defineCollection, z } from "astro:content";

const career = defineCollection({
  type: "content",
  schema: z.object({
    visibility: z.literal("public"),
    title: z.string(),
    period: z.string(),
    role: z.string(),
    summary: z.string(),
    impact: z.string(),
    skills: z.array(z.string()),
    evidence: z.array(z.string())
  })
});

export const collections = { career };
