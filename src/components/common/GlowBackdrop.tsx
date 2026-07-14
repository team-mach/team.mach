interface GlowBackdropProps {
  className?: string;
}

/**
 * A handful of large, blurred blue/violet blobs placed behind content.
 * Purely decorative — always `pointer-events-none` and absolutely
 * positioned within a `relative` ancestor.
 */
export function GlowBackdrop({ className = "" }: GlowBackdropProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="glow-orb w-[36rem] h-[36rem] -top-40 -right-32" />
      <div className="glow-orb w-[28rem] h-[28rem] top-1/2 -left-40 opacity-40" />
      <div className="glow-orb w-[20rem] h-[20rem] bottom-0 right-1/4 opacity-30" />
    </div>
  );
}
