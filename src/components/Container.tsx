import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  /** Additional classes to merge with the container */
  className?: string;
  /** Container width variant */
  size?: "article" | "wide" | "full";
}

/**
 * Reusable centered layout container.
 * Encapsulates max-width, horizontal centering, and responsive padding.
 * 
 * Variants:
 * - article: max-w-3xl (default, for long-form content)
 * - wide: max-w-7xl (for grids, related resources)
 * - full: max-w-6xl (for pricing pages, medium layouts)
 */
export default function Container({ 
  children, 
  className = "",
  size = "article" 
}: ContainerProps) {
  const sizeClasses = {
    article: "max-w-3xl",
    wide: "max-w-7xl",
    full: "max-w-6xl",
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}




