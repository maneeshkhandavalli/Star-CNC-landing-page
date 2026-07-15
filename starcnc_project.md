# Star CNC Engineering Works — Project Planning Doc

> **Freelance project** | Client: Star CNC Engineering Works + P&P Engineering Works
> Last updated: July 2025

---

## 1. Project Overview

Two websites for a sister-company group based in Hyderabad, India. Both companies operate from the same facility and serve India's EV, solar, and industrial manufacturing sectors.

| | Star CNC Engineering Works | P&P Engineering Works |
|---|---|---|
| **Website** | starcnc.in | pandpengg.com |
| **What they do** | Laser cutting & CNC bending jobwork | Finished sheet metal products & manufacturing |
| **Scope** | Full rebuild from scratch | Redesign & improve existing site |
| **Priority** | Phase 1 — build first | Phase 2 — improve after |
| **Status** | 🟡 In progress | 🔴 Not started |

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | SEO-friendly SSR, easy deployment |
| Styling | Tailwind CSS | Matches Stitch output, fast to build |
| Fonts | Playfair Display + Inter | Already in Stitch design |
| Icons | Material Symbols Outlined | Already in Stitch design |
| Forms | EmailJS or Resend | Contact form email delivery, no backend needed |
| Hosting | Vercel | Free tier, auto-deploy from GitHub |
| Animations | Tailwind + CSS keyframes | Marquee scroll, hover states — no heavy libs needed |

---

## 3. Brand & Design Tokens

### Colors

```css
--teal:          #00897B;   /* Primary brand — structure, labels, icons, nav */
--teal-dark:     #004D47;   /* Footer background, dark teal surfaces */
--orange:        #F07B20;   /* Action only — every button and CTA, nothing else */
--white:         #FFFFFF;   /* Cards, form backgrounds */
--off-white:     #F5F6F8;   /* Alternating section backgrounds */
--warm-gray:     #F7F4F0;   /* Products section background */
--light-gray:    #F0F2F5;   /* Services section background */
--navy-text:     #1A2340;   /* All headings and dark text */
--slate-text:    #4A5568;   /* Body text, descriptions */
--border:        #E1E2E4;   /* Card borders, dividers */
```

### Typography

```
Headings (h1, h2, h3):   Playfair Display — weights 400, 600, 700
Body / Labels / Buttons:  Inter — weights 400, 500, 600, 700
```

### Scale

| Token | Size | Usage |
|---|---|---|
| headline-xl | 48px / lh 56px | Hero h1 |
| headline-lg | 36px / lh 44px | Section headings |
| headline-md | 24px / lh 32px | Card titles |
| body-lg | 18px / lh 28px | Hero subtext |
| body-md | 16px / lh 24px | General body |
| body-sm | 14px / lh 20px | Card descriptions |
| label-bold | 14px / ls 0.05em | Section labels, table headers |

### Border Radius
```
Default cards:  0.5rem (8px)
Buttons:        0.25rem (4px)
Full/pill:      9999px
```

---

## 4. Real Content — Star CNC

### Company Info
- **Full name:** Star CNC Engineering Works
- **Established:** 2009
- **Location:** Land No. LL006, Sy.No.221, TS Agros Ltd, Chinthal, Beside Qutbullapur Municipal Ground, Hyderabad – 500054
- **Phone 1:** +91 91009 97437
- **Phone 2:** +91 91009 97438
- **Email 1:** starcncworks@gmail.com
- **Email 2:** info@starcnc.in
- **Website:** www.starcnc.in
- **WhatsApp:** https://wa.me/919100997437

### Services
**Laser Cutting**
- Mild Steel (MS): 0.5mm – 15mm
- Aluminium (AL): 1mm – 10mm
- Stainless Steel (SS): 0.5mm – 10mm
- Job types: Gate Design Cutting, Interior Design Cutting, Elevation Design Cutting, All Metal Cuttings, All Engineering Jobworks
- Machines: HSG fiber laser, SF3015G

**CNC Bending**
- Same material range as above
- Applications: Enclosure panels, EV battery frames, structural parts, brackets, custom fabrication

### Clients (9 confirmed)
1. Toshiba Transmission of Distribution Systems Pvt Ltd
2. Amara Raja Advanced Cell Technologies Pvt Ltd
3. Cygni Energy Pvt Ltd
4. NED Energy Ltd
5. Quantum Energy Ltd
6. Sieger Technologies
7. Brisk Energy Pvt Ltd
8. Race Energy
9. HBL Power Systems Ltd

### USPs
- 20+ years of sheet metal expertise
- ISO 9001:2015 certified group
- Advanced machinery: HSG + SF3015G + CNC press brake
- All major metals: MS, AL, SS
- Prototype to bulk — any volume
- Hyderabad based, Chinthal location

---

## 5. Real Content — P&P Engineering

