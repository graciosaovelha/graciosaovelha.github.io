import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { starlightTagsExtension } from 'starlight-tags';

const bookSchema = z.enum([
  'bereshit',
  'shemot',
  'vayikra',
  'bamidbar',
  'devarim',
]);

const categorySchema = z.enum([
  'torah',
  'parashat',
  'estudo',
  'glossario',
  'institucional',
]);

const datePattern = /^\d{4}-\d{2}-\d{2}$/;

const graciosaOvelhaSchema = z.intersection(
  starlightTagsExtension,
  z.object({
    publishedAt: z.string().regex(datePattern, 'Use AAAA-MM-DD.').optional(),
    updatedAt: z.string().regex(datePattern, 'Use AAAA-MM-DD.').optional(),
    category: categorySchema.optional(),
    book: bookSchema.optional(),
    chapter: z.number().int().positive().optional(),
    parashah: z.string().optional(),
  }),
);

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: graciosaOvelhaSchema }),
  }),
};
