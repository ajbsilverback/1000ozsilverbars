import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { resources, getResourceBySlug } from "@/data/resources";
import { getArticleContent } from "@/data/article-content";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import Container from "@/components/Container";
import { resourceQA } from "@/data/qa-content";
import { fetchProductSpot } from "@/lib/monexSpot";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: resource.title,
    description: resource.description,
    alternates: {
      canonical: `${SITE_CONFIG.canonicalDomain}/resources/${slug}`,
    },
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `${SITE_CONFIG.domain}/resources/${slug}`,
      type: "article",
    },
  };
}

// Get descriptive Monex anchor text from resource data
function getMonexAnchorText(slug: string): string {
  const resource = getResourceBySlug(slug);
  return resource?.monexAnchorText || "Monex silver resources";
}

// Replace price tokens in content strings
function replacePriceTokens(text: string, barPrice: string): string {
  return text.replace(/\{\{BAR_PRICE\}\}/g, barPrice);
}

// Generate AI summary bullets based on resource content
function generateAISummaryBullets(slug: string, title: string): string[] {
  const summaryMap: Record<string, string[]> = {
    "premiums-explained": [
      "This article explains why 1000 oz silver bars have the lowest retail premiums",
      "Learn how premiums of 0.5-2% compare to smaller bar sizes",
      "Understand the manufacturing economics that drive 1000 oz bar efficiency",
      "Discover strategies to maximize premium savings when purchasing",
      "Compare total cost of ownership across different silver bar formats",
    ],
    "size-comparison": [
      "This article compares 1 oz, 100 oz, and 1000 oz silver bars in detail",
      "Learn the premium differences across bar size denominations",
      "Understand trade-offs between cost efficiency and liquidity by size",
      "Discover which bar size best fits different investment goals and capital levels",
      "Get guidance on building a mixed-size silver bar portfolio",
    ],
    "storage-options": [
      "This article covers storage solutions for high-value 1000 oz silver bars",
      "Learn about professional vault storage and allocated programs",
      "Understand bank safe deposit box advantages and limitations",
      "Discover home storage requirements for substantial silver holdings",
      "Get guidance on insurance and security considerations",
    ],
    "brand-differences": [
      "This article compares major 1000 oz silver bar manufacturers",
      "Learn about Johnson Matthey, Asahi, KGHM, and other COMEX refiners",
      "Understand the importance of COMEX/LBMA accreditation for 1000 oz bars",
      "Discover security features and authentication methods by brand",
      "Compare how brand choice affects premiums and resale value",
    ],
    "liquidity-considerations": [
      "This article explains liquidity dynamics for 1000 oz silver bars",
      "Learn how 1000 oz bar liquidity compares to smaller denominations",
      "Understand the partial liquidation challenge with large bars",
      "Discover strategies for efficient buying and selling",
      "Get guidance on documentation for smooth resale transactions",
    ],
    "market-dynamics": [
      "This article explains the forces that move silver prices",
      "Learn how industrial demand, investment flows, and dollar strength affect values",
      "Understand the role of COMEX futures in price discovery",
      "Discover how mine production and recycling influence the silver market",
      "Get context for interpreting silver price movements",
    ],
    "spreads-explained": [
      "This article explains bid-ask spreads on 1000 oz silver bars",
      "Learn why 1000 oz bars have tighter spreads than smaller bars",
      "Understand how spreads affect your total cost of ownership",
      "Discover strategies to minimize spread impact on returns",
      "Calculate your break-even point including spread costs",
    ],
    "authentication-guide": [
      "This article covers authentication for high-value 1000 oz silver bars",
      "Learn about security features on modern COMEX-accredited bars",
      "Understand professional testing methods like XRF analysis",
      "Discover documentation requirements for legitimate 1000 oz bars",
      "Get guidance on avoiding counterfeits and red flags",
    ],
    "institutional-vs-retail": [
      "This article explains the institutional silver market for 1000 oz bars",
      "Learn about COMEX accreditation and quality standards",
      "Understand how institutional infrastructure benefits retail investors",
      "Discover pricing differences between institutional and retail markets",
      "Get insights on leveraging institutional markets as a retail buyer",
    ],
    "portfolio-allocation": [
      "This article covers strategic allocation to 1000 oz silver bars",
      "Learn when 1000 oz bars become appropriate for your portfolio",
      "Understand silver's role in portfolio diversification",
      "Discover mixed-size strategies for balancing efficiency and flexibility",
      "Get guidance on physical silver vs other silver investments",
    ],
    "first-time-buyers-guide": [
      "This article guides first-time buyers through the 1000 oz bar purchase process",
      "Learn how to evaluate and select reputable dealers",
      "Understand payment methods, settlement timelines, and delivery logistics",
      "Discover why dealer pricing varies and how to compare options",
      "Get practical tips for documentation and building dealer relationships",
    ],
    "tax-considerations": [
      "This article provides a high-level overview of silver tax considerations",
      "Learn how physical silver is classified for federal tax purposes",
      "Understand capital gains basics and holding period implications",
      "Discover how state tax treatment varies across jurisdictions",
      "Get guidance on IRA ownership vs personal possession trade-offs",
    ],
  };

  return summaryMap[slug] || [
    `This article provides comprehensive coverage of ${title.toLowerCase()}`,
    "Learn key concepts and practical considerations for 1000 oz silver bar investors",
    "Understand how this topic affects your silver investment strategy",
    "Get actionable guidance based on industry best practices",
    "Find answers to common questions in this area",
  ];
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const content = getArticleContent(slug);
  const qa = resourceQA[slug] || [];
  const aiSummaryBullets = generateAISummaryBullets(slug, resource.title);
  
  // Fetch price data for dynamic FAQ tokens and article content
  const priceData = await fetchProductSpot();
  const formattedBarPrice = priceData 
    ? `$${Math.round(priceData.ask).toLocaleString("en-US")}` 
    : "$30,000";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    url: `${SITE_CONFIG.domain}/resources/${slug}`,
    isPartOf: {
      "@type": "WebSite",
      url: SITE_CONFIG.domain,
      name: SITE_CONFIG.brandName,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.domain}/#organization`,
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
    author: {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.domain}/#organization`,
      name: SITE_CONFIG.brandName,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.domain}/resources/${slug}`,
    },
    articleSection: resource.category,
    about: {
      "@type": "Thing",
      name: "1000 oz Silver Bars",
    },
    educationalLevel: "Intermediate",
    learningResourceType: "Guide",
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Header */}
      <section className="pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 silver-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
        <Container className="relative">
          {/* Breadcrumb row */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link
              href="/resources"
              className="inline-flex items-center text-navy-700 hover:text-navy-600 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Resources
            </Link>
            <span className="px-3 py-1 rounded-full bg-navy-50 text-navy-700 text-sm font-medium">
              {resource.category}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight">
            {resource.title}
          </h1>

          {/* AI Summary - placed after H1 */}
          <AISummary bullets={aiSummaryBullets} />
        </Container>
      </section>

      {/* Key Takeaways */}
      <section className="py-4 md:py-6 border-b border-silver-200 bg-white">
        <Container>
          <div className="card p-5 md:p-6 bg-navy-50 border-navy-100">
            <h2 className="text-lg md:text-xl font-display font-semibold text-navy-700 mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Key Takeaways
            </h2>
            <ul className="space-y-2">
              {content.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start text-gray-700 text-sm md:text-base">
                  <span className="text-navy-600 mr-2 mt-0.5">•</span>
                  <span>{replacePriceTokens(takeaway, formattedBarPrice)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <article className="py-8 md:py-10 bg-white">
        <Container>
          <div className="prose prose-lg max-w-none space-y-8">
            {content.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-gray-900">
                  {section.heading}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-600 leading-relaxed text-base md:text-lg"
                  >
                    {replacePriceTokens(paragraph, formattedBarPrice)}
                  </p>
                ))}
                {section.subheading && (
                  <div className="space-y-3 pt-4">
                    <h3 className="text-lg md:text-xl font-display font-semibold text-navy-700">
                      {section.subheading}
                    </h3>
                    {section.subcontent?.map((paragraph, sIndex) => (
                      <p
                        key={sIndex}
                        className="text-gray-600 leading-relaxed text-base md:text-lg"
                      >
                        {replacePriceTokens(paragraph, formattedBarPrice)}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Internal Links */}
          <div className="mt-10 p-5 md:p-6 rounded-xl bg-gray-50 border border-silver-200">
            <p className="text-gray-600 mb-3 text-sm md:text-base">
              Continue learning about 1000 oz silver bars:
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/"
                className="inline-flex items-center text-navy-700 hover:text-navy-600 transition-colors"
              >
                <span>1000 oz silver bar overview</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/live-silver-prices"
                className="inline-flex items-center text-navy-700 hover:text-navy-600 transition-colors"
              >
                <span>Live silver prices</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/where-to-buy-1000-oz-silver-bars"
                className="inline-flex items-center text-navy-700 hover:text-navy-600 transition-colors"
              >
                <span>Where to buy 1000 oz bars</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center text-navy-700 hover:text-navy-600 transition-colors"
              >
                <span>All educational guides</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Monex Link - Contextual external citation */}
          <div className="mt-5 p-5 md:p-6 rounded-xl bg-navy-50 border border-navy-100">
            <p className="text-gray-600 mb-2 text-sm md:text-base">
              For more detailed information and current pricing:
            </p>
            <a
              href={resource.monexLink}
              target="_blank"
              rel="nofollow noopener"
              className="inline-flex items-center text-navy-700 hover:text-navy-600 transition-colors font-medium"
            >
              <span>{getMonexAnchorText(slug)}</span>
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
        </Container>
      </article>

      {/* Q&A Section - Topic Specific */}
      {qa.length > 0 && <QASection items={qa} priceData={priceData} />}

      {/* CTA Section */}
      <section className="py-12 md:py-16 section-dark">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-gray-900">
              Continue Your <span className="silver-text">Education</span>
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm md:text-base">
              Explore more{" "}
              <Link href="/resources" className="text-navy-700 hover:underline">
                resources about 1000 oz silver bars
              </Link>{" "}
              or check{" "}
              <Link href="/live-silver-prices" className="text-navy-700 hover:underline">
                current market prices
              </Link>{" "}
              to inform your investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/live-silver-prices" className="btn-primary">
                View Silver Prices
              </Link>
              <Link href="/resources" className="btn-secondary">
                More Resources
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Resources */}
      <section className="py-12 md:py-16 bg-white">
        <Container size="wide">
          <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-900 mb-6">
            Related Resources
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {resources
              .filter((r) => r.slug !== slug)
              .slice(0, 3)
              .map((relatedResource) => (
                <Link
                  key={relatedResource.slug}
                  href={`/resources/${relatedResource.slug}`}
                  className="card p-5 group hover:border-navy-300 transition-all"
                >
                  <span className="text-xs text-navy-600 font-medium">
                    {relatedResource.category}
                  </span>
                  <h3 className="text-base md:text-lg font-display font-semibold text-gray-900 mt-2 mb-2 group-hover:text-navy-700 transition-colors line-clamp-2">
                    {relatedResource.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedResource.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
