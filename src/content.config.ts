import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

import {
  docsLoader,
} from '@astrojs/starlight/loaders';

import {
  docsSchema,
} from '@astrojs/starlight/schema';

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
  'institucional',
]);

const graciosaOvelhaSchema = z.object({
  category: categorySchema.optional(),
  book: bookSchema.optional(),

  chapter: z
    .number()
    .int()
    .positive()
    .optional(),

  parashah: z.string().optional(),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: graciosaOvelhaSchema,
    }),
  }),
};