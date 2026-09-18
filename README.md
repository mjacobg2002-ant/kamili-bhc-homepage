# Kamili Behavioral Health Center — Homepage

A modern, compassionate redesign of the homepage for **Kamili Behavioral Health
Center**, a client-centered behavioral-health practice in Baltimore, MD.

Built with **Next.js (App Router)** and deployable to **Vercel** with zero
configuration.

## Stack

- Next.js 14 (App Router, React 18)
- Plain CSS design system (no UI framework) — `app/globals.css`
- Google Fonts: Figtree (humanist sans) + Fraunces (editorial serif accent)
- All imagery stored locally in `public/images`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **New Project → Import** this repository.
3. Framework preset is auto-detected as **Next.js**. No env vars required.

## Content notes (needs client confirmation)

Content was taken from the live site (kamilibhc.org). Before publishing, the
client should confirm:

- **Insurance participation** for each listed plan (CareFirst, UnitedHealthcare,
  Aetna, Cigna, Medicare, Medical Assistance) — names are corrected but
  participation is not guaranteed.
- **"Free consultation"** wording (currently implied by the live booking page).
- **Consultation hosts** (Marlene and L'Tanya) — no titles/specialties are shown
  because none are published; Google Calendar booking links are preserved as-is.
- No provider credentials, testimonials, office amenities, or hours are invented.

## Editing verified facts

Business facts (phone, email, address, services, insurers, booking links) live
in one place: [`lib/site.js`](lib/site.js).
