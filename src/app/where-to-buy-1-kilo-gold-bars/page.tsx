import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { fetchProductSpot } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "Where to Buy 1 Kilo Gold Bars | Independent Buying Guide",
  description:
    "Learn where to buy 1 kilo gold bars online and locally, including major dealers, local coin shops, marketplaces, and storage providers. Independent, educational guidance only.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/where-to-buy-1-kilo-gold-bars`,
  },
  openGraph: {
    title: "Where to Buy 1 Kilo Gold Bars | Independent Buying Guide",
    description:
      "Learn where to buy 1 kilo gold bars online and locally, including major dealers, local coin shops, marketplaces, and storage providers.",
    url: `${SITE_CONFIG.domain}/where-to-buy-1-kilo-gold-bars`,
  },
};

// Online dealers data - multiple sources for comparison
// Monex is positioned first; remaining dealers in alphabetical order
const onlineDealers = [
  {
    name: "Monex",
    description:
      "A precious metals dealer providing live market data and various gold bar products, including 1 kilo bars from recognized refiners.",
    url: "https://www.monex.com/gold/",
  },
  {
    name: "APMEX",
    description:
      "A large online bullion retailer with a wide selection of 1 kilo gold bars from various mints and refiners worldwide.",
    url: "https://www.apmex.com/category/25403/1-kilo-gold-bars",
  },
  {
    name: "Bullion Exchanges",
    description:
      "A New York-based bullion dealer offering 1 kilo gold bars with multiple payment options and competitive pricing.",
    url: "https://bullionexchanges.com/view-all-gold-bars",
  },
  {
    name: "Finest Known",
    description:
      "A precious metals and rare coin dealer offering gold bars and bullion products for collectors and investors.",
    url: "https://finestknown.com/",
  },
  {
    name: "Goldline",
    description:
      "An established precious metals firm offering gold bars and coins with educational resources for investors.",
    url: "https://www.goldline.com/",
  },
  {
    name: "GovMint",
    description:
      "A dealer specializing in government-issued coins and bullion products, including gold bars from sovereign mints.",
    url: "https://www.govmint.com/",
  },
  {
    name: "JM Bullion",
    description:
      "An established online precious metals dealer offering 1 kilo gold bars from major refiners including PAMP Suisse, Perth Mint, and Credit Suisse.",
    url: "https://www.jmbullion.com/gold/gold-bars/kilo-gold-bars/",
  },
  {
    name: "Kitco",
    description:
      "A long-standing precious metals dealer and data provider offering kilo gold bars alongside comprehensive market information.",
    url: "https://online.kitco.com/gold-bars",
  },
  {
    name: "SD Bullion",
    description:
      "An online dealer known for competitive pricing on bullion products, including 1 kilo gold bars from recognized refiners.",
    url: "https://sdbullion.com/gold/gold-bars/kilo-gold-bars",
  },
];

