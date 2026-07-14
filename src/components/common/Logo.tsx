interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * Renders the Team MACH mark from /public/logo.svg. The source SVG already
 * contains the wordmark, so `showWordmark` just controls whether we crop
 * to the glyph only (for tight nav placements) or show the full lockup.
 */
export function Logo({ className = "h-8 w-auto", showWordmark = true }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="Team MACH"
      className={className}
      style={!showWordmark ? { objectFit: "cover", objectPosition: "top" } : undefined}
    />
  );
}
