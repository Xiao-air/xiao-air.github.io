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

const blog = defineCollection({
  type: "content",
  schema: z.object({
    visibility: z.enum(["public", "draft"]),
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    language: z.enum(["zh", "en"]),
    originalFile: z.object({
      label: z.string(),
      url: z.string(),
      type: z.enum(["pdf", "docx"])
    }).optional()
  })
});

export const collections = { career, blog };
