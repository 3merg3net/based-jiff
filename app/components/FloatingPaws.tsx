'use client';

import { useEffect, useMemo, useState } from "react";

/**
 * Global decorative background: floating paw prints across the whole page.
 * Lightweight SVGs with varied size/speed/delay/opacity. Fixed layer behind content.
 */
export default function FloatingPaws() {
  // Generate once per client (avoids SSR mismatch)
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const COUNT = 26; // tweak for more/less paws

  const paws = useMemo(() => {
    // deterministic positions/speeds based on index
    return Array.from({ length: COUNT }).map((_, i) => {
      const rnd = (seed: number) => {
        // simple pseudo-random from seed
        const x = Math.sin(seed * 999) * 10000;
        return x - Math.floor(x);
      };

      const left = Math.round(rnd(i + 1) * 100);   // vw
      const top = Math.round(rnd(i + 2) * 100);    // vh
      const size = 28 + Math.round(rnd(i + 3) * 36); // px: 28–64
      const rotate = Math.round(rnd(i + 4) * 360);
      const delay = Math.round(rnd(i + 5) * 12);   // s
      const duration = 14 + Math.round(rnd(i + 6) * 16); // 14–30s
      const opacity = 0.18 + rnd(i + 7) * 0.22;   // 0.18–0.40
      const driftX = -20 + Math.round(rnd(i + 8) * 40); // -20..20 px
      const driftY = -30 + Math.round(rnd(i + 9) * 60); // -30..30 px

      return { left, top, size, rotate, delay, duration, opacity, driftX, driftY };
    });
  }, []);

  if (!ready) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    >
      {/* CSS keyframes local to component */}
      <style jsx>{`
        @keyframes drift {
          0%   { transform: translate3d(0, 0, 0) rotate(0deg); }
          50%  { transform: translate3d(var(--dx), var(--dy), 0) rotate(6deg); }
          100% { transform: translate3d(0, 0, 0) rotate(-4deg); }
        }
      `}</style>

      {paws.map((p, idx) => (
        <Paw
          key={idx}
          left={p.left}
          top={p.top}
          size={p.size}
          rotate={p.rotate}
          delay={p.delay}
          duration={p.duration}
          opacity={p.opacity}
          dx={p.driftX}
          dy={p.driftY}
        />
      ))}
    </div>
  );
}

function Paw({
  left, top, size, rotate, delay, duration, opacity, dx, dy,
}: {
  left: number; top: number; size: number; rotate: number;
  delay: number; duration: number; opacity: number; dx: number; dy: number;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      style={{
        position: "absolute",
        left: `${left}vw`,
        top: `${top}vh`,
        opacity,
        transform: `rotate(${rotate}deg)`,
        animation: `drift ${duration}s ${delay}s ease-in-out infinite`,
        filter: "drop-shadow(0 8px 28px rgba(42,111,255,.25))",
        // custom drift amounts via CSS variables
        // (Turbopack/Tailwind v3 safe inline style)
        ["--dx" as any]: `${dx}px`,
        ["--dy" as any]: `${dy}px`,
      }}
      fill="none"
    >
      {/* Large pad */}
      <path d="M25 44c0-6 7-10 13-10s12 4 12 10-6 10-12 10-13-4-13-10z" fill="#2a6fff" fillOpacity="0.5"/>
      {/* Toes */}
      <circle cx="20" cy="28" r="6" fill="#2a6fff" fillOpacity="0.5"/>
      <circle cx="30" cy="22" r="6" fill="#2a6fff" fillOpacity="0.5"/>
      <circle cx="41" cy="22" r="6" fill="#2a6fff" fillOpacity="0.5"/>
      <circle cx="51" cy="28" r="6" fill="#2a6fff" fillOpacity="0.5"/>
    </svg>
  );
}
