# Edmond Tech Services — Website

**React 18 · TypeScript · Tailwind CSS · Vite**

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → /dist
npm run preview    # preview production build
```

---

## Project Structure

```
ets2/
├── index.html              ← Full SEO meta, JSON-LD schema, Google Fonts
├── package.json
├── vite.config.ts          ← Path alias  @/ → src/
├── tailwind.config.js      ← Custom navy/gold/steel palette + Sora/Jakarta Sans
├── tsconfig.json
├── postcss.config.js
└── src/
    ├── main.tsx            ← Entry: HelmetProvider + BrowserRouter + StrictMode
    ├── App.tsx             ← Routes + scroll-to-top + layout wrapper
    ├── index.css           ← CSS variables, design tokens, utility classes
    │
    ├── assets/
    │   └── logo_b64.ts     ← Base64-embedded logo (no FOUC, no extra request)
    │
    ├── types/
    │   └── index.ts        ← Shared TypeScript interfaces
    │
    ├── utils/
    │   └── constants.ts    ← ALL content, copy, and config — edit here first
    │
    ├── hooks/
    │   ├── useScrolled.ts  ← Navbar scroll detection
    │   └── useInView.ts    ← IntersectionObserver for scroll reveal
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx  ← Sticky navbar, active link, mobile drawer
    │   │   └── Footer.tsx  ← Full footer with links, contact, copyright
    │   │
    │   ├── ui/             ← Reusable primitives
    │   │   ├── WAIcon.tsx       ← WhatsApp SVG icon
    │   │   ├── FloatingWA.tsx   ← Fixed WhatsApp FAB
    │   │   ├── SEOHead.tsx      ← Per-page <title> / <meta> via react-helmet-async
    │   │   ├── Reveal.tsx       ← Scroll-triggered fade-up animation
    │   │   ├── Eyebrow.tsx      ← Gold uppercase label
    │   │   ├── CTAStrip.tsx     ← Reusable dark CTA banner
    │   │   └── PageHero.tsx     ← Reusable inner-page hero with wave
    │   │
    │   └── sections/       ← Page section blocks
    │       ├── HomeHero.tsx         ← Full-screen hero with rings + stat orb
    │       ├── ValueProps.tsx       ← 3-column value cards
    │       ├── AboutSnippet.tsx     ← 2-col about preview
    │       ├── SolutionsOverview.tsx← 2-card solutions grid
    │       ├── WhyEdmond.tsx        ← Dark 2×2 why-us grid
    │       ├── HotelGoDashboard.tsx ← Realistic PMS dashboard mockup
    │       ├── ProcessSteps.tsx     ← 4-step getting-started
    │       └── ContactForm.tsx      ← Validated contact form
    │
    └── pages/
        ├── Home.tsx
        ├── About.tsx
        ├── Solutions.tsx
        └── Contact.tsx
```

---

## Design System

| Token         | Value       |
|---------------|-------------|
| Navy 950      | `#040C18`   |
| Navy 900      | `#091830`   |
| Navy 700      | `#163659`   |
| Navy 500      | `#1F5499`   |
| Gold 400      | `#C9A84C`   |
| Gold 200      | `#EDD07A`   |
| Steel 50      | `#F2F6FB`   |
| Font Display  | **Sora**    |
| Font Body     | **Plus Jakarta Sans** |

---

## ✅ Before Go Live — Checklist

### 1. Replace placeholders in `src/utils/constants.ts`

```ts
export const WHATSAPP_NUMBER = '2348012345678'; // ← digits only
export const DIRECTOR_NAME   = 'Alhaji Example';
export const OFFICE_ADDRESS  = '12 Example Street, Kano State, Nigeria';
export const PHONE_NUMBER    = '+234 800 000 0000';
export const EMAIL_ADDRESS   = 'info@edmondtechservices.com';
export const SITE_URL        = 'https://edmondtechservices.com'; // ← real domain
```

### 2. Add director photo

In `src/pages/About.tsx`, replace the `<div>` photo placeholder with:

```tsx
<img src="/director.jpg" alt="[Director Name] — Director & CEO"
  className="w-full h-full object-cover" />
```

Place `director.jpg` in `public/`.

### 3. Add Google Maps embed

In `src/pages/Contact.tsx`, replace the map placeholder `<div>` with:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_PARAMS"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  title="Edmond Tech Services office location, Kano"
/>
```

### 4. Create OG image

Add a `public/og-image.png` (1200×630px) for social sharing. The `<meta>` tags in `index.html` already reference it.

### 5. Update canonical URLs

`index.html` already uses `https://edmondtechservices.com` — update if your domain differs.

---

## SEO Features

- Per-page `<title>` and `<meta description>` via `react-helmet-async` (`SEOHead` component)
- JSON-LD `LocalBusiness` structured data in `index.html`
- Open Graph tags (Facebook, LinkedIn sharing)
- Twitter Card tags
- Geo meta: `NG-KN` / Kano State
- Canonical URLs on every page
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<address>`, `aria-*`
- `alt` attributes on all images
- `rel="noopener noreferrer"` on all external links
- Preconnect hints for Google Fonts

---

## Dependencies

| Package              | Purpose                          |
|----------------------|----------------------------------|
| react / react-dom    | UI framework                     |
| react-router-dom     | Client-side routing              |
| react-helmet-async   | Per-page SEO meta tags           |
| vite                 | Build tool & dev server          |
| tailwindcss          | Utility-first CSS                |
| typescript           | Type safety                      |
