import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
    // Strip the file extension so post IDs look like "welcome-to-our-blog"
    // instead of "welcome-to-our-blog.md" — keeps URLs clean
    generateId: ({ entry }) => entry.replace(/\.mdx?$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    authorTitle: z.string().optional(),
    /** Path relative to /public — e.g. "/blog/my-image.jpg" */
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** 'en' = English, 'es' = Spanish */
    language: z.enum(['en', 'es']).default('en'),
    /** Set to true to hide a post from the listing until it's ready */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
