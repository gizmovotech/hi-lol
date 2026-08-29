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

## Implemented (June 2026) — v2 Single-File Merge
- Merged into ONE self-contained file: /app/frontend/public/index.html (CSS in <style> in head, JS in <script> before </body>); styles.css and main.js deleted
- Heavily commented for Shopify Liquid integration (section/snippet mapping notes)
- NEW: Mobile off-canvas menu (left drawer, hamburger ≤768px, close btn, overlay, ESC)
- NEW: Slide-out cart drawer (right): line items w/ variant + qty, remove, subtotal (en-IN), free shipping progress bar (₹1,999 threshold), checkout btn, rgba(0,0,0,0.5) overlay closes on click; opens on cart icon & add-to-cart
- NEW: Variant swatches per card (Matte Black/Titanium/Cobalt) with active ring + label; selected variant flows into cart line item
- NEW: Dual-image hover on card media (primary fades out, secondary fades in, pure CSS)
- NEW: "Ships in 24h • COD Available" micro-text under each Add to Cart
- NEW: Footer link columns as native <details>/<summary> accordions — locked open on desktop, collapsed/toggleable on mobile (matchMedia sync)

## Verified
- v2 screenshot tests: swatch selection (Titanium label), hover image swap, cart drawer (2 items, ₹3,798 subtotal, free-ship unlocked), overlay close, mobile menu open/close, mobile accordions (0 open by default, toggle works)

## Backlog
- P1: Real product images/names, working search overlay, cart drawer
- P2: Track Order page, product detail pages, backend integration (cart/newsletter APIs)
