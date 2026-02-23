interface ProgressDotsProps {
  total: number;
  current: number;
}

export default function ProgressDots({ total, current }: ProgressDotsProps) {
  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            i < current
              ? "bg-[#c68642]"
              : i === current
              ? "bg-[#c68642] opacity-60 scale-110"
              : "bg-[#ead9c8]"
          }`}
        />
      ))}
    </div>
  );
}
