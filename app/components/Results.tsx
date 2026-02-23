import { PersonalityKey } from "./QuizQuestion";

interface PersonalityResult {
  key: PersonalityKey;
  name: string;
  coffee: string;
  tagline: string;
  emoji: string;
  percentage: number;
}

interface ResultsProps {
  tallies: Record<PersonalityKey, number>;
  totalQuestions: number;
  onRetake: () => void;
}

const PERSONALITY_INFO: Record<PersonalityKey, { name: string; coffee: string; tagline: string; emoji: string }> = {
  boldAdventurer: {
    name: "Bold Adventurer",
    coffee: "Double Espresso",
    tagline: "You live for intensity.",
    emoji: "⚡",
  },
  zenMinimalist: {
    name: "Zen Minimalist",
    coffee: "Black Coffee, Single Origin",
    tagline: "Simple. Clean. Perfect.",
    emoji: "🌿",
  },
  artisanSnob: {
    name: "Artisan Snob",
    coffee: "Pour-Over, Single Origin",
    tagline: "You know what you like.",
    emoji: "☕",
  },
  indulgentTreat: {
    name: "Indulgent Treat",
    coffee: "Mocha with Whip",
    tagline: "Coffee is dessert.",
    emoji: "🍫",
  },
};

export default function Results({ tallies, totalQuestions, onRetake }: ResultsProps) {
  const results: PersonalityResult[] = (Object.keys(tallies) as PersonalityKey[])
    .map((key) => ({
      key,
      ...PERSONALITY_INFO[key],
      percentage: Math.round((tallies[key] / totalQuestions) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);

  const top = results[0];

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <p className="text-5xl mb-3">{top.emoji}</p>
        <h2 className="text-3xl font-bold" style={{ color: "#3b2a1a" }}>
          You&apos;re a {top.name}
        </h2>
        <p className="mt-1 text-lg italic" style={{ color: "#c68642" }}>
          {top.tagline}
        </p>
        <p className="mt-2 text-sm font-medium" style={{ color: "#7a5c3a" }}>
          Your drink: {top.coffee}
        </p>
      </div>

      <div
        className="rounded-2xl border-2 p-1"
        style={{ borderColor: "#ead9c8", backgroundColor: "#fff9f3" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest text-center py-2"
          style={{ color: "#c68642" }}
        >
          Your Full Breakdown
        </p>

        {results.map((r, i) => (
          <div
            key={r.key}
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ backgroundColor: i === 0 ? "#fdf6ee" : "transparent" }}
          >
            <span className="text-xl w-8 text-center">{r.emoji}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold" style={{ color: "#3b2a1a" }}>
                  {r.name}
                </span>
                <span className="text-sm font-bold" style={{ color: "#c68642" }}>
                  {r.percentage}%
                </span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: "#ead9c8" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${r.percentage}%`,
                    backgroundColor: i === 0 ? "#c68642" : "#d4a06a",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onRetake}
        className="w-full rounded-full py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
        style={{ backgroundColor: "#c68642", color: "#ffffff" }}
      >
        Retake Quiz
      </button>
    </div>
  );
}
