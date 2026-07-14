import type { Config } from "tailwindcss";

/**
 * MACH OS Design System
 * ----------------------
 * Aerospace Blue design language for Team MACH's public site + internal
 * operations platform. Dark, engineering-grade, restrained.
 *
 * Token naming mirrors the brief exactly so design intent stays traceable:
 * graphite (primary bg) / titanium (secondary bg / surfaces) /
 * aerospace (primary accent, brand + info) / copper (action accent) /
 * signal-green (success / completed) / signal-amber (warning) /
 * signal-red (danger).
 */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: "#08090F",
          950: "#05060A",
          900: "#08090F",
          800: "#0E1018",
        },
        titanium: {
          DEFAULT: "#12131D",
          700: "#171826",
          600: "#1F2133",
          500: "#2B2D45",
        },
        aerospace: {
          DEFAULT: "#5B7CFA",
          50: "#EEF1FE",
          100: "#D6DEFD",
          300: "#94A9F9",
          500: "#5B7CFA",
          600: "#4560DE",
          700: "#3348B3",
          glow: "#7FE0FF",
        },
        violet: {
          DEFAULT: "#8B5CF6",
          300: "#B9A2FA",
          400: "#A47DF8",
          500: "#8B5CF6",
          600: "#7440E0",
        },
        copper: {
          DEFAULT: "#C6813F",
          400: "#D89A5D",
          500: "#C6813F",
          600: "#A6692F",
        },
        signal: {
          green: "#3E9C74",
          amber: "#D9A441",
          red: "#E1524F",
        },
        ink: {
          DEFAULT: "#F5F6FB",
          muted: "#9EA3BD",
          faint: "#696E8C",
        },
        line: "rgba(245, 246, 251, 0.09)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        "aerospace-gradient": "linear-gradient(90deg, #7FE0FF 0%, #5B7CFA 55%, #8B5CF6 100%)",
        "violet-gradient": "linear-gradient(135deg, #5B7CFA 0%, #8B5CF6 100%)",
        "glow-radial": "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(91,124,250,0.12) 45%, transparent 70%)",
        "grid-overlay":
          "linear-gradient(rgba(245,246,251,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(245,246,251,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(245,246,251,0.06) inset, 0 20px 40px -20px rgba(0,0,0,0.7)",
        glow: "0 0 0 1px rgba(139,92,246,0.25), 0 25px 60px -20px rgba(91,124,250,0.35)",
        "glow-sm": "0 0 20px -4px rgba(139,92,246,0.45)",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
} satisfies Config;