export default async function WhereToBuyPage() {
  const priceData = await fetchProductSpot();
  const formattedPrice = priceData 
    ? `$${Math.round(priceData.ask).toLocaleString("en-US")}` 
    : "$85,000";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Where to Buy 1 Kilo Gold Bars | Independent Buying Guide",
    description:
      "Learn where to buy 1 kilo gold bars online and locally, including major dealers, local coin shops, marketplaces, and storage providers.",
    url: `${SITE_CONFIG.domain}/where-to-buy-1-kilo-gold-bars`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Where to buy 1 kilo gold bars",
    description:
      "Types of vendors and platforms for purchasing 1 kilo gold bars",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Online Bullion Dealers",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Local Coin Shops",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Marketplaces & Auctions",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Vaulted & Custodial Programs",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="gold-text">Where to Buy</span>
              <br />
              <span className="text-white">1 Kilo Gold Bars</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              An independent educational guide to understanding your options
              for purchasing 1 kilo (32.15 troy ounce) gold bars from various sources.
            </p>
            <div className="bg-bullion-gold/5 border border-bullion-gold/20 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-400 text-sm">
                <strong className="text-bullion-gold">Important:</strong>{" "}
                {SITE_CONFIG.brandName} is an independent educational resource.
                We do not sell precious metals and are not affiliated with any
                of the dealers listed on this page. We encourage you to compare
                prices and services across multiple dealers before making any
                purchase. All purchasing decisions should be made after your
                own research and due diligence.
              </p>
            </div>
          </section>

          {/* How to Evaluate Dealers */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              How to <span className="gold-text">Evaluate Dealers</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Reputation & Reviews
                </h3>
                <p className="text-gray-400 text-sm">
                  Research dealer history, customer reviews, and industry
                  accreditations. Look for established businesses with
                  transparent track records and LBMA-accredited products.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pricing & Spreads
                </h3>
                <p className="text-gray-400 text-sm">
                  Compare premiums over spot price across multiple dealers.
                  Kilo bars typically have 1.5-3% premiums, significantly lower
                  than smaller denominations.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Shipping & Insurance
                </h3>
                <p className="text-gray-400 text-sm">
                  Understand shipping costs, delivery times, and insurance
                  coverage. For kilo bars worth {formattedPrice}+, fully insured
                  shipping is essential.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Buyback Policies
                </h3>
                <p className="text-gray-400 text-sm">
                  Check whether the dealer offers buyback programs and at what
                  spread. Kilo bars from recognized refiners typically have
                  excellent buyback liquidity.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Storage & Security
                </h3>
                <p className="text-gray-400 text-sm">
                  Many dealers offer storage options for kilo bars. Understand
                  whether storage is allocated (your specific bars) or
                  unallocated (pooled holdings).
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Customer Support
                </h3>
                <p className="text-gray-400 text-sm">
                  For purchases of this magnitude, responsive customer service
                  is critical. Evaluate accessibility and helpfulness before
                  committing.
                </p>
              </div>
            </div>
          </section>

          {/* Online Bullion Dealers */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="gold-text">Online</span> Bullion Dealers
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Major online dealers offer wide selection, competitive pricing,
              and convenient shipping. We encourage you to compare prices
              across multiple sources before purchasing.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onlineDealers.map((dealer) => (
                <div
                  key={dealer.name}
                  className="card p-6 flex flex-col"
                >
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    {dealer.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {dealer.description}
                  </p>
                  <a
                    href={dealer.url}
                    target="_blank"
                    rel="nofollow"
                    className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors text-sm font-medium"
                  >
                    <span>View {dealer.name} gold bars</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Local Coin Shops */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="gold-text">Local</span> Coin Shops & Dealers
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                Local coin shops and bullion dealers can handle kilo bar
                transactions, though inventory availability varies:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">•</span>
                  <span className="text-gray-400">
                    <strong className="text-white">Face-to-face transactions:</strong>{" "}
                    Build relationships and negotiate directly, especially valuable for large purchases.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">•</span>
                  <span className="text-gray-400">
                    <strong className="text-white">Immediate possession:</strong>{" "}
                    Walk out with your kilo bar the same day, no shipping delays.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">•</span>
                  <span className="text-gray-400">
                    <strong className="text-white">Physical inspection:</strong>{" "}
                    Examine bars before purchase and verify authenticity in person.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">•</span>
                  <span className="text-gray-400">
                    <strong className="text-white">Special orders:</strong>{" "}
                    Many shops can order kilo bars even if not in regular inventory.
                  </span>
                </li>
              </ul>
              <div className="bg-bullion-darker/50 rounded-lg p-4">
                <p className="text-gray-500 text-sm">
                  <strong className="text-gray-400">Finding local dealers:</strong>{" "}
                  Search for &ldquo;coin shop near me&rdquo; or &ldquo;bullion dealer&rdquo;
                  in your area. For kilo bars, call ahead to confirm availability
                  and pricing.
                </p>
              </div>
            </div>
          </section>

          {/* Marketplaces & Auctions */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="gold-text">Marketplaces</span> & Auctions
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                Online marketplaces and auction houses occasionally offer
                kilo gold bars, though due diligence is especially important
                for purchases of this value.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Potential Benefits
                  </h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Access to rare or vintage bars</li>
                    <li>• Competitive bidding may yield value</li>
                    <li>• Buyer protection programs available</li>
                    <li>• Selection from multiple sellers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Key Risks to Consider
                  </h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Counterfeit risk from unknown sellers</li>
                    <li>• Seller verification requires diligence</li>
                    <li>• High-value transactions require caution</li>
                    <li>• Return policies vary significantly</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.ebay.com/sch/i.html?_nkw=1+kilo+gold+bar"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors text-sm"
                >
                  <span>eBay 1 kilo gold bar search</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.ha.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors text-sm"
                >
                  <span>Heritage Auctions</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Vaulted & Custodial Programs */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="gold-text">Vaulted</span> & Custodial Programs
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                For kilo bars, many investors prefer professional vault storage
                rather than taking physical delivery. This approach provides
                institutional-grade security for high-value holdings.
              </p>
              <div className="bg-bullion-gold/5 border border-bullion-gold/20 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Allocated vs. Unallocated Storage
                </h3>
                <p className="text-gray-400 text-sm">
                  <strong className="text-white">Allocated storage</strong> means
                  your specific kilo bars are segregated and identified as yours.{" "}
                  <strong className="text-white">Unallocated storage</strong> means
                  you have a claim on a quantity of gold held in aggregate. For
                  kilo bars, allocated storage is strongly recommended.
                </p>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Major vault and logistics providers serving the precious metals
                industry include:
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.brinks.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors text-sm"
                >
                  <span>Brink&apos;s</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.loomis.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors text-sm"
                >
                  <span>Loomis</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Price & Data Sources */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Using Multiple <span className="gold-text">Pricing Sources</span>
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                Our{" "}
                <Link href="/live-gold-prices" className="text-bullion-gold hover:underline">
                  live gold prices
                </Link>{" "}
                use data from Monex, but comparing prices across multiple
                sources helps you understand market conditions and verify
                dealer pricing.
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                Additional pricing resources:
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.monex.com/gold-prices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
                  >
                    <span>Monex live gold prices</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <span className="text-gray-500 text-sm ml-2">· Prices provided by Monex</span>
                </li>
                <li>
                  <a
                    href="https://www.kitco.com/gold-price-today-usa/"
                    target="_blank"
                    rel="nofollow"
                    className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
                  >
                    <span>Kitco gold price charts</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://goldprice.org/"
                    target="_blank"
                    rel="nofollow"
                    className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
                  >
                    <span>GoldPrice.org market data</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="border-t border-bullion-gold/10 pt-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl font-display font-semibold text-gray-400 mb-4">
                Disclaimer
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {SITE_CONFIG.brandName} does not endorse, recommend, or rank any
                specific dealer, platform, or storage provider. The information
                on this page is for educational purposes only and should not be
                construed as financial advice or a recommendation to purchase
                from any particular source. We encourage you to compare prices
                and services across multiple dealers. Gold investments carry risks,
                and prices can fluctuate significantly. Always perform your own due
                diligence, verify dealer credentials, and consult with a
                qualified financial advisor before making investment decisions.
              </p>
            </div>
          </section>

          {/* Navigation Links */}
          <section className="text-center">
            <p className="text-gray-400 mb-6">
              Continue exploring {SITE_CONFIG.brandName}:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/live-gold-prices" className="btn-primary">
                View Live Gold Prices
              </Link>
              <Link href="/resources" className="btn-secondary">
                Educational Resources
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

