import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // Ensure this is imported!

const blog = defineCollection({
  // base: "./src/content/blog" tells Astro to look EXACTLY inside that folder
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    tagLabel: z.string(),
  }),
});

export const collections = { blog };
