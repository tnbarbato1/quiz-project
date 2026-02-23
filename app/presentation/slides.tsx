// All 14 presentation slides — self-contained components, no props

const colors = {
  bg: "#fdf6ee",
  card: "#ffffff",
  border: "#ead9c8",
  accent: "#c68642",
  text: "#3b2a1a",
  muted: "#7a5c3a",
  faint: "#b09070",
  tint: "#fff9f3",
};

// ─── Shared primitives ────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
      style={{ backgroundColor: colors.border, color: colors.muted }}
    >
      {children}
    </span>
  );
}

function SlideTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-bold leading-tight mb-4" style={{ color: colors.text }}>
      {children}
    </h1>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-relaxed" style={{ color: colors.muted }}>
      {children}
    </p>
  );
}

function MetricRow({
  label,
  current,
  target,
  status,
}: {
  label: string;
  current: string;
  target: string;
  status: "critical" | "bad" | "ok";
}) {
  const statusColor =
    status === "critical" ? "#dc2626" : status === "bad" ? "#d97706" : "#16a34a";
  return (
    <div
      className="flex items-center justify-between px-4 py-3 rounded-xl"
      style={{ borderBottom: `1px solid ${colors.border}` }}
    >
      <span className="text-sm font-medium" style={{ color: colors.text }}>
        {label}
      </span>
      <div className="flex gap-6 text-sm text-right">
        <span style={{ color: statusColor, fontWeight: 700 }}>{current}</span>
        <span style={{ color: colors.faint }}>→ {target}</span>
      </div>
    </div>
  );
}

// ─── Slide 1 ─────────────────────────────────────────────────────────────────

function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 py-4">
      <p className="text-6xl">☕</p>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: colors.faint }}>
          Leadership Briefing — February 2026
        </p>
        <h1 className="text-4xl font-bold leading-tight" style={{ color: colors.text }}>
          Basecamp Rewards
        </h1>
        <h2 className="text-2xl font-semibold mt-2" style={{ color: colors.accent }}>
          A Turnaround Plan
        </h2>
      </div>
      <p className="text-base max-w-sm leading-relaxed" style={{ color: colors.muted }}>
        Why the program is failing, what competitors built instead,
        and the identity layer that fixes it — already live.
      </p>
      <div
        className="mt-2 px-5 py-2 rounded-full text-sm font-medium"
        style={{ backgroundColor: colors.border, color: colors.muted }}
      >
        Presented by: Loyalty Program Manager
      </div>
    </div>
  );
}

// ─── Slide 2 ─────────────────────────────────────────────────────────────────

function Slide2() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Tag>Six months in</Tag>
        <SlideTitle>The Numbers Don&apos;t Lie</SlideTitle>
        <Body>Every core metric is below target — some critically so.</Body>
      </div>
      <div className="rounded-2xl border-2 overflow-hidden" style={{ borderColor: colors.border }}>
        <div
          className="px-4 py-2 text-xs font-semibold uppercase tracking-widest flex justify-between"
          style={{ backgroundColor: colors.tint, color: colors.muted }}
        >
          <span>Metric</span>
          <div className="flex gap-6">
            <span>Current</span>
            <span>Target</span>
          </div>
        </div>
        <MetricRow label="Monthly Active Users" current="2,100" target="8,000" status="critical" />
        <MetricRow label="Avg Visits / Month" current="2.3" target="4.0" status="bad" />
        <MetricRow label="Redemption Rate" current="18%" target="40%" status="critical" />
        <MetricRow label="30-Day Retention" current="31%" target="60%" status="critical" />
        <MetricRow label="Program NPS" current="12" target="—" status="critical" />
        <MetricRow label="ROI" current="0.5×" target="1.8×" status="critical" />
      </div>
      <p className="text-xs text-center" style={{ color: colors.faint }}>
        Sign-ups are fine (12,400 of 15,000 target). Retention is the crisis.
      </p>
    </div>
  );
}

// ─── Slide 3 ─────────────────────────────────────────────────────────────────

