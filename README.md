# CoachKart — Next.js Website

A complete, responsive Next.js (App Router + TypeScript + Tailwind CSS)
recreation of the CoachKart doorstep fitness coaching site, built around the
brand's navy / teal / orange logo palette.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Structure

- `app/layout.tsx` — root layout, fonts (Sora for display, Inter for body), metadata
- `app/page.tsx` — assembles all sections on a single scrollable page
- `app/globals.css` — design tokens, the "Lunge Mark" signature motif, diagonal section seams
- `components/Navbar.tsx` — sticky, responsive navbar with the requested links:
  Home, About, Services, Our Standards, For Trainers (Careers), Contact, Login, and a
  WhatsApp CTA (`+91 85955 96066`)
- `components/Hero.tsx` — `#home`
- `components/About.tsx` — `#about`
- `components/Services.tsx` — `#services` (Our Programs)
- `components/Standards.tsx` — `#standards` (Our Quality Standards)
- `components/Careers.tsx` — `#careers` (For Trainers)
- `components/Testimonials.tsx` — client testimonials
- `components/Contact.tsx` — `#contact`, booking form that hands off to WhatsApp
- `components/Footer.tsx` — quick links, programs, social links
- `components/WhatsAppFloat.tsx` — floating WhatsApp button
- `components/LogoMark.tsx` — SVG logo mark matching the CoachKart icon

## Design notes

- **Palette**: navy `#0F2C4A`, teal `#14919B`, orange `#FF5A1F`, cream `#FAF8F3` —
  pulled directly from the CoachKart logo.
- **Type**: Sora (display/headings) + Inter (body), loaded via `next/font/google`.
- **Signature motif**: the "Lunge Mark" — a rotated diamond badge echoing the
  crossing limbs of the logo's "X" figure — recurs behind icons, numerals, and
  avatars. Diagonal "seam" dividers add a kinetic rhythm between sections.
- All anchor links (`#home`, `#about`, etc.) match the navigation requested,
  with smooth scrolling and header-aware scroll offsets.
