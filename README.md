# 1KiloGoldBars.com

An educational microsite about 1 kilo gold bars built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Comprehensive overview of 1 kilo gold bars, including benefits, who buys them, key specifications, and size comparisons
- **Prices Page**: Live gold pricing with GBX1K and GBXSPOT data, plus educational content about premiums
- **Resources**: 10 in-depth educational articles covering:
  - Understanding Kilo Bar Premiums
  - Size Comparison (1 oz vs 10 oz vs Kilo)
  - Storage Options for High-Value Bars
  - Brand Differences (PAMP, Valcambi, Perth, Argor-Heraeus)
  - Liquidity Considerations
  - Market Dynamics
  - Bid-Ask Spreads
  - Authentication Guide
  - Institutional vs Retail Markets
  - Portfolio Allocation
- **Where to Buy**: Independent dealer guide with multiple sources and neutrality disclaimer
- **About**: Site mission and editorial independence

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── prices/
│   │   └── page.tsx        # Gold prices page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── where-to-buy/
│   │   └── page.tsx        # Buying guide
│   └── resources/
│       ├── page.tsx        # Resources index
│       └── [slug]/
│           └── page.tsx    # Dynamic resource pages
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LiveGbozSpotCard.tsx    # Kilo bar price card
│   ├── LiveGoldSpotIndexCard.tsx # Spot index card
│   └── MonexWidgets.tsx
├── lib/
│   ├── siteConfig.ts       # ⭐ SINGLE SOURCE OF TRUTH
│   └── monexSpot.ts        # Pricing API utilities
└── data/
    ├── resources.ts        # Resource metadata
    ├── qa-content.ts       # Q&A content
    └── article-content.ts  # Article content
```

## API Configuration

This site uses the Monex API for pricing data:

- **Product Symbol**: GBX1K (1 kilo gold bar)
- **Spot Symbol**: GBXSPOT (Gold spot index)

API endpoints:
- `https://api.monex.com/api/v2/Metals/spot/summary?metals=GBX1K`
- `https://api.monex.com/api/v2/Metals/spot/summary?metals=GBXSPOT`

Prices are fetched once per page load (no polling/intervals).

## SEO Features

- Schema.org markup on all pages (WebPage, Product, Article, FAQPage)
- OpenGraph and Twitter meta tags
- Semantic HTML structure
- Canonical URLs
- Robots.txt and sitemap.xml
- llms.txt for AI crawlers

## Deployment

This site is configured for deployment on Vercel.

## License

All rights reserved.
