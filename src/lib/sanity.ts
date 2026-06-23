import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo-project',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-23',
  useCdn: true
});

export const projectQuery = `*[_type == "project"] | order(order asc) {
  title,
  slug,
  category,
  description,
  image,
  order
}`;

export const serviceQuery = `*[_type == "service"] | order(order asc) {
  title,
  slug,
  description,
  order
}`;
