# Large Language Music

A minimal Next.js landing page for Large Language Music, an LLM-generated music
label built around virtual artists, mastering inquiries, and a deliberately
spare, mysterious launch surface.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev -- --hostname 127.0.0.1
   ```

3. Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Scripts

- `npm run dev` runs the local dev server with Turbopack
- `npm run build` creates a production build
- `npm run start` serves the production build
- `npm run lint` runs ESLint

## Current Site

- Dark, single-page landing experience
- Direct contact CTA for mastering and artist inquiries
- Brand image anchor in `public/large-language-music-landing-icon.png`
- Metadata and copy configured in the app router homepage/layout

## Structure

- `src/app/page.tsx` contains the landing page content
- `src/app/layout.tsx` defines site metadata
- `src/app/globals.css` contains the visual system and layout styling
- `public` contains static assets, including the launch image
