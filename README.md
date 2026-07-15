# Star CNC Engineering Works — Landing Page

A modern, responsive landing page for **Star CNC Engineering Works**, a precision laser cutting & CNC bending service provider based in Hyderabad, India. Established in 2009, Star CNC serves India's EV, solar, and industrial manufacturing sectors.

🔗 **Live site:** [starcnc.in](https://starcnc.in)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Fonts | Playfair Display + Inter (Google Fonts) |
| Smooth Scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Hosting | [Vercel](https://vercel.com/) |

---

## Features

- **Hero Section** — Bold headline with material specs and dual CTAs
- **Trust Bar** — Key stats (20+ years, ISO certified, advanced machinery)
- **Services** — Laser cutting & CNC bending with detailed capabilities
- **How It Works** — Step-by-step process overview
- **Infrastructure** — Machinery & facility showcase
- **Products** — Sheet metal product categories (sister company P&P Engineering)
- **Group Banner** — Cross-promotion for the P&P Engineering Works division
- **Clients** — Infinite marquee scroll with major client names
- **Why Us** — 6 USP cards highlighting competitive advantages
- **Contact** — Contact form with company details & WhatsApp integration
- **Floating WhatsApp** — Persistent CTA button for instant enquiries
- **Smooth Scrolling** — Lenis-powered buttery smooth scroll experience
- **Fully Responsive** — Mobile-first design for all screen sizes

---

## Project Structure

```
starcnc/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — fonts, metadata, Lenis provider
│   │   ├── page.tsx            # Home page — assembles all sections
│   │   └── globals.css         # Tailwind base + CSS variables + animations
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky navigation with mobile menu
│   │   │   └── Footer.tsx      # Dark teal footer with links & contact
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Infrastructure.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── GroupBanner.tsx
│   │   │   ├── Clients.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   └── Contact.tsx
│   │   ├── providers/
│   │   │   └── LenisProvider.tsx
│   │   └── ui/
│   │       └── FloatingWhatsApp.tsx
│   └── lib/
│       └── content.ts          # Centralised content — easy to update
├── public/                     # Static assets (images, logos)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/maneeshkhandavalli/Star-CNC-landing-page.git
cd Star-CNC-landing-page

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| Teal | `#00897B` | Primary brand — nav, labels, icons |
| Teal Dark | `#004D47` | Footer background |
| Orange | `#F07B20` | CTAs and buttons only |
| Navy Text | `#1A2340` | Headings |
| Slate Text | `#4A5568` | Body text |

### Typography

- **Headings:** Playfair Display (400, 600, 700)
- **Body / UI:** Inter (400, 500, 600, 700)

---

## Deployment

The site is deployed on **Vercel** with automatic deployments from the `main` branch.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maneeshkhandavalli/Star-CNC-landing-page)

---

## License

This project is proprietary. All rights reserved by Star CNC Engineering Works.
