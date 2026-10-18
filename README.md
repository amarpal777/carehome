# Alder & Wren

Responsive Next.js App Router / TypeScript / Tailwind CSS v4 / Framer Motion care home website. Alder & Wren is a fictional concept brand. Images are illustrative Unsplash photographs, not images of an actual care home. No testimonials, ratings or regulatory claims are fabricated.

## Run

Requires Node.js 20.9+.

```sh
npm install
npm run dev
npm run build
npm start
```

## Deploy to Vercel

Import this directory as a Git repository in Vercel. Use the automatically detected Next.js preset. No custom build command or output directory is required. Commit package-lock.json. Set the variables from `.env.example` in Vercel project settings and redeploy.

- `RESEND_API_KEY`: Resend API key.
- `ENQUIRY_FROM_EMAIL`: sender on a verified Resend domain, e.g. `Alder & Wren <enquiries@your-domain.co.uk>`.
- `ENQUIRY_TO_EMAIL`: monitored recipient inbox.
- `NEXT_PUBLIC_SITE_URL`: canonical public origin, without trailing slash, for the sitemap.

Without email configuration, forms return a visible unavailable message and do not claim to have delivered anything. Visit requests require manual confirmation. The server validates submissions and sends plain text emails through Resend. No enquiries are stored locally or in a database. For a public launch, enable Vercel Firewall rate limiting/bot protection on `/api/enquiry` and configure email provider quotas. The built-in honeypot is basic spam filtering, not rate limiting.

## Before launch

Replace the fictional name, placeholder copy and illustrative images with licensed client assets. Confirm all services, facilities, staffing, visiting arrangements, accessibility, pricing and address/contact details. Supply approved privacy and legal text, data controller identity and retention periods. Add only verified reviews with consent and official regulatory details. No confirmed jobs are advertised. Do not submit sensitive health data through this form.

## Structure

- `app/page.tsx`: complete homepage.
- `app/[slug]/page.tsx`: individually addressable content pages and metadata.
- `components/content.ts`: editable page copy, image IDs and FAQ data.
- `components/site.tsx`: shared navigation, motion, cards, accessible FAQ, gallery dialog and forms.
- `app/api/enquiry/route.ts`: validated email endpoint.
- `app/globals.css`: responsive design system and reduced-motion overrides.

Google Fonts supplies Cormorant Garamond and Manrope with local fallback fonts. Unsplash images are optimized by Next.js. Native dialog provides keyboard focus containment; Escape closes the gallery. Motion respects reduced-motion preferences. A formal WCAG 2.2 AA audit and testing with real client content remain necessary before claiming conformance.
