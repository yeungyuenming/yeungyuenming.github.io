import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string().optional(),
    date: z.string(),
    year: z.number().optional(),
    type: z.enum(['journal', 'conference', 'preprint', 'book', 'other']).optional(),
    lang: z.enum(['en', 'zh']),
    link: z.string().url().optional(),
    pdf: z.string().url().optional(),
    code: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    lang: z.enum(['en', 'zh']),
    link: z.string().url().optional(),
    type: z.enum(['publication', 'award', 'event', 'other']).optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lang: z.enum(['en', 'zh']),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const teaching = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    term: z.string().optional(),
    lang: z.enum(['en', 'zh']),
    description: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    lang: z.enum(['en', 'zh']),
    avatar: z.string().optional(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    type: z.enum(['pi', 'researcher', 'student', 'collaborator', 'alumni']).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
  }),
});

const photos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    lang: z.enum(['en', 'zh']),
    images: z.array(z.string()),
    description: z.string().optional(),
  }),
});

export const collections = {
  publications,
  news,
  research,
  teaching,
  team,
  photos,
};

