import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/siteConfig";
import QASection from "@/components/QASection";
import LiveGbozSpotCard from "@/components/LiveGbozSpotCard";
import CapitalRequirementsCard from "@/components/CapitalRequirementsCard";
import { homeQA } from "@/data/qa-content";
import { fetchProductSpot, formatUSD } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "1000 oz Silver Bars: Lowest Premiums & COMEX Good Delivery Guide",
  description:
    "Learn why 1000 oz silver bars offer the lowest premiums per ounce. Compare bar sizes, understand COMEX good delivery standards, storage, and institutional liquidity.",
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
  openGraph: {
    title: "1000 oz Silver Bars: Lowest Premiums & COMEX Good Delivery Guide",
    description:
      "Learn why 1000 oz silver bars offer the lowest premiums per ounce. Compare bar sizes, understand COMEX standards, storage, and liquidity.",
    url: SITE_CONFIG.domain,
  },
};

export default async function HomePage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "1000 oz Silver Bars: Lowest Premiums & COMEX Good Delivery Guide",
    description:
      "Learn why 1000 oz silver bars offer the lowest premiums per ounce. Compare bar sizes, understand COMEX good delivery standards, storage, and institutional liquidity.",
    url: SITE_CONFIG.domain,
    isPartOf: {
      "@type": "WebSite",
      url: SITE_CONFIG.domain,
      name: SITE_CONFIG.brandName,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.domain}/#organization`,
    },
    about: {
      "@type": "Thing",
      name: "1000 oz Silver Bars",
      description: "One thousand troy ounce COMEX good delivery silver bullion bars",
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-description"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative silver-bar-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-navy-50 border border-navy-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-navy-700 mr-3 animate-pulse" />
                <span className="text-navy-700 text-sm font-medium">
                  1000 Troy Ounces of Pure Silver
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
                <span className="silver-text">1000 oz Silver Bars</span>
                <br />
                <span className="text-gray-900">
                  Maximum Value. Lowest Premiums.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-prose">
                Discover why 1000 oz silver bars are the preferred choice for 
                serious investors and institutions seeking the lowest premiums 
                per ounce and substantial silver positions. Learn{" "}
                <Link href="/where-to-buy-1000-oz-silver-bars" className="text-navy-700 hover:underline">
                  where to buy 1000 oz silver bars
                </Link>{" "}
                in our independent buying guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/live-silver-prices" className="btn-primary">
                  View Current Silver Prices
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link href="/resources" className="btn-secondary">
                  Browse Educational Guides
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <Image
                src="/1000-oz-silver-bar.png"
                alt="1000 oz silver bar"
                width={600}
                height={600}
                className="max-w-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Silver Price Section */}
      <section className="pt-4 pb-10 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-gray-900">
              <span className="silver-text">Live Silver Pricing</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track real-time 1000 oz silver bar prices with live market data updated on page load.
            </p>
          </div>
          <LiveGbozSpotCard />
        </div>
      </section>

      {/* Why 1000 oz Silver Bars Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900">
              Why <span className="silver-text">1000 oz Silver Bars</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The 1000 oz silver bar represents the optimal balance of 
              premium efficiency and practical ownership for serious investors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card group">
              <div className="w-16 h-16 rounded-xl silver-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                Lowest Premiums
              </h3>
              <p className="text-gray-600 leading-relaxed">
                1000 oz bars command the{" "}
                <Link href="/resources/premiums-explained" className="text-navy-700 hover:underline">
                  lowest retail premiums
                </Link>{" "}
                of any commonly traded bar size, typically just 0.5-2% over{" "}
                <Link href="/live-silver-prices" className="text-navy-700 hover:underline">
                  spot price
                </Link>. Compared to 1 oz bars or rounds (5-15% premium), you get significantly more silver 
                for your money.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl silver-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                COMEX Standard
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The 1000 oz bar is the standard for COMEX silver futures 
                delivery and institutional trading globally. Bars from 
                LBMA-accredited refiners meet strict purity and weight 
                standards, ensuring worldwide acceptance and liquidity.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl silver-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                Storage Efficiency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A single 1000 oz bar stores the equivalent value of 1000 individual 
                1 oz bars in one compact unit. This dramatically simplifies 
                storage, reduces handling, and often lowers vault fees at 
                professional storage facilities that charge per-item.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Buys 1000 oz Silver Bars */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 silver-bar-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900">
                Who Buys <span className="silver-text">1000 oz Silver Bars</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                1000 oz bars serve investors with substantial capital seeking 
                maximum efficiency in their silver holdings.
              </p>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-navy-700 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      High-Net-Worth Individuals
                    </h3>
                    <p className="text-gray-600">
                      Investors with $50,000+ allocated to precious metals 
                      maximize their buying power with 1000 oz bars, saving 
                      thousands in premiums compared to smaller denominations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-navy-700 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Institutions & Funds
                    </h3>
                    <p className="text-gray-600">
                      Commodity funds, ETFs, and institutional investors trade 
                      in 1000 oz bars as the standard unit. These bars settle 
                      COMEX futures contracts and form the backbone of the 
                      physical silver market.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-navy-700 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Long-Term Holders
                    </h3>
                    <p className="text-gray-600">
                      Investors with 10+ year time horizons prioritize acquisition 
                      cost over flexibility. The lower premiums on 1000 oz bars 
                      compound into significant value over decades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <CapitalRequirementsCard priceData={priceData} />
            </div>
          </div>
        </div>
      </section>

      {/* Size Comparison */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900">
              Comparing <span className="silver-text">Bar Sizes</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding how 1000 oz silver bars compare to smaller denominations 
              helps you choose the right size for your investment goals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-silver-200">
              <thead>
                <tr className="border-b border-silver-200 bg-gray-50">
                  <th className="text-left py-4 px-6 text-navy-700 font-display">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-gray-500 font-display">
                    1 oz Bar
                  </th>
                  <th className="text-center py-4 px-6 text-gray-500 font-display">
                    100 oz Bar
                  </th>
                  <th className="text-center py-4 px-6 text-navy-700 font-display">
                    1000 oz Bar
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-silver-100">
                  <td className="py-4 px-6 font-medium">Premium Over Spot</td>
                  <td className="py-4 px-6 text-center">5-15%</td>
                  <td className="py-4 px-6 text-center">2-5%</td>
                  <td className="py-4 px-6 text-center text-emerald-600 font-semibold">
                    0.5-2% (Lowest)
                  </td>
                </tr>
                <tr className="border-b border-silver-100">
                  <td className="py-4 px-6 font-medium">Entry Cost</td>
                  <td className="py-4 px-6 text-center">
                    {priceData ? (
                      <>~${Math.round((priceData.ask / SITE_CONFIG.troyOunces) * 1.08).toLocaleString("en-US")}</>
                    ) : (
                      "~$35"
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {priceData ? (
                      <>~${Math.round((priceData.ask / SITE_CONFIG.troyOunces) * 100 * 1.03).toLocaleString("en-US")}</>
                    ) : (
                      "~$3,200"
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {priceData ? (
                      <>~${Math.round(priceData.ask).toLocaleString("en-US")}</>
                    ) : (
                      "~$30,000"
                    )}
                  </td>
                </tr>
                <tr className="border-b border-silver-100">
                  <td className="py-4 px-6 font-medium">Divisibility</td>
                  <td className="py-4 px-6 text-center">★★★★★</td>
                  <td className="py-4 px-6 text-center">★★★☆☆</td>
                  <td className="py-4 px-6 text-center">★☆☆☆☆</td>
                </tr>
                <tr className="border-b border-silver-100">
                  <td className="py-4 px-6 font-medium">Storage Efficiency</td>
                  <td className="py-4 px-6 text-center">Good</td>
                  <td className="py-4 px-6 text-center">Better</td>
                  <td className="py-4 px-6 text-center text-emerald-600 font-semibold">Best</td>
                </tr>
                <tr className="border-b border-silver-100">
                  <td className="py-4 px-6 font-medium">Institutional Acceptance</td>
                  <td className="py-4 px-6 text-center">★★★☆☆</td>
                  <td className="py-4 px-6 text-center">★★★★☆</td>
                  <td className="py-4 px-6 text-center text-emerald-600">★★★★★</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Best For</td>
                  <td className="py-4 px-6 text-center">Flexibility</td>
                  <td className="py-4 px-6 text-center">Balance</td>
                  <td className="py-4 px-6 text-center text-navy-700 font-semibold">
                    Maximum Value
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Considerations Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900">
              Important <span className="silver-text">Considerations</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              While 1000 oz bars offer the best premiums, they require careful 
              planning around liquidity, storage, and capital commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                Liquidity Trade-offs
              </h3>
              <p className="text-gray-600 mb-4">
                1000 oz bars are less liquid than smaller denominations. While 
                established dealers maintain ready markets, the buyer pool 
                is smaller than for 1 oz or 100 oz bars. Selling may take longer and 
                require connecting with{" "}
                <Link href="/where-to-buy-1000-oz-silver-bars" className="text-navy-700 hover:underline">
                  specialized dealers
                </Link>.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-navy-700">Consider:</strong> If you 
                anticipate needing to liquidate portions of your holdings, 
                smaller bars may be more practical despite higher premiums. 
                Learn more in our{" "}
                <Link href="/resources/liquidity-considerations" className="text-navy-700 hover:underline">
                  liquidity guide
                </Link>.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                All-or-Nothing Sales
              </h3>
              <p className="text-gray-600 mb-4">
                Unlike holding multiple small bars, you cannot partially 
                liquidate a 1000 oz bar. When you sell, you&apos;re converting 
                approximately {priceData ? `$${Math.round(priceData.ask).toLocaleString("en-US")}` : "$30,000"}+ to cash at once. This may exceed 
                your actual needs or create tax timing challenges.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-navy-700">Consider:</strong> Some 
                investors combine 1000 oz bars for core holdings with smaller 
                bars for flexibility.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                Storage Requirements
              </h3>
              <p className="text-gray-600 mb-4">
                A 1000 oz bar weighs approximately 68-70 pounds and requires secure storage 
                capable of protecting substantial value. Professional{" "}
                <Link href="/resources/storage-options" className="text-navy-700 hover:underline">
                  vault storage
                </Link>, while adding costs, often makes sense for holdings 
                of this magnitude.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-navy-700">Consider:</strong> Vault 
                storage fees are often based on value, meaning 1000 oz bars 
                may have similar storage costs to equivalent smaller holdings.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                Authentication Importance
              </h3>
              <p className="text-gray-600 mb-4">
                Given the high value, buy only from{" "}
                <Link href="/where-to-buy-1000-oz-silver-bars" className="text-navy-700 hover:underline">
                  established dealers
                </Link>{" "}
                and choose bars from LBMA-accredited refiners with full 
                documentation. Counterfeit risk increases with bar value, 
                making provenance critical.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-navy-700">Consider:</strong> COMEX 
                good delivery bars from{" "}
                <Link href="/resources/brand-differences" className="text-navy-700 hover:underline">
                  refiners like Johnson Matthey, Asahi, and KGHM
                </Link>{" "}
                include documentation that aids authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={homeQA} priceData={priceData} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 silver-bar-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900">
            Ready to Learn More?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore{" "}
            <Link href="/live-silver-prices" className="text-navy-700 hover:underline">
              current silver prices
            </Link>
            , dive into our{" "}
            <Link href="/resources" className="text-navy-700 hover:underline">
              educational guides
            </Link>
            , and discover whether 1000 oz silver bars are right for your 
            investment strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/live-silver-prices" className="btn-primary">
              View Current Silver Prices
            </Link>
            <Link href="/resources" className="btn-secondary">
              Browse Educational Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
