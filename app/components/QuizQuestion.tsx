import ProgressDots from "./ProgressDots";

export type PersonalityKey = "boldAdventurer" | "zenMinimalist" | "artisanSnob" | "indulgentTreat";

export interface Answer {
  emoji: string;
  text: string;
  personality: PersonalityKey;
}

export interface Question {
  question: string;
  answers: Answer[];
}

interface QuizQuestionProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (personality: PersonalityKey) => void;
}

export default function QuizQuestion({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  return (
    <div className="flex flex-col gap-6">
      <ProgressDots total={totalQuestions} current={questionIndex} />

      <p className="text-sm text-center font-medium" style={{ color: "#c68642" }}>
        Question {questionIndex + 1} of {totalQuestions}
      </p>

      <h2 className="text-2xl font-bold text-center leading-snug" style={{ color: "#3b2a1a" }}>
        {question.question}
      </h2>

      <div className="flex flex-col gap-3">
        {question.answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => onAnswer(answer.personality)}
            className="flex items-center gap-4 w-full rounded-2xl border-2 px-5 py-4 text-left text-base font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
            style={{
              borderColor: "#ead9c8",
              backgroundColor: "#ffffff",
              color: "#3b2a1a",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#c68642";
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fdf6ee";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#ead9c8";
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ffffff";
            }}
          >
            <span className="text-2xl">{answer.emoji}</span>
            <span>{answer.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
