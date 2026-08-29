import { defineCollection, z } from "astro:content";

const career = defineCollection({
  type: "content",
  schema: z.object({
    visibility: z.literal("public"),
    title: z.string(),
    period: z.string(),
    summary: z.string(),
    category: z.enum(["project", "extracurricular"]),
    paper: z.object({
      title: z.string(),
      doi: z.string(),
      journal: z.string(),
      url: z.string()
    }).optional()
  })
});

export const collections = { career };