function Slide3() {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <Tag>The diagnosis</Tag>
        <SlideTitle>The Problem in One Sentence</SlideTitle>
      </div>
      <div
        className="rounded-2xl p-6 text-center"
        style={{ backgroundColor: colors.tint, border: `2px solid ${colors.border}` }}
      >
        <p className="text-lg font-semibold leading-snug" style={{ color: colors.text }}>
          &ldquo;We built a spreadsheet inside a personality-driven brand.&rdquo;
        </p>
      </div>
      <div className="flex gap-4">
        <div
          className="flex-1 rounded-2xl p-5 text-center"
          style={{ backgroundColor: "#f0fdf4", border: `2px solid #86efac` }}
        >
          <p className="text-4xl font-bold" style={{ color: "#16a34a" }}>67</p>
          <p className="text-sm font-semibold mt-1" style={{ color: "#15803d" }}>Brand NPS</p>
          <p className="text-xs mt-1" style={{ color: "#4ade80" }}>People love Basecamp</p>
        </div>
        <div className="flex items-center text-2xl" style={{ color: colors.faint }}>≠</div>
        <div
          className="flex-1 rounded-2xl p-5 text-center"
          style={{ backgroundColor: "#fef2f2", border: `2px solid #fca5a5` }}
        >
          <p className="text-4xl font-bold" style={{ color: "#dc2626" }}>12</p>
          <p className="text-sm font-semibold mt-1" style={{ color: "#b91c1c" }}>Program NPS</p>
          <p className="text-xs mt-1" style={{ color: "#f87171" }}>They ignore the rewards</p>
        </div>
      </div>
      <Body>
        Members don&apos;t leave because they dislike Basecamp — they&apos;re just indifferent to the program.
        Acquisition works. Belonging doesn&apos;t exist yet.
      </Body>
    </div>
  );
}

// ─── Slide 4 ─────────────────────────────────────────────────────────────────

