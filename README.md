# Verix Ultimate Website

Ultimate client-preview version focused on:

- Home page visual polish
- Premium project portfolio
- Smooth GSAP animations
- Arabic / English / French
- Dark mode by default with light-mode toggle
- Verix favicon and app icons
- Vercel-ready Next.js build

## Run locally

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

The root route redirects to `/ar`.

## Test production performance

Development mode is slower. To test the real optimized version:

```bash
npm run build
npm run start
```

Then open:

```bash
http://localhost:3000
```

## Important

Do not run:

```bash
npm audit fix --force
```

It may change major package versions and break the project.

## Project images

The portfolio layout is optimized and the images are displayed with high-quality settings, but the original source images came from the supplied company profile. For true ultra-high-resolution results, replace the images in:

```bash
public/images/project-gallery
```

with original project renders/photos from the client.
