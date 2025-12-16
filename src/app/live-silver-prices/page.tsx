import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { SilverPriceChart } from "@/components/MonexWidgets";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import LiveGbozSpotCard from "@/components/LiveGbozSpotCard";
import LiveSilverSpotIndexCard from "@/components/LiveSilverSpotIndexCard";
import { pricesQA } from "@/data/qa-content";
import { fetchProductSpot, fetchMetalSpotIndex } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "1000 oz Silver Bar Price & Live Silver Spot Prices",
  description:
    "Track live 1000 oz silver bar prices and silver spot prices. Real-time charts and market data for serious silver investors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/live-silver-prices`,
  },
  openGraph: {
    title: "1000 oz Silver Bar Price & Live Silver Spot Prices",
    description:
      "Track live 1000 oz silver bar prices and silver spot prices. Real-time charts and market data for serious silver investors.",
    url: `${SITE_CONFIG.domain}/live-silver-prices`,
  },
};

export default async function PricesPage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  const spotIndexData = await fetchMetalSpotIndex();
  
  // Format spot price for display
  const spotPricePerOz = spotIndexData?.ask ?? 30;
  const formattedSpotPrice = `$${Math.round(spotPricePerOz).toLocaleString("en-US")}`;
  
  // Calculate example prices based on live spot
  const oneOzBarsTotal = Math.round(spotPricePerOz * 1000 * 1.10); // 10% premium
  const hundredOzBarsTotal = Math.round(spotPricePerOz * 1000 * 1.03); // 3% avg premium
  const thousandOzBarsTotal = Math.round(spotPricePerOz * 1000 * 1.01); // 1% premium
  const savings = oneOzBarsTotal - thousandOzBarsTotal;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "1000 oz Silver Bar Price & Live Silver Spot Prices",
    description:
      "Track live 1000 oz silver bar prices and silver spot prices. Real-time charts and market data for serious silver investors.",
    url: `${SITE_CONFIG.domain}/live-silver-prices`,
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
        name: "What determines the price of a 1000 oz silver bar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price of a 1000 oz silver bar consists of the spot price of silver multiplied by 1000 troy ounces, plus a premium that covers refining, distribution, and dealer margins. 1000 oz bar premiums typically range from 0.5-2% over spot, the lowest of any common bar size.",
        },
      },
      {
        "@type": "Question",
        name: "Why do 1000 oz silver bars have lower premiums than smaller bars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1000 oz bars have lower premiums because manufacturing costs are spread across more silver content. Producing one 1000 oz bar is more efficient than producing 1000 individual 1 oz bars. The per-ounce production cost decreases with bar size.",
        },
      },
      {
        "@type": "Question",
        name: "How often do silver prices change?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Silver prices change continuously during market hours as the precious metals market operates nearly 24 hours a day, five days a week. Major price movements are influenced by currency fluctuations, industrial demand, investment flows, and supply dynamics.",
        },
      },
    ],
  };

  const aiSummaryBullets = [
    "This page displays live 1000 oz silver bar prices via Monex data",
    "Track silver spot prices per troy ounce for reference",
    "Understand how spot prices relate to 1000 oz bar retail pricing",
    "Learn about premium structures: 1000 oz bars have 0.5-2% premiums (lowest available)",
    "Compare premiums across bar sizes (1 oz vs 100 oz vs 1000 oz)",
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
      <section className="py-12 md:py-16 silver-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bullion-darker via-transparent to-bullion-darker" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="silver-text">1000 oz Silver Bar Price</span>
              <br />
              <span className="text-white">& Live Silver Spot Prices</span>
            </h1>

            {/* AI Summary - placed after H1 */}
            <AISummary bullets={aiSummaryBullets} />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6 text-left">
              Track live silver prices and understand how spot pricing affects 
              the cost of 1000 oz silver bars. Use these tools to make informed 
              decisions about your precious metals investments. Return to our{" "}
              <Link href="/" className="text-silver-400 hover:underline">
                overview of 1000 oz silver bars
              </Link>{" "}
              or explore our{" "}
              <Link href="/resources" className="text-silver-400 hover:underline">
                educational resources
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Zone - Live Cards */}
      <section className="py-10 md:py-12 section-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Live 1000 oz Silver Bar Price Card */}
          <LiveGbozSpotCard showCta={false} />

          {/* Live Silver Spot Index Card */}
          <LiveSilverSpotIndexCard />

          {/* Chart Widget */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-4 text-white text-center">
              Silver Price Chart
            </h2>
            <div className="max-w-4xl mx-auto">
              <SilverPriceChart />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Silver Prices */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Understanding <span className="silver-text">1000 oz Bar Pricing</span>
            </h2>

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <div className="card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-silver-400">
                  Spot Price vs. 1000 oz Bar Price
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When purchasing a 1000 oz silver bar, you&apos;ll pay a premium 
                  above the calculated spot value (spot price × 1000 oz). 
                  The spot price represents the current market rate for silver 
                  traded in bulk on commodities exchanges like COMEX.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The 1000 oz bar commands the <strong className="text-white">lowest 
                  retail premium</strong> of common bar sizes, typically just 
                  0.5-2% over spot. This premium covers refining, assaying, 
                  shipping, and dealer margins.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-silver-400">
                  Why 1000 oz Bars Have the Lowest Premiums
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-silver-400 mr-3">•</span>
                    <span>
                      <strong className="text-white">Economy of Scale:</strong> Producing 
                      one 1000 oz bar is more efficient than producing 1000+ individual 
                      1 oz bars with the same total silver content.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-silver-400 mr-3">•</span>
                    <span>
                      <strong className="text-white">Reduced Handling:</strong> Fewer 
                      individual units to package, ship, and inventory reduces 
                      per-ounce costs throughout the supply chain.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-silver-400 mr-3">•</span>
                    <span>
                      <strong className="text-white">Institutional Standard:</strong> 1000 oz 
                      bars are the standard for COMEX delivery and institutional trading, 
                      creating efficient markets with competitive pricing.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-silver-400 mr-3">•</span>
                    <span>
                      <strong className="text-white">Simpler Packaging:</strong> No 
                      elaborate packaging, tubes, or capsules required for 
                      institutional-grade bars.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-silver-400">
                  Premium Comparison by Size
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  The premium savings on 1000 oz bars are substantial when building 
                  a significant silver position:
                </p>
                <div className="bg-bullion-darker/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">
                    <strong className="text-silver-400">Example at {formattedSpotPrice}/oz spot:</strong>
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• <strong className="text-white">1000 × 1 oz bars (10% avg premium):</strong> ~${oneOzBarsTotal.toLocaleString("en-US")}</li>
                    <li>• <strong className="text-white">10 × 100 oz bars (3% avg premium):</strong> ~${hundredOzBarsTotal.toLocaleString("en-US")}</li>
                    <li>• <strong className="text-white">1 × 1000 oz bar (1% premium):</strong> ~${thousandOzBarsTotal.toLocaleString("en-US")}</li>
                    <li className="pt-2 border-t border-silver-600/20">
                      <strong className="text-silver-400">Savings:</strong> ~${savings.toLocaleString("en-US")} by choosing 1000 oz over 1 oz bars
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
            For detailed market analysis and 1000 oz bar pricing:
          </p>
          <a
            href="https://www.monex.com/1000-oz-silver-bullion-price-charts/"
            target="_blank"
            rel="nofollow noopener"
            className="inline-flex items-center text-silver-400 hover:text-navy-400 transition-colors"
          >
            <span>Monex 1000 oz silver bar price charts</span>
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
            Learn More About 1000 oz Silver Bars
          </h2>
          <p className="text-gray-400 mb-6">
            Explore our comprehensive{" "}
            <Link href="/resources" className="text-silver-400 hover:underline">
              educational resources
            </Link>{" "}
            to deepen your understanding of 1000 oz bar investing, or return to our{" "}
            <Link href="/" className="text-silver-400 hover:underline">
              1000 oz silver bar overview
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
