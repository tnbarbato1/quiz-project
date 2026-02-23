"use client";

import { useState } from "react";
import QuizQuestion, { PersonalityKey, Question } from "./components/QuizQuestion";
import Results from "./components/Results";

const QUESTIONS: Question[] = [
  {
    question: "It's 7am. What's your morning vibe?",
    answers: [
      { emoji: "⚡", text: "Hit the ground running — coffee first, questions later", personality: "boldAdventurer" },
      { emoji: "🌅", text: "Quiet and slow. No rush.", personality: "zenMinimalist" },
      { emoji: "🔬", text: "I already have a specific brew method in mind", personality: "artisanSnob" },
      { emoji: "🛋️", text: "Something warm, cozy, and deeply comforting", personality: "indulgentTreat" },
    ],
  },
  {
    question: "How do you actually take your coffee?",
    answers: [
      { emoji: "🖤", text: "Black. Always. No exceptions.", personality: "zenMinimalist" },
      { emoji: "💥", text: "Dark and strong — the stronger the better", personality: "boldAdventurer" },
      { emoji: "🗺️", text: "Depends on the origin and roast profile", personality: "artisanSnob" },
      { emoji: "🍦", text: "Sweet, creamy, and fully loaded", personality: "indulgentTreat" },
    ],
  },
  {
    question: "What's your ideal coffee shop atmosphere?",
    answers: [
      { emoji: "🔊", text: "Loud and energetic — I like the buzz", personality: "boldAdventurer" },
      { emoji: "📖", text: "Quiet corner, minimal distractions", personality: "zenMinimalist" },
      { emoji: "🏆", text: "They have a Chemex and actually know how to use it", personality: "artisanSnob" },
      { emoji: "🧣", text: "Cozy, warm, with good music and soft lighting", personality: "indulgentTreat" },
    ],
  },
  {
    question: "You're trying something new. Your reaction?",
    answers: [
      { emoji: "🙋", text: "I go first. Always.", personality: "boldAdventurer" },
      { emoji: "📚", text: "I research it thoroughly before committing", personality: "zenMinimalist" },
      { emoji: "🌍", text: "I ask where it's from and how it was processed", personality: "artisanSnob" },
      { emoji: "😍", text: "Is it sweet? Will I love it? Probably yes.", personality: "indulgentTreat" },
    ],
  },
  {
    question: "Your ideal coffee order takes...",
    answers: [
      { emoji: "⏱️", text: "Under 60 seconds — fast and strong", personality: "boldAdventurer" },
      { emoji: "⏳", text: "However long it takes to do it right", personality: "zenMinimalist" },
      { emoji: "🫗", text: "A proper pour-over takes what it takes", personality: "artisanSnob" },
      { emoji: "✨", text: "Long enough to add every single topping", personality: "indulgentTreat" },
    ],
  },
  {
    question: "If your coffee were a playlist, it would be...",
    answers: [
      { emoji: "🏋️", text: "High-energy workout mix, no skips", personality: "boldAdventurer" },
      { emoji: "🎵", text: "Ambient, no lyrics, just vibes", personality: "zenMinimalist" },
      { emoji: "🎸", text: "Indie folk with impeccable, obscure taste", personality: "artisanSnob" },
      { emoji: "🎤", text: "Feel-good pop that just makes you happy", personality: "indulgentTreat" },
    ],
  },
];

const TOTAL = QUESTIONS.length;

type Phase = "intro" | "questions" | "results";

const DEFAULT_TALLIES: Record<PersonalityKey, number> = {
  boldAdventurer: 0,
  zenMinimalist: 0,
  artisanSnob: 0,
  indulgentTreat: 0,
};

export default function Home() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tallies, setTallies] = useState<Record<PersonalityKey, number>>({ ...DEFAULT_TALLIES });

  function handleAnswer(personality: PersonalityKey) {
    const updated = { ...tallies, [personality]: tallies[personality] + 1 };
    setTallies(updated);

    if (currentIndex + 1 >= TOTAL) {
      setPhase("results");
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handleRetake() {
    setTallies({ ...DEFAULT_TALLIES });
    setCurrentIndex(0);
    setPhase("intro");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#fdf6ee" }}
    >
      <div
        className="w-full max-w-md rounded-2xl border-2 p-8 shadow-sm"
        style={{ borderColor: "#ead9c8", backgroundColor: "#ffffff" }}
      >
        {phase === "intro" && (
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-5xl">☕</p>
            <div>
              <h1 className="text-3xl font-bold" style={{ color: "#3b2a1a" }}>
                What&apos;s Your Coffee Personality?
              </h1>
              <p className="mt-3 text-base leading-relaxed" style={{ color: "#7a5c3a" }}>
                Answer 6 quick questions to discover your Basecamp Coffee identity — and the drink that matches who you really are.
              </p>
            </div>
            <button
              onClick={() => setPhase("questions")}
              className="w-full rounded-full py-3 text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#c68642", color: "#ffffff" }}
            >
              Find My Coffee Type
            </button>
            <p className="text-xs" style={{ color: "#b09070" }}>
              Takes about 2 minutes
            </p>
          </div>
        )}

        {phase === "questions" && (
          <QuizQuestion
            question={QUESTIONS[currentIndex]}
            questionIndex={currentIndex}
            totalQuestions={TOTAL}
            onAnswer={handleAnswer}
          />
        )}

        {phase === "results" && (
          <Results
            tallies={tallies}
            totalQuestions={TOTAL}
            onRetake={handleRetake}
          />
        )}
      </div>
    </div>
  );
}
