// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const issues = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/issues" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishedAt: z.date(),
    status: z.enum(["planned", "draft", "published"]),
    issue: z.number(),
    tags: z.array(z.string()).optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { issues };