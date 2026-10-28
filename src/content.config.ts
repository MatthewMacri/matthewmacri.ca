import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Shown in lists. Lead with what it does, not adjectives.
      summary: z.string().max(170),
      summaryFr: z.string().max(190).optional(),
      year: z.coerce.string(),
      role: z.string(),
      context: z.enum(['work', 'personal', 'school', 'hackathon', 'company']),
      stack: z.array(z.string()).max(7),
      status: z.enum(['live', 'in progress', 'maintained', 'archived', 'internal']),
      links: z
        .object({
          live: z.string().url().optional(),
          repo: z.string().optional(), // owner/name on GitHub, public repos only
        })
        .default({}),
      tier: z.union([z.literal(1), z.literal(2)]),
      order: z.number(),
      confidential: z.boolean().default(false),
      team: z.string().optional(),
      cover: z
        .object({
          src: image(),
          alt: z.string(),
          caption: z.string().optional(),
          // CSS object-position for cropped thumbnails; screenshots default to the top.
          position: z.string().default('top'),
        })
        .optional(),
    }),
});

export const collections = { projects };