### Company Info
- **Full name:** P&P Engineering Works
- **Website:** pandpengg.com (also pandpenggworks.in)
- **Phone 1:** +91 91009 97434
- **Phone 2:** +91 91009 97437
- **Email 1:** pandp.engworks@gmail.com
- **Email 2:** Info@pandpenggworks.in
- **Same address as Star CNC**
- **Certification:** ISO 9001:2015

### Products
1. Electronic & Electrical Enclosures — control panels, distribution boards, junction boxes
2. EV Battery Enclosures & Child Parts — casings, mounting brackets, structural parts
3. Solar Structures & Street Light Poles — mounting structures, galvanised poles
4. General Sheet Metal Products — cabinets, racks, lockers, trolleys, lab furniture
5. In-House Powder Coating — full RAL colour range, faster turnaround

---

## 6. Star CNC — Page Structure (V1)

### Home Page Sections (top to bottom)

```
┌─────────────────────────────────────────┐
│  NAV — sticky, teal bg, orange CTA btn  │
├─────────────────────────────────────────┤
│  HERO — headline, sub, CTAs, spec row   │
├─────────────────────────────────────────┤
│  TRUST BAR — 5 stats with labels        │
├─────────────────────────────────────────┤
│  SERVICES — laser cutting + CNC bending │
├─────────────────────────────────────────┤
│  PRODUCTS — P&P Engineering division    │
├─────────────────────────────────────────┤
│  CLIENTS — infinite marquee scroll      │
├─────────────────────────────────────────┤
│  WHY STAR CNC — 6 USP cards            │
├─────────────────────────────────────────┤
│  CONTACT — form + details + WhatsApp    │
├─────────────────────────────────────────┤
│  FOOTER — dark teal, links, copyright   │
└─────────────────────────────────────────┘
```

---

## 7. Component List

### Layout
- `Navbar.jsx` — fixed top, logo, nav links, CTA button
- `Footer.jsx` — dark teal, 4 columns, copyright
- `Layout.jsx` — wraps all pages, includes nav + footer

### Sections (Home)
- `Hero.jsx` — headline, subtext, CTAs, material spec row, hero image
- `TrustBar.jsx` — 5 stat items with value + label
- `Services.jsx` — two service cards with image, spec table, capability tags
- `Products.jsx` — 5 product cards + 1 CTA card, 3-column grid
- `Clients.jsx` — marquee scroll rows, pill cards
- `WhyUs.jsx` — 6 USP cards with teal icon circles
- `Contact.jsx` — split layout, form left, details right

### Shared / UI
- `Button.jsx` — primary (orange), outline (teal border), ghost
- `SectionLabel.jsx` — small teal uppercase label above headings
- `Card.jsx` — base card with border, shadow, hover effect
- `FloatingWhatsApp.jsx` — fixed bottom-right orange circle button

---

## 8. Folder Structure

```
starcnc/
├── app/
│   ├── layout.jsx          # Root layout — fonts, metadata
│   ├── page.jsx            # Home page
│   ├── globals.css         # Tailwind base + CSS variables + marquee keyframes
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── TrustBar.jsx
│   │   ├── Services.jsx
│   │   ├── Products.jsx
│   │   ├── Clients.jsx
│   │   ├── WhyUs.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── SectionLabel.jsx
│       ├── Card.jsx
│       └── FloatingWhatsApp.jsx
├── public/
│   ├── logo-starcnc.png        # ← needs from client
│   ├── hero-machine.jpg        # ← needs from client
│   ├── laser-cutting.jpg       # ← needs from client
│   ├── cnc-bending.jpg         # ← needs from client
│   └── clients/                # ← client logos if available
├── lib/
│   └── content.js              # All text content in one place — easy to update
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 9. content.js — Centralised Content

Keep all real text in one file so the client can update copy without touching components.

```js
// lib/content.js

export const company = {
  name: "Star CNC Engineering Works",
  tagline: "Precision Laser Cutting & CNC Bending — Hyderabad",
  established: "2009",
  phone1: "+91 91009 97437",
  phone2: "+91 91009 97438",
  email1: "starcncworks@gmail.com",
  email2: "info@starcnc.in",
  whatsapp: "https://wa.me/919100997437?text=Hi%2C+I%27d+like+a+quote",
  address: "Land No. LL006, Sy.No.221, TS Agros Ltd, Chinthal, Beside Qutbullapur Municipal Ground, Hyderabad – 500054",
  website: "starcnc.in",
}

export const sister = {
  name: "P&P Engineering Works",
  website: "pandpengg.com",
  url: "https://pandpengg.com",
}

export const materials = [
  { name: "Mild Steel (MS)", range: "0.5 – 15 mm" },
  { name: "Aluminium (AL)", range: "1 – 10 mm" },
  { name: "Stainless Steel (SS)", range: "0.5 – 10 mm" },
]

export const clients = [
  "Toshiba Transmission of Distribution Systems Pvt Ltd",
  "Amara Raja Advanced Cell Technologies Pvt Ltd",
  "Cygni Energy Pvt Ltd",
  "NED Energy Ltd",
  "Quantum Energy Ltd",
  "Sieger Technologies",
  "Brisk Energy Pvt Ltd",
  "Race Energy",
  "HBL Power Systems Ltd",
]

