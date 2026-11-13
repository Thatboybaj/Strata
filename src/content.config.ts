import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const log = z.object({ title: z.string(), lines: z.array(z.string()) });

const expeditions = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/expeditions' }),
  schema: ({ image }) => z.object({
    number: z.string(),
    title: z.string(),
    accent: z.string().optional(),
    region: z.string(),
    location: z.string(),
    coords: z.string(),
    terrain: z.string(),
    landscape: z.enum(['Polar', 'Desert', 'Volcanic', 'Rainforest', 'Alpine', 'Marine']),
    days: z.number(),
    year: z.number(),
    firstSketch: z.string(),
    status: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    cover: image(),
    plate: image(),
    summary: z.string(),
    site: z.string(),
    siteImage: image(),
    siteLogs: z.array(log).default([]),
    journal: z.array(z.object({ day: z.string(), date: z.string(), text: z.string(), accent: z.string().optional() })).default([]),
    quote: z.string(),
    plates: z.array(z.object({ image: image(), caption: z.string() })).default([]),
    numbers: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    next: reference('expeditions').optional(),
  }),
});

export const collections = { expeditions };
