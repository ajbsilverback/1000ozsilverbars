import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { GoldPriceChart } from "@/components/MonexWidgets";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import LiveGbozSpotCard from "@/components/LiveGbozSpotCard";
import LiveGoldSpotIndexCard from "@/components/LiveGoldSpotIndexCard";
import { pricesQA } from "@/data/qa-content";
import { fetchProductSpot } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "1 Kilo Gold Bar Price & Live Gold Spot Prices",
  description:
    "Track live 1 kilo gold bar prices and gold spot prices. Real-time charts and market data for serious gold investors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/live-gold-prices`,
  },
  openGraph: {
    title: "1 Kilo Gold Bar Price & Live Gold Spot Prices",
    description:
      "Track live 1 kilo gold bar prices and gold spot prices. Real-time charts and market data for serious gold investors.",
    url: `${SITE_CONFIG.domain}/live-gold-prices`,
  },
};

export default async function PricesPage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "1 Kilo Gold Bar Price & Live Gold Spot Prices",
    description:
      "Track live 1 kilo gold bar prices and gold spot prices. Real-time charts and market data for serious gold investors.",
    url: `${SITE_CONFIG.domain}/live-gold-prices`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What determines the price of a 1 kilo gold bar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price of a 1 kilo gold bar consists of the spot price of gold multiplied by 32.1507 troy ounces, plus a premium that covers manufacturing, distribution, and dealer margins. Kilo bar premiums typically range from 1.5-3% over spot, the lowest of any common bar size.",
        },
      },
      {
        "@type": "Question",
        name: "Why do 1 kilo gold bars have lower premiums than smaller bars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kilo bars have lower premiums because manufacturing costs are spread across more gold content. Producing one kilo bar is more efficient than producing 32 individual 1 oz bars. The per-ounce production cost decreases with bar size.",
        },
      },
      {
        "@type": "Question",
        name: "How often do gold prices change?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gold prices change continuously during market hours as the precious metals market operates nearly 24 hours a day, five days a week. Major price movements are influenced by currency fluctuations, central bank policies, geopolitical events, and supply and demand dynamics.",
        },
      },
    ],
  };

  const aiSummaryBullets = [
    "This page displays live 1 kilo gold bar prices via Monex data",
    "Track gold spot prices per troy ounce for reference",
    "Understand how spot prices relate to kilo bar retail pricing",
    "Learn about premium structures: kilo bars have 1.5-3% premiums (lowest available)",
    "Compare premiums across bar sizes (1 oz vs 10 oz vs kilo)",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 gold-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bullion-darker via-transparent to-bullion-darker" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="gold-text">1 Kilo Gold Bar Price</span>
              <br />
              <span className="text-white">& Live Gold Spot Prices</span>
            </h1>

            {/* AI Summary - placed after H1 */}
            <AISummary bullets={aiSummaryBullets} />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6 text-left">
              Track live gold prices and understand how spot pricing affects 
              the cost of 1 kilo gold bars. Use these tools to make informed 
              decisions about your precious metals investments. Return to our{" "}
              <Link href="/" className="text-bullion-gold hover:underline">
                overview of 1 kilo gold bars
              </Link>{" "}
              or explore our{" "}
              <Link href="/resources" className="text-bullion-gold hover:underline">
                educational resources
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Zone - Live Cards */}
      <section className="py-10 md:py-12 section-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Live Kilo Gold Bar Price Card */}
          <LiveGbozSpotCard showCta={false} />

          {/* Live Gold Spot Index Card */}
          <LiveGoldSpotIndexCard />

          {/* Chart Widget */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-4 text-white text-center">
              Gold Price Chart
            </h2>
            <div className="max-w-4xl mx-auto">
              <GoldPriceChart />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Gold Prices */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Understanding <span className="gold-text">Kilo Bar Pricing</span>
            </h2>

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <div className="card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Spot Price vs. Kilo Bar Price
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When purchasing a 1 kilo gold bar, you&apos;ll pay a premium 
                  above the calculated spot value (spot price × 32.1507 oz). 
                  The spot price represents the current market rate for gold 
                  traded in bulk on commodities exchanges.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The kilo bar commands the <strong className="text-white">lowest 
                  retail premium</strong> of common bar sizes, typically just 
                  1.5-3% over spot. This premium covers refining, minting, 
                  assaying, shipping, and dealer margins.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Why Kilo Bars Have the Lowest Premiums
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Economy of Scale:</strong> Producing 
                      one kilo bar is more efficient than producing 32+ individual 
                      1 oz bars with the same total gold content.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Reduced Handling:</strong> Fewer 
                      individual units to package, ship, and inventory reduces 
                      per-ounce costs throughout the supply chain.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Institutional Demand:</strong> Kilo 
                      bars are the standard for institutions, creating efficient 
                      markets with competitive pricing.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Simpler Packaging:</strong> Less 
                      elaborate packaging compared to premium 1 oz bars in 
                      sealed assay cards.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Premium Comparison by Size
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  The premium savings on kilo bars are substantial when building 
                  a significant gold position:
                </p>
                <div className="bg-bullion-darker/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">
                    <strong className="text-bullion-gold">Example at $2,000/oz spot:</strong>
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• <strong className="text-white">32 × 1 oz bars (5% avg premium):</strong> ~$67,500</li>
                    <li>• <strong className="text-white">3 × 10 oz bars + 2 × 1 oz (3% avg):</strong> ~$66,200</li>
                    <li>• <strong className="text-white">1 × kilo bar (2% premium):</strong> ~$65,600</li>
                    <li className="pt-2 border-t border-bullion-gold/20">
                      <strong className="text-bullion-gold">Savings:</strong> ~$1,900 by choosing kilo over 1 oz bars
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={pricesQA} includeSchema={false} priceData={priceData} />

      {/* Monex Research Link */}
      <section className="py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-6">
            For detailed market analysis and pricing information:
          </p>
          <a
            href="https://www.monex.com/gold-prices/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
          >
            <span>Research gold prices at Monex</span>
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
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Learn More About 1 Kilo Gold Bars
          </h2>
          <p className="text-gray-400 mb-6">
            Explore our comprehensive{" "}
            <Link href="/resources" className="text-bullion-gold hover:underline">
              educational resources
            </Link>{" "}
            to deepen your understanding of kilo bar investing, or return to our{" "}
            <Link href="/" className="text-bullion-gold hover:underline">
              1 kilo gold bar overview
            </Link>.
          </p>
          <Link href="/resources" className="btn-primary">
            Explore Resources
          </Link>
        </div>
      </section>
    </>
  );
}
