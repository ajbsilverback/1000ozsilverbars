import { SITE_CONFIG } from "@/lib/siteConfig";
import { ProductSpotSummary } from "@/lib/monexSpot";
import { replaceTokens } from "@/lib/priceTokens";

export interface QAItem {
  question: string;
  answer: string;
}

interface QASectionProps {
  items: QAItem[];
  includeSchema?: boolean;
  /** Optional price data for resolving dynamic tokens in answers */
  priceData?: ProductSpotSummary | null;
}

export default function QASection({ 
  items, 
  includeSchema = true,
  priceData = null 
}: QASectionProps) {
  // Process items to replace tokens with dynamic values
  const processedItems = items.map((item) => ({
    question: item.question,
    answer: replaceTokens(item.answer, priceData),
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: processedItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
            Questions & <span className="gold-text">Answers</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Common questions about {SITE_CONFIG.primaryProduct} answered by our editorial team.
          </p>
          <div className="space-y-6">
            {processedItems.map((item, index) => (
              <div 
                key={index} 
                className="card"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 
                  className="text-lg font-semibold text-white mb-3"
                  itemProp="name"
                >
                  {item.question}
                </h3>
                <div 
                  itemScope 
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p 
                    className="text-gray-400 leading-relaxed"
                    itemProp="text"
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
