"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Liquid UI / Fluid animation arka plan:
 * Mouse ile yumuşak, akışkan blob hareketi; hafif sürekli drift ile canlı his.
 */
const BLOB_COLORS = [
  "rgba(255, 182, 193, 0.55)",   // pastel pink
  "rgba(255, 218, 185, 0.5)",    // peach
  "rgba(255, 236, 179, 0.5)",    // soft yellow
  "rgba(173, 216, 230, 0.55)",   // light blue
  "rgba(221, 160, 221, 0.45)",   // plum
  "rgba(152, 251, 152, 0.4)",    // light green
  "rgba(255, 200, 220, 0.4)",    // extra pink for fluid blend
];

const FLUID_LERP = 0.018;
const RADIUS_BASE = 420;
const BLUR_PX = 80;
const DRIFT_SPEED = 0.00025;
const DRIFT_AMOUNT = 0.08;

function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

export default function MouseBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState({ x: 0.5, y: 0.5 });
  const positionsRef = useRef(
    BLOB_COLORS.map((_, i) => ({
      x: 0.35 + (i * 0.08) % 0.4,
      y: 0.25 + (i * 0.12) % 0.4,
    }))
  );
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [blobPositions, setBlobPositions] = useState(() =>
    positionsRef.current.map((p) => ({ ...p }))
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setTarget({ x, y });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const positions = positionsRef.current;

    const tick = (t: number) => {
      timeRef.current = t;
      const drift = Math.sin(t * DRIFT_SPEED) * DRIFT_AMOUNT;
      const drift2 = Math.cos(t * DRIFT_SPEED * 0.7) * DRIFT_AMOUNT;

      for (let i = 0; i < BLOB_COLORS.length; i++) {
        const spread = 0.18;
        const angle = i * 1.15;
        const tx =
          target.x +
          Math.cos(angle) * spread +
          drift * (1 + i * 0.1);
        const ty =
          target.y +
          Math.sin(angle * 0.9) * spread +
          drift2 * (1 + i * 0.08);

        positions[i].x = lerp(positions[i].x, tx, FLUID_LERP);
        positions[i].y = lerp(positions[i].y, ty, FLUID_LERP);
      }
      setBlobPositions(positions.map((p) => ({ ...p })));
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target.x, target.y]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#fefefe]" />
      <div
        className="absolute inset-0"
        style={{ filter: `blur(${BLUR_PX}px)` }}
      >
        {BLOB_COLORS.map((color, i) => (
          <div
            key={i}
            className="absolute rounded-full transition-none"
            style={{
              width: RADIUS_BASE + i * 50,
              height: RADIUS_BASE + i * 50,
              left: `${blobPositions[i].x * 100}%`,
              top: `${blobPositions[i].y * 100}%`,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`,
              opacity: 0.92,
            }}
          />
        ))}
      </div>
    </div>
  );
}