export const trustStats = [
  { value: "20+ Years", label: "Sheet Metal Expertise" },
  { value: "ISO 9001:2015", label: "Certified Group" },
  { value: "HSG + SF3015G", label: "Advanced Machinery" },
  { value: "1 to ∞ Units", label: "Prototype to Bulk" },
  { value: "Hyderabad", label: "Chinthal, 500054" },
]
```

---

## 10. Development Phases

### Phase 1 — Star CNC V1 (Current)
- [ ] Init Next.js project with Tailwind
- [ ] Set up tailwind.config.js with design tokens
- [ ] Create globals.css with CSS variables and marquee animation
- [ ] Build Navbar component
- [ ] Build Hero section
- [ ] Build TrustBar section
- [ ] Build Services section
- [ ] Build Products section
- [ ] Build Clients marquee section
- [ ] Build WhyUs section
- [ ] Build Contact section with form
- [ ] Build Footer
- [ ] Add FloatingWhatsApp button
- [ ] Wire up EmailJS for contact form
- [ ] Mobile responsive pass
- [ ] SEO metadata (title, description, OG tags)
- [ ] Deploy to Vercel

### Phase 2 — Star CNC V2 (Later)
- [ ] Gallery / portfolio page with real project photos
- [ ] Individual service pages (/laser-cutting, /cnc-bending)
- [ ] Online RFQ form with file upload (.dxf / .pdf)
- [ ] Video section — machinery in action
- [ ] Testimonials section
- [ ] Google Maps embed
- [ ] Blog / SEO articles

### Phase 3 — P&P Engineering Redesign (After Star CNC)
- [ ] Audit pandpengg.com for issues
- [ ] Fix FAQ keyword spam
- [ ] Fix broken social links (Instagram, LinkedIn)
- [ ] Add Powder Coating as 5th homepage product card
- [ ] Expand gallery from 4 to 12+ images
- [ ] Build individual product pages for SEO
- [ ] Add stats bar (ISO badge, years, client count)
- [ ] Add testimonials section

---

## 11. Assets Needed from Client

> Send this list to the client before starting build

- [ ] Star CNC logo — high-res PNG or SVG, no background
- [ ] P&P Engineering logo — high-res PNG or SVG, no background
- [ ] Hero image — laser cutting machine in action (or factory floor)
- [ ] Laser cutting close-up photo (sparks, precision cut)
- [ ] CNC bending machine photo (press brake in operation)
- [ ] Factory exterior photo
- [ ] Factory interior photo (machines, floor)
- [ ] Completed product photos — EV enclosures, electrical panels, solar structures
- [ ] Team / staff photos (optional but good for About page)
- [ ] Client logos (Toshiba, Amara Raja, HBL, etc.) — greyscale ok
- [ ] ISO 9001:2015 certificate scan or badge
- [ ] Video of laser/machinery running (even phone quality works)
- [ ] 2–3 client testimonials (written quotes or WhatsApp message screenshots)

> **Pro tip:** Ask the client to share their WhatsApp business chat — most small manufacturers send product photos to clients via WhatsApp and those photos are usually good enough to use on the site.

---

## 12. SEO Plan (V1 Basics)

```jsx
// app/layout.jsx metadata
export const metadata = {
  title: "Star CNC Engineering Works | Laser Cutting & CNC Bending Hyderabad",
  description: "Precision laser cutting and CNC bending services in Hyderabad. MS 0.5–15mm, AL 1–10mm, SS 0.5–10mm. Custom prototypes to bulk production. Est. 2009. ISO certified group.",
  keywords: ["laser cutting hyderabad", "cnc bending hyderabad", "sheet metal cutting hyderabad", "ms laser cutting", "stainless steel laser cutting"],
  openGraph: {
    title: "Star CNC Engineering Works",
    description: "20+ years of precision laser cutting & CNC bending in Hyderabad.",
    url: "https://starcnc.in",
  }
}
```

**Target keywords for V1:**
- laser cutting hyderabad
- cnc bending hyderabad
- sheet metal laser cutting hyderabad
- ms laser cutting service hyderabad
- cnc press brake bending hyderabad

---

## 13. Notes & Decisions

- **No dark backgrounds** anywhere except the footer (dark teal #004D47)
- **Teal = structure** (nav, labels, icons, borders)
- **Orange = action** (every button and CTA, nothing else)
- **No 3D / heavy animations** — client is traditional B2B, buyers are procurement managers
- **WhatsApp is the primary lead channel** — must be visible at all times via floating button
- **Stitch AI output** used as design reference — converting to Next.js/Tailwind
- **Both sites should cross-link** to each other — shared group identity
- **Mobile first** — many Indian B2B buyers browse on phone

---

*This doc is the single source of truth for the project. Update it as decisions are made.*
