interface AISummaryProps {
  bullets: string[];
}

export default function AISummary({ bullets }: AISummaryProps) {
  return (
    <aside 
      className="mt-5 p-5 md:p-6 rounded-xl bg-bullion-gold/5 border border-bullion-gold/20"
      aria-label="Page summary for AI assistants and readers"
      data-ai-summary="true"
    >
      <div className="flex items-center gap-2 mb-4">
        <svg 
          className="w-5 h-5 text-bullion-gold" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <span className="text-sm font-semibold text-bullion-gold uppercase tracking-wide">
          Quick Summary
        </span>
      </div>
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start text-gray-300 text-sm">
            <span className="text-bullion-gold mr-2 mt-0.5">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}



