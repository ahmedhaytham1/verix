# Sanity CMS Readiness

The website currently works from local TypeScript content in `src/data/content.ts` so it can be reviewed immediately without Sanity credentials.

To connect Sanity:

1. Create a Sanity project.
2. Add the schema files in `sanity/schemas` to your studio.
3. Add these variables to Vercel:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-23
```

4. Replace local data calls with GROQ queries from `src/lib/sanity.ts`.
