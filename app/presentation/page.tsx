"use client";

import { useState, useEffect } from "react";
import SLIDES from "./slides";

const TOTAL = SLIDES.length;

export default function PresentationPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setIndex((i) => Math.min(i + 1, TOTAL - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setIndex((i) => Math.max(i - 1, 0));
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const SlideComponent = SLIDES[index];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#fdf6ee" }}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border-2 p-10 shadow-sm"
        style={{ borderColor: "#ead9c8", backgroundColor: "#ffffff" }}
      >
        <SlideComponent />
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 mt-6">
        <button
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-150 disabled:opacity-30"
          style={{ backgroundColor: "#ead9c8", color: "#3b2a1a" }}
        >
          ← Prev
        </button>

        <span className="text-sm tabular-nums" style={{ color: "#7a5c3a" }}>
          {index + 1} / {TOTAL}
        </span>

        <button
          onClick={() => setIndex((i) => Math.min(i + 1, TOTAL - 1))}
          disabled={index === TOTAL - 1}
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-150 disabled:opacity-30"
          style={{ backgroundColor: "#c68642", color: "#ffffff" }}
        >
          Next →
        </button>
      </div>

      <p className="mt-3 text-xs" style={{ color: "#b09070" }}>
        Use ← → arrow keys to navigate
      </p>
    </div>
  );
}
