import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

import {
  docsLoader,
  i18nLoader,
} from '@astrojs/starlight/loaders';

import {
  docsSchema,
  i18nSchema,
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
  'estudo',
  'glossario',
  'institucional',
]);

const datePattern = /^\d{4}-\d{2}-\d{2}$/;

const parashahReferenceSchema = z.object({
  name: z.string(),
  verses: z.string().optional(),
});

const graciosaOvelhaSchema = z.object({
  publishedAt: z
    .string()
    .regex(datePattern, 'Use AAAA-MM-DD.')
    .optional(),

  updatedAt: z
    .string()
    .regex(datePattern, 'Use AAAA-MM-DD.')
    .optional(),

  category: categorySchema.optional(),

  book: bookSchema.optional(),

  chapter: z
    .number()
    .int()
    .positive()
    .optional(),

  // Usado pela própria página de uma parashat.
  parashah: z.string().optional(),

  // Associa um capítulo da Torah a uma ou mais parashot.
  parashot: z
    .array(parashahReferenceSchema)
    .optional(),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: graciosaOvelhaSchema,
    }),
  }),

  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema(),
  }),
};