# Star CNC Engineering Works — Build Instructions

## Project
Full website build for Star CNC Engineering Works, a laser cutting and CNC bending company in Hyderabad, India. Design is finalised in Stitch AI. Build using Next.js with Tailwind CSS v4. All content is in `src/lib/content.ts`. Reference `starcnc_project.md` for full project details.

## Colors
- Teal `#00897B` — navbar, labels, icons, borders, all structural elements
- Orange `#F07B20` — every button and CTA only, nothing else gets orange
- Dark teal `#004D47` — footer background only
- Light teal `#E8F5F3` — group banner and infrastructure banner backgrounds
- Navy `#1A2340` — all headings and dark text
- Slate `#4A5568` — body text and descriptions
- Off-white `#F5F6F8` — alternating section backgrounds
- Warm gray `#F7F4F0` — products section background
- White `#FFFFFF` — cards and primary section backgrounds
- Border `#E1E2E4` — all card borders and dividers

## Fonts
- Playfair Display — all headings h1 h2 h3
- Inter — all body text, labels, buttons
- Both already imported in globals.css

## Rules
- No dark backgrounds anywhere except the footer
- Teal is the brand identity color — structure and information
- Orange is the action color — buttons only, every button is orange
- P&P Engineering Works is the PARENT company, Star CNC is under them
- WhatsApp is the primary lead channel — floating button always visible
- Mobile first — many Indian B2B buyers browse on phone

## Page Sections (top to bottom in order)
1. Navbar — fixed, teal background, logo left, nav links center, orange Get a Quote button right
2. Hero — headline, subtext, two CTAs, material spec row, hero image right side, client highlight strip pinned to bottom of hero with marquee of top 5 clients
3. Trust Bar — 5 stats with value and label underneath, white background
4. Services — Laser Cutting and CNC Bending two cards with image, spec table, capability tags
5. How It Works — 4 step process with icons and connecting arrows
6. Infrastructure — 3 machine cards with specs, factory address banner below
7. Products — P&P Engineering parent company division, 5 product cards plus CTA card
8. Group Banner — thin strip showing Star CNC and P&P Engineering as same group
9. Clients — infinite horizontal marquee scroll, two rows, first row left second row right
10. Why Star CNC — 6 USP cards with teal icon circles
11. Contact — split layout, form left, contact details right, WhatsApp CTA
12. Footer — dark teal background, 4 columns, copyright line

## Components to Build
### Layout
- `Navbar.tsx` — fixed top, teal bg, logo, nav links, orange CTA, shadow on scroll
- `Footer.tsx` — dark teal, 4 columns, Star CNC + P&P links, copyright

### Sections
- `Hero.tsx` — headline, subtext, CTAs, material specs, image, client strip at bottom
- `TrustBar.tsx` — 5 stat items, value + label, white bg, dividers between
- `Services.tsx` — two cards, image top, icon + title, description, spec table, tags
- `HowItWorks.tsx` — 4 steps horizontal, teal numbers, icons, dashed arrows between
- `Infrastructure.tsx` — 3 machine cards, factory address banner
- `Products.tsx` — parent company section, 5 product cards, CTA card, warm gray bg
- `GroupBanner.tsx` — thin full width strip, two company cards, same group badge
- `Clients.tsx` — two row infinite marquee, pill cards with teal dot, pause on hover
- `WhyUs.tsx` — 6 USP cards, teal icon circles, white cards, cool gray bg
- `Contact.tsx` — form left, details right, WhatsApp CTA green button

### UI
- `Button.tsx` — primary orange, outline teal border, ghost variants
- `SectionLabel.tsx` — small teal uppercase label used above every section heading
- `FloatingWhatsApp.tsx` — fixed bottom right, orange circle, links to wa.me

## Animations
- Lenis smooth scroll wrapping layout
- Intersection Observer fade-in-up on all sections and cards
- Stagger delay on grid cards so they animate one after another
- Navbar adds white background and shadow after scrolling 80px
- Loading screen on first visit — Star CNC text in teal, thin teal progress bar, fades out after 1.8s
- Marquee pauses on hover
- Buttons scale-105 with orange glow on hover

## Key Content
- Phone: +91 91009 97437 / +91 91009 97438
- Email: starcncworks@gmail.com / info@starcnc.in
- WhatsApp: https://wa.me/919100997437?text=Hi%2C%20I%27d%20like%20a%20quote
- Address: Land No. LL006, Sy.No.221, TS Agros Ltd, Chinthal, Beside Qutbullapur Municipal Ground, Hyderabad – 500054
- Parent company: P&P Engineering Works — pandpengg.com
- Clients: Toshiba, Amara Raja Advanced Cell Technologies, Cygni Energy, NED Energy, Quantum Energy, Sieger Technologies, Brisk Energy, Race Energy, HBL Power Systems

## All content lives in src/lib/content.ts — always import from there, never hardcode text in components