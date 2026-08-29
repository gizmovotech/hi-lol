# Gizmovo — PRD

## Original Problem Statement
Build a production-ready static landing page (pure HTML5/CSS3/Vanilla JS, no frameworks) for "Gizmovo", a trending tech e-commerce store. Gen Z Minimalist aesthetic, BEM naming, CSS variables, modular HTML comments, premium animations. Sections: sticky announcement marquee, header/nav with animated cart dot, hero, trust bar, 4-card trending product grid, UGC reviews, footer with newsletter.

## User Choices
- Accent color: Electric Cobalt Blue (#0047FF)
- Product images: clean placeholders ([PRODUCT NAME], [HERO GADGET PLACEHOLDER])
- Delivery: pure static files (index.html, styles.css, main.js)

## Architecture
- Static site served via CRA public folder (React not mounted; src/index.js is a no-op)
- Files: /app/frontend/public/index.html, /app/frontend/public/styles.css, /app/frontend/public/main.js
- Zero external JS/CSS libraries. Google Fonts: Archivo (display) + Instrument Sans (body)
- Strict BEM (gizmovo-block__element--modifier), all tokens in :root CSS variables
- data-testid attributes on all interactive/critical elements

## Implemented (June 2026)
- Sticky announcement bar with infinite CSS marquee (pause on hover)
- Sticky glass header: logo, nav links w/ underline hover, search + cart icon with animated pop/bounce notification dot
- Kinetic hero: masked line-by-line on-load reveal, grid backdrop, parallax placeholder frame, floating chips, pill CTA with dark sweep hover, scroll hint
- Trust bar (3 SVG items)
- Numbered manifesto chapters (01–03, outlined numerals)
- Slow oversized editorial marquee (dark band, outline/solid alternating words)
- Trending Drops: 4-card CSS grid, badges (TikTok Viral / Selling Fast), strikethrough pricing (₹), Add to Cart with "Added ✓" swap animation + cart dot pop
- UGC horizontal scroll-snap row, 5 review cards with stars + @usernames
- Footer: newsletter with client-side email validation + success/error states, legal links, payment chips, copyright
- IntersectionObserver scroll reveals with sibling stagger; prefers-reduced-motion supported
- Fully responsive (1024px, 768px, 520px breakpoints)

## Verified
- Screenshot tests: hero reveal, add-to-cart (dot → 1, Added ✓), newsletter submit success, mobile 390px layout

## Backlog
- P1: Real product images/names, working search overlay, cart drawer
- P2: Track Order page, product detail pages, backend integration (cart/newsletter APIs)