function Slide4() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Tag>Competitive analysis</Tag>
        <SlideTitle>What Competitors Built</SlideTitle>
        <Body>Every competitor chose identity over transactions. We chose transactions.</Body>
      </div>
      <div className="flex flex-col gap-3">
        {[
          {
            name: "Dutch Bros",
            won: "Belonging — stickers, Broista culture, genuine relationships",
            basecamp: "Points + discounts",
          },
          {
            name: "Starbucks",
            won: "Personalization — Star Dashes, gamification, status",
            basecamp: "Points + discounts",
          },
          {
            name: "Roast & Co.",
            won: "Expertise — coffee knowledge as the reward",
            basecamp: "Points + discounts",
          },
        ].map((row) => (
          <div
            key={row.name}
            className="rounded-xl p-4"
            style={{ backgroundColor: colors.tint, border: `1px solid ${colors.border}` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold" style={{ color: colors.text }}>{row.name}</p>
                <p className="text-xs mt-0.5" style={{ color: colors.muted }}>{row.won}</p>
              </div>
              <div className="shrink-0">
                <span
                  className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{ backgroundColor: "#fef2f2", color: "#dc2626" }}
                >
                  Basecamp: {row.basecamp}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="rounded-xl p-4 text-center"
        style={{ backgroundColor: colors.border }}
      >
        <p className="text-sm font-semibold" style={{ color: colors.text }}>
          Every competitor built <em>belonging</em>. We built a points ledger.
        </p>
      </div>
    </div>
  );
}

// ─── Slide 5 ─────────────────────────────────────────────────────────────────

function Slide5() {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <Tag>Member voice</Tag>
        <SlideTitle>What Members Are Saying</SlideTitle>
        <Body>These aren&apos;t outliers — they represent our most common feedback category.</Body>
      </div>
      <div className="flex flex-col gap-4">
        {[
          {
            quote: "I go to Starbucks when I want rewards, here when I want good coffee.",
            source: "March feedback survey",
          },
          {
            quote: "Nothing makes me feel special as a member.",
            source: "March feedback survey",
          },
          {
            quote: "The program doesn't feel like Basecamp. It feels like corporate stuff.",
            source: "In-store barista report",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-5"
            style={{ backgroundColor: colors.tint, border: `2px solid ${colors.border}` }}
          >
            <p className="text-base font-medium italic leading-snug mb-2" style={{ color: colors.text }}>
              &ldquo;{item.quote}&rdquo;
            </p>
            <p className="text-xs" style={{ color: colors.faint }}>— {item.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Slide 6 ─────────────────────────────────────────────────────────────────

function Slide6() {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <Tag>The gap nobody filled</Tag>
        <SlideTitle>The Opportunity Nobody Took</SlideTitle>
        <Body>
          One idea surfaced independently across four separate sources — and nobody built it.
        </Body>
      </div>
      <div
        className="rounded-2xl p-6 text-center"
        style={{ backgroundColor: colors.tint, border: `2px solid ${colors.border}` }}
      >
        <p className="text-xl font-bold" style={{ color: colors.accent }}>
          Coffee personality discovery
        </p>
        <p className="text-sm mt-2" style={{ color: colors.muted }}>
          Help members know themselves as coffee drinkers
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { source: "Previous manager notes", note: "\"Personality types for regulars?\"" },
          { source: "4 campaign files", note: "Social identity angle, never executed" },
          { source: "3 months of feedback", note: "\"Program has no personality\"" },
          { source: "Competitor research", note: "Dutch Bros identity = their edge" },
        ].map((item) => (
          <div
            key={item.source}
            className="rounded-xl p-4"
            style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
          >
            <p className="text-xs font-bold mb-1" style={{ color: colors.accent }}>✓ {item.source}</p>
            <p className="text-xs" style={{ color: colors.muted }}>{item.note}</p>
          </div>
        ))}
      </div>
      <Body>No competitor in the Pacific Northwest has done this. The window is open.</Body>
    </div>
  );
}

// ─── Slide 7 ─────────────────────────────────────────────────────────────────

function Slide7() {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <Tag>The solution</Tag>
        <SlideTitle>An Identity Layer on Top of Points</SlideTitle>
      </div>
      <div className="flex flex-col gap-3">
        {[
          {
            emoji: "🧠",
            title: "Coffee Personality Quiz",
            body: "Members discover their coffee identity — a reason to care, something to be.",
          },
          {
            emoji: "🎯",
            title: "Personality-Based Recommendations",
            body: "Drink suggestions, targeted rewards, and content tailored to who they are.",
          },
          {
            emoji: "📣",
            title: "Shareable Identity Archetypes",
            body: '"I\'m a Bold Adventurer" is worth posting. "I earned 20 points" is not.',
          },
          {
            emoji: "🔒",
            title: "No Structural Changes Needed",
            body: "Points system stays intact. This adds a personality layer on top — legal constraint respected.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex gap-4 items-start rounded-xl p-4"
            style={{ backgroundColor: colors.tint, border: `1px solid ${colors.border}` }}
          >
            <span className="text-2xl">{item.emoji}</span>
            <div>
              <p className="text-sm font-bold" style={{ color: colors.text }}>{item.title}</p>
              <p className="text-xs mt-0.5 leading-relaxed" style={{ color: colors.muted }}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Slide 8 ─────────────────────────────────────────────────────────────────

function Slide8() {
  return (
    <div className="flex flex-col gap-7 items-center text-center">
      <div>
        <Tag>Status: shipped</Tag>
        <SlideTitle>It&apos;s Already Built</SlideTitle>
        <Body>
          We didn&apos;t wait for budget approval. We built a working prototype to prove the concept.
        </Body>
      </div>
      <div
        className="w-full rounded-2xl p-8 flex flex-col items-center gap-5"
        style={{ backgroundColor: colors.tint, border: `2px solid ${colors.border}` }}
      >
        <p className="text-5xl">🚀</p>
        <div>
          <p className="text-sm font-semibold mb-1" style={{ color: colors.muted }}>Live at:</p>
          <a
            href="https://quiz-project-lovat-seven.vercel.app/presentation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold underline break-all"
            style={{ color: colors.accent }}
          >
            quiz-project-lovat-seven.vercel.app/presentation
          </a>
        </div>
        <div className="flex gap-6 text-center">
          <div>
            <p className="text-2xl font-bold" style={{ color: colors.text }}>2</p>
            <p className="text-xs" style={{ color: colors.muted }}>days to build</p>
          </div>
          <div style={{ borderLeft: `1px solid ${colors.border}` }} className="pl-6">
            <p className="text-2xl font-bold" style={{ color: colors.text }}>$0</p>
            <p className="text-xs" style={{ color: colors.muted }}>incremental cost</p>
          </div>
          <div style={{ borderLeft: `1px solid ${colors.border}` }} className="pl-6">
            <p className="text-2xl font-bold" style={{ color: colors.text }}>4</p>
            <p className="text-xs" style={{ color: colors.muted }}>personalities mapped</p>
          </div>
        </div>
      </div>
      <Body>
        Built within existing constraints. Ready to embed in the app today.
      </Body>
    </div>
  );
}

// ─── Slide 9 ─────────────────────────────────────────────────────────────────

function Slide9() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Tag>The archetypes</Tag>
        <SlideTitle>The 4 Personalities</SlideTitle>
        <Body>Each type maps to a real menu item — easy for baristas to reference at the counter.</Body>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          {
            emoji: "⚡",
            name: "Bold Adventurer",
            drink: "Double Espresso",
            desc: "Fast, intense, no-nonsense. Goes first, questions later.",
          },
          {
            emoji: "🌿",
            name: "Zen Minimalist",
            drink: "Black Coffee, Single Origin",
            desc: "Simple, clean, unhurried. Coffee as ritual.",
          },
          {
            emoji: "☕",
            name: "Artisan Snob",
            drink: "Pour-Over, Single Origin",
            desc: "Knows what they like. Will tell you about processing methods.",
          },
          {
            emoji: "🍫",
            name: "Indulgent Treat",
            drink: "Mocha with Whip",
            desc: "Coffee is dessert. More toppings, more joy.",
          },
        ].map((p) => (
          <div
            key={p.name}
            className="rounded-2xl p-4 flex flex-col gap-2"
            style={{ backgroundColor: colors.tint, border: `2px solid ${colors.border}` }}
          >
            <span className="text-3xl">{p.emoji}</span>
            <p className="text-sm font-bold" style={{ color: colors.text }}>{p.name}</p>
            <p className="text-xs font-semibold" style={{ color: colors.accent }}>{p.drink}</p>
            <p className="text-xs leading-relaxed" style={{ color: colors.muted }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Slide 10 ────────────────────────────────────────────────────────────────

function Slide10() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Tag>Days 1–30</Tag>
        <SlideTitle>Phase 1: Pilot</SlideTitle>
        <Body>5 volunteer locations. Low risk, high learning. Prove the concept before full rollout.</Body>
      </div>
      <div className="flex flex-col gap-3">
        {[
          { icon: "📍", label: "Locations", value: "5 pilot stores (volunteer managers)" },
          { icon: "🎯", label: "Completion target", value: "800 quiz completions" },
          { icon: "💰", label: "Estimated cost", value: "~$50 (printed barista reference cards)" },
          { icon: "📱", label: "Distribution", value: "QR code at register + barista mention" },
          { icon: "📊", label: "Success signal", value: "800+ completions, 25%+ share rate" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 px-4 py-3 rounded-xl"
            style={{ backgroundColor: colors.tint, border: `1px solid ${colors.border}` }}
          >
            <span className="text-xl w-7 text-center">{item.icon}</span>
            <div className="flex-1 flex items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: colors.muted }}>
                {item.label}
              </span>
              <span className="text-sm font-medium text-right" style={{ color: colors.text }}>
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        className="rounded-xl p-4 text-center text-sm font-medium"
        style={{ backgroundColor: colors.border, color: colors.muted }}
      >
        Gating on: pilot data review before full rollout decision
      </div>
    </div>
  );
}

// ─── Slide 11 ────────────────────────────────────────────────────────────────

function Slide11() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Tag>Days 31–60</Tag>
        <SlideTitle>Phase 2: Full Launch</SlideTitle>
        <Body>Pilot confirms the signal. Roll out to all 45 locations with app integration.</Body>
      </div>
      <div className="flex flex-col gap-3">
        {[
          { icon: "🏪", label: "Locations", value: "All 45 stores" },
          { icon: "📲", label: "App update", value: "Quiz embedded in Basecamp Rewards app" },
          { icon: "🎯", label: "Completions target", value: "5,000 total quiz completions" },
          { icon: "👥", label: "MAU target", value: "3,500+ monthly active users" },
          { icon: "📢", label: "Channels", value: "Email, in-app banner, social, barista brief" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 px-4 py-3 rounded-xl"
            style={{ backgroundColor: colors.tint, border: `1px solid ${colors.border}` }}
          >
            <span className="text-xl w-7 text-center">{item.icon}</span>
            <div className="flex-1 flex items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: colors.muted }}>
                {item.label}
              </span>
              <span className="text-sm font-medium text-right" style={{ color: colors.text }}>
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        className="rounded-xl p-4 text-center"
        style={{ backgroundColor: colors.tint, border: `1px solid ${colors.border}` }}
      >
        <p className="text-sm" style={{ color: colors.muted }}>
          App update only requires dev team bandwidth — no external cost.{" "}
          <span className="font-semibold" style={{ color: colors.accent }}>Already confirmed available.</span>
        </p>
      </div>
    </div>
  );
}

// ─── Slide 12 ────────────────────────────────────────────────────────────────

function Slide12() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Tag>Days 61–90</Tag>
        <SlideTitle>Phase 3: Sustain &amp; Measure</SlideTitle>
        <Body>Personality-powered engagement loops. First ROI report for leadership.</Body>
      </div>
      <div className="flex flex-col gap-3">
        {[
          {
            emoji: "📨",
            title: "Personality Campaigns",
            body: "Bold Adventurers get a new espresso launch. Zen Minimalists get single-origin drops. Right offer, right person.",
          },
          {
            emoji: "🔄",
            title: "Retake Mechanic",
            body: "\"Has your coffee personality evolved?\" prompt in-app — drives re-engagement from existing members.",
          },
          {
            emoji: "📊",
            title: "90-Day ROI Report",
            body: "Full report on MAU lift, retention delta, and revenue per quiz-taker vs. non-taker.",
          },
          {
            emoji: "🏪",
            title: "Barista Feedback Loop",
            body: "Store manager check-ins. What are customers saying? What's working at the counter?",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex gap-4 items-start rounded-xl p-4"
            style={{ backgroundColor: colors.tint, border: `1px solid ${colors.border}` }}
          >
            <span className="text-xl">{item.emoji}</span>
            <div>
              <p className="text-sm font-bold" style={{ color: colors.text }}>{item.title}</p>
              <p className="text-xs mt-0.5 leading-relaxed" style={{ color: colors.muted }}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Slide 13 ────────────────────────────────────────────────────────────────

function Slide13() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Tag>90-day targets</Tag>
        <SlideTitle>What We&apos;re Targeting at Day 90</SlideTitle>
        <Body>Conservative projections. Based on comparable loyalty program identity-layer rollouts.</Body>
      </div>
      <div
        className="rounded-2xl border-2 overflow-hidden"
        style={{ borderColor: colors.border }}
      >
        <div
          className="grid grid-cols-4 px-4 py-2 text-xs font-semibold uppercase tracking-widest"
          style={{ backgroundColor: colors.tint, color: colors.muted }}
        >
          <span>Metric</span>
          <span className="text-center">Baseline</span>
          <span className="text-center">90-Day Target</span>
          <span className="text-right">Gap Closed</span>
        </div>
        {[
          { label: "Monthly Active Users", baseline: "2,100", target: "4,500", gap: "~52%" },
          { label: "Avg Visits / Month", baseline: "2.3", target: "3.0", gap: "~41%" },
          { label: "Redemption Rate", baseline: "18%", target: "28%", gap: "~45%" },
          { label: "30-Day Retention", baseline: "31%", target: "47%", gap: "~55%" },
          { label: "Program NPS", baseline: "12", target: "30+", gap: "~40%" },
          { label: "ROI", baseline: "0.5×", target: "0.9×", gap: "~31%" },
        ].map((row, i) => (
          <div
            key={row.label}
            className="grid grid-cols-4 px-4 py-3 items-center"
            style={{
              backgroundColor: i % 2 === 0 ? colors.card : colors.tint,
              borderTop: `1px solid ${colors.border}`,
            }}
          >
            <span className="text-sm font-medium" style={{ color: colors.text }}>{row.label}</span>
            <span className="text-sm text-center font-bold" style={{ color: "#dc2626" }}>{row.baseline}</span>
            <span className="text-sm text-center font-bold" style={{ color: "#16a34a" }}>{row.target}</span>
            <span className="text-sm text-right" style={{ color: colors.accent }}>{row.gap}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-center" style={{ color: colors.faint }}>
        Full targets (MAU 8,000, ROI 1.8×) require 6–12 months. These are 90-day progress markers.
      </p>
    </div>
  );
}

// ─── Slide 14 ────────────────────────────────────────────────────────────────

function Slide14() {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <Tag>The ask</Tag>
        <SlideTitle>Three Things We Need</SlideTitle>
        <Body>
          The prototype is built. The plan is ready. We need three green lights to move.
        </Body>
      </div>
      <div className="flex flex-col gap-4">
        {[
          {
            number: "01",
            title: "Pilot Approval",
            ask: "Approve the 5-location pilot. Low risk — ~$50 cost, 30-day timeline, clear success criteria.",
            owner: "Dana + Store Ops",
          },
          {
            number: "02",
            title: "App Update Sign-Off",
            ask: "Authorize dev team to embed the quiz in the Basecamp Rewards app. They have bandwidth confirmed.",
            owner: "CEO / CTO",
          },
          {
            number: "03",
            title: "Barista Brief",
            ask: "Let us brief store managers so baristas can mention the quiz naturally at the counter.",
            owner: "Store Managers",
          },
        ].map((item) => (
          <div
            key={item.number}
            className="flex gap-5 items-start rounded-2xl p-5"
            style={{ backgroundColor: colors.tint, border: `2px solid ${colors.border}` }}
          >
            <span
              className="text-2xl font-bold shrink-0 w-10 text-center"
              style={{ color: colors.accent }}
            >
              {item.number}
            </span>
            <div className="flex-1">
              <p className="text-base font-bold mb-1" style={{ color: colors.text }}>{item.title}</p>
              <p className="text-sm leading-relaxed mb-2" style={{ color: colors.muted }}>{item.ask}</p>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: colors.border, color: colors.faint }}
              >
                Owner: {item.owner}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

const SLIDES = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
];

export default SLIDES;
