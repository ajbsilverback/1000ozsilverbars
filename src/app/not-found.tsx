import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-xl px-4">
        <div className="text-8xl font-display font-bold gold-text mb-6">404</div>
        <h1 className="text-3xl font-display font-semibold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
  );
}


