import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    authorLinkedIn: z.string().optional(),
  }),
});

export const collections = { posts };
