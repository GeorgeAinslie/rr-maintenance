# RR Maintenance — Next.js Website

Modern rebuild of the RR Maintenance landing site using Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Netlify

This project includes `netlify.toml` configured for the [Netlify Next.js runtime](https://docs.netlify.com/frameworks/next-js/overview/).

1. Connect the `rr-maintenance-web` folder as your site root (or deploy from the monorepo with base directory set).
2. Netlify will install dependencies and run `npm run build`.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain for accurate sitemap/OG URLs.

## Contact form

The enquiry form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). A hidden `public/forms.html` helps Netlify detect the form at build time. Submissions redirect to `/thank-you`.

## Brand assets

Logo and favicon are in `public/`. Original assets remain in the parent folder at `../assets/`.

## Project structure

- `src/app/` — routes, metadata, sitemap, robots
- `src/components/` — layout, sections, UI primitives
- `src/lib/site.ts` — copy, services, testimonials, FAQ content

## Edit content

Update messaging, contact details, services, and testimonials in `src/lib/site.ts`.
