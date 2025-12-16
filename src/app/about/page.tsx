import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About | 1KiloGoldBars.com",
  description:
    "Learn about 1KiloGoldBars.com, an independent educational resource about 1 kilo gold bars. We do not sell precious metals or provide financial advice.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/about`,
  },
  openGraph: {
    title: "About | 1KiloGoldBars.com",
    description:
      "Learn about 1KiloGoldBars.com, an independent educational resource about 1 kilo gold bars.",
    url: `${SITE_CONFIG.domain}/about`,
  },
};

export default function AboutPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About 1KiloGoldBars.com",
    description:
      "Learn about 1KiloGoldBars.com, an independent educational resource about 1 kilo gold bars.",
    url: `${SITE_CONFIG.domain}/about`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="gold-text">{SITE_CONFIG.brandName}</span>
            </h1>
            <p className="text-xl text-gray-300">
              An independent educational resource for serious gold investors
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* What We Are */}
            <section className="card p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-white mb-4">
                What We Are
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {SITE_CONFIG.brandName} is an independent educational website
                dedicated to helping serious investors understand{" "}
                {SITE_CONFIG.primaryProduct}, the preferred choice for those 
                seeking substantial gold positions with the lowest premiums 
                per ounce.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to provide clear, unbiased information about 
                kilo bar investing, including pricing mechanics, storage 
                requirements, refiner comparisons, and the trade-offs between 
                bar sizes.
              </p>
            </section>

            {/* What We Are NOT */}
            <section className="card p-6 md:p-8 border-red-500/20">
              <h2 className="text-2xl font-display font-semibold text-white mb-4">
                What We Are{" "}
                <span className="text-red-400">NOT</span>
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>
                    <strong className="text-white">Not a dealer:</strong> We do
                    not sell gold bars, coins, or any precious metals.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>
                    <strong className="text-white">Not affiliated:</strong> We
                    have no financial relationship with Monex, or any of the
                    dealers mentioned on our site.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>
                    <strong className="text-white">Not financial advisors:</strong>{" "}
                    We do not provide investment advice, recommendations, or
                    personalized guidance.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>
                    <strong className="text-white">No endorsements:</strong> Listing
                    a dealer or resource does not constitute an endorsement or
                    recommendation.
                  </span>
                </li>
              </ul>
            </section>

            {/* Pricing Data */}
            <section className="card p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-white mb-4">
                How We Source Pricing Data
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The live gold prices displayed on our{" "}
                <Link href="/live-gold-prices" className="text-bullion-gold hover:underline">
                  prices page
                </Link>{" "}
                are fetched from the Monex API. We display two price feeds:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold">•</span>
                  <span>
                    <strong className="text-white">1 Kilo Gold Bar price</strong> (current
                    ask price for a 1 kg gold bar)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold">•</span>
                  <span>
                    <strong className="text-white">Gold spot price</strong> (raw
                    spot price per troy ounce)
                  </span>
                </li>
              </ul>
              <div className="bg-bullion-gold/5 border border-bullion-gold/20 rounded-lg p-4">
                <p className="text-gray-400 text-sm">
                  <strong className="text-bullion-gold">Important:</strong> Prices
                  are fetched once per page load for display purposes only. We
                  strongly encourage cross-checking prices with multiple sources
                  (Kitco, GoldPrice.org, dealer websites) before making any
                  purchasing decisions.
                </p>
              </div>
            </section>

            {/* Editorial Independence */}
            <section className="card p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-white mb-4">
                Editorial Independence
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {SITE_CONFIG.brandName} operates independently. We:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Do not receive commissions or referral fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Do not accept payment for listings or rankings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>List multiple dealers for educational comparison</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Encourage readers to conduct independent research</span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section className="card p-6 md:p-8 bg-bullion-gold/5 border-bullion-gold/30">
              <h2 className="text-2xl font-display font-semibold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For questions, corrections, or feedback about the educational
                content on this site:
              </p>
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Website:</strong>{" "}
                <a
                  href={SITE_CONFIG.domain}
                  className="text-bullion-gold hover:underline"
                >
                  {SITE_CONFIG.domain}
                </a>
              </p>
              <p className="text-gray-500 text-sm mt-4">
                Note: We cannot provide investment advice or dealer
                recommendations. Please consult a qualified financial advisor
                for personalized guidance.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="text-center pt-8 border-t border-bullion-gold/10">
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
                All content on {SITE_CONFIG.brandName} is for educational and
                informational purposes only. Gold investments carry risks, and
                prices can fluctuate significantly. Past performance does not
                guarantee future results. Always conduct your own research and
                consult with qualified professionals before making investment
                decisions.
              </p>
            </section>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/" className="btn-primary">
                Return Home
              </Link>
              <Link href="/live-gold-prices" className="btn-secondary">
                View Gold Prices
              </Link>
              <Link href="/resources" className="btn-secondary">
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
