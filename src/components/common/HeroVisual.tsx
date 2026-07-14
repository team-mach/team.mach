import { Icon } from "@/components/common/Icon";

/**
 * A cluster of tilted glass cards showing (fictional/sample) UAV telemetry —
 * altitude, battery, mission checklist, comms — arranged in a shallow 3D
 * perspective. Deliberately original content (no cloned widgets, icons, or
 * copy from the reference screenshots), just the "floating dashboard cards"
 * layout idea reinterpreted for an aerospace context.
 */
export function HeroVisual() {
  return (
    <div className="relative h-[420px] sm:h-[480px] lg:h-[540px] w-full [perspective:1400px]">
      <div className="relative h-full w-full [transform-style:preserve-3d] [transform:rotateY(-10deg)_rotateX(6deg)]">
        {/* Altitude / attitude card */}
        <div className="panel-glow absolute top-2 right-4 sm:right-10 w-44 p-4 [transform:translateZ(60px)]">
          <p className="text-[10px] font-mono uppercase tracking-eyebrow text-ink-faint mb-2">Altitude</p>
          <p className="font-display text-3xl text-ink">142<span className="text-base text-ink-faint ml-1">m</span></p>
          <div className="mt-3 flex items-end gap-0.5 h-8">
            {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-aerospace-gradient" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        {/* Battery / power card */}
        <div className="panel absolute top-40 right-0 sm:right-2 w-40 p-4 [transform:translateZ(30px)]">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-mono uppercase tracking-eyebrow text-ink-faint">Battery</p>
            <span className="h-2 w-2 rounded-full bg-signal-green" />
          </div>
          <p className="font-display text-2xl text-ink">87%</p>
          <p className="text-xs text-ink-faint mt-1">6S LiPo · 22.4V</p>
        </div>

        {/* Mission checklist card */}
        <div className="panel-glow absolute bottom-24 left-0 sm:left-2 w-52 p-4 [transform:translateZ(80px)]">
          <p className="text-[10px] font-mono uppercase tracking-eyebrow text-ink-faint mb-3">Pre-Flight Checklist</p>
          <ul className="space-y-2">
            {["GPS Lock", "ESC Calibration", "Failsafe Test"].map((item, i) => (
              <li key={item} className="flex items-center gap-2 text-xs text-ink-muted">
                <span
                  className={`h-3.5 w-3.5 rounded-sm flex items-center justify-center text-[9px] ${
                    i < 2 ? "bg-signal-green/20 text-signal-green" : "bg-titanium-600 text-ink-faint"
                  }`}
                >
                  {i < 2 ? "✓" : ""}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Comms / link status row */}
        <div className="panel absolute bottom-0 left-8 sm:left-16 w-56 p-4 [transform:translateZ(45px)]">
          <p className="text-[10px] font-mono uppercase tracking-eyebrow text-ink-faint mb-3">Comm Link</p>
          <div className="flex items-center gap-3">
            {(["grid", "sponsors", "meetings", "docs"] as const).map((icon) => (
              <div
                key={icon}
                className="h-8 w-8 rounded-md bg-violet-gradient flex items-center justify-center text-white"
              >
                <Icon name={icon} className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>

        {/* GPS coordinate chip */}
        <div className="panel absolute top-16 left-4 sm:left-0 w-36 px-3 py-2.5 [transform:translateZ(100px)]">
          <p className="text-[9px] font-mono uppercase tracking-eyebrow text-ink-faint">GPS Lock</p>
          <p className="text-xs font-mono text-aerospace-glow mt-0.5">10.0669° N</p>
          <p className="text-xs font-mono text-aerospace-glow">76.6220° E</p>
        </div>

        {/* Center glow disc behind everything */}
        <div className="absolute inset-0 flex items-center justify-center [transform:translateZ(-20px)]">
          <div className="h-64 w-64 rounded-full bg-glow-radial blur-2xl" />
        </div>
      </div>
    </div>
  );
}
