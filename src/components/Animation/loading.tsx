import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
  durationMs?: number;
}

export default function LoadingScreen({
  onComplete,
  durationMs = 2200,
}: LoadingScreenProps) {
  const [percent, setPercent] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      setPercent(Math.round(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setFadeOut(true);
        setTimeout(() => {
          setHidden(true);
          onComplete?.();
        }, 500);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [durationMs, onComplete]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#F7EAD0] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <span className="text-xs tracking-[0.3em] text-black mb-6">
        PORTFOLIO
      </span>

      <h1 className="font-serif italic text-4xl sm:text-5xl text-black mb-6">
        Naomi Soyinka
      </h1>

      <div className="w-16 h-px bg-[#E96512] mb-8" />

      <div className="flex flex-col items-center mb-8">
        <span className="font-serif text-2xl text-black mb-3">{percent}%</span>
        <div className="w-40 h-px bg-[#E96512] relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-white transition-all duration-150"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <p className="text-xs tracking-[0.2em] text-black">
        FRONTEND DEVELOPER · LAGOS, NIGERIA
      </p>
    </div>
  );
}
