import React, { useEffect, useState } from "react";
import logo from "./assets/poolbrain-logo.svg";

const LIVE_LINES = [
  "[ 07:12 ] Fine-tuning · New Marriott hotel spec added to pool industry model.",
  "[ 07:13 ] Field signal · Coating cure patterns updated from 4 recent jobs.",
  "[ 07:14 ] Supply drift · Weather and politics causing increase in raw steel prices",
  "[ 07:15 ] Service intel · Heater failures clustering on one install pattern.",
  "[ 07:16 ] Weather guardrail · 3 jobs flagged for dew point risk tomorrow."
];

type RoleKey =
  | "builders"
  | "service"
  | "manufacturers"
  | "distributors"
  | "facilities";

const ROLE_CONFIG: Record<
  RoleKey,
  { label: string; title: string; bullets: string[]; example: string }
> = {
  builders: {
    label: "Builders",
    title: "When Marieb deploys PoolBrain for builders & renovators:",
    bullets: [
      "The model remembers every job, surface, and product you've ever installed.",
      "Live coat / no-coat guardrails blend weather, substrate history, and product specs.",
      "Risk signals surface earlier than any whiteboard or spreadsheet."
    ],
    example:
      `"Show me every project in the last 3 years where we saw blistering on quartz — and what fixes actually worked."`
  },
  service: {
    label: "Service Companies",
    title: "When Marieb deploys PoolBrain for service teams:",
    bullets: [
      "Visit notes, photos, and chemistry logs become a searchable memory for each pool.",
      "The model suggests upgrades and interventions based on patterns, not guesswork.",
      "Routes can be prioritized by risk and value, not just geography."
    ],
    example:
      `"Which 40 pools in our book are most likely to need a resurfacing conversation this season?"`
  },
  manufacturers: {
    label: "Manufacturers",
    title: "When Marieb deploys PoolBrain for manufacturers & brands:",
    bullets: [
      "Field performance tracked at the facility, not just when warranty claims roll in.",
      "Automate workflow such as designs, elevating company positions.",
      "You see where training solves more than chemistry — and vice versa."
    ],
    example:
      `"Where do we see failure patterns that point to training gaps instead of product issues?"`
  },
  distributors: {
    label: "Distributors",
    title: "When Marieb deploys PoolBrain for distributors & supply:",
    bullets: [
      "Demand is mapped by region, product line, and season using your own history.",
      "The model watches lead time drift and unusual order patterns for early warning.",
      "You can share curated signals with dealers as value, not as static spreadsheets."
    ],
    example:
      `"Which 25 dealers are most exposed if resin lead times slip by two weeks?"`
  },
  facilities: {
    label: "Facilities",
    title: "When Marieb deploys PoolBrain for operators & facilities:",
    bullets: [
      "Water quality, incidents, and maintenance become a live timeline per body of water.",
      "The model can tell you whether a problem is isolated or a repeating pattern.",
      "New staff can lean on a searchable operational memory instead of one person’s head."
    ],
    example:
      `"Show me the last 12 incidents in our main pool that look like this photo — and how we resolved them."`
  }
};

// ---------- Example dashboard pieces ----------

type Example = {
  title: string;
  query: string;
  answer: string;
};

const EXAMPLES: Example[] = [
  {
    title: "Builder Workflow",
    query: "Can we coat today?",
    answer:
      "Yes. Surface 67°F · Dew Point 51°F · RH 42% · Within product spec. Next 4 hours are optimal; after 2pm, RH rises above 70%."
  },
  {
    title: "Manufacturer Insight",
    query: "Where are warranty claims trending?",
    answer:
      "Region 3 · 26% rise in aggregate delamination over 90 days. 71% share prep notes mentioning 'humid & rushed cure'. Recommend targeted training for 3 applicators."
  },
  {
    title: "Service Intelligence",
    query: "Which pools are most likely to call us back this month?",
    answer:
      "Flagged 37 pools: repeated low alkalinity, heater cycling issues, or recurring bather-load complaints. Top 10 represent ~62% of likely callbacks."
  },
  {
    title: "Supply & Procurement Signal",
    query: "What happens if quartz lead time slips by two weeks?",
    answer:
      "18 active jobs impacted in Weeks 3–5. 5 commercial projects at risk of schedule penalty. Suggest pulling forward two POs and shifting one crew to resurfacing backlog."
  }
];

const ExampleCard: React.FC<Example> = ({ title, query, answer }) => (
  <div className="rounded-2xl border border-slate-700 bg-slate-950/95 p-5">
    <p className="text-xs font-mono text-cyan-300/90">{title}</p>
    <p className="mt-2 text-sm italic text-slate-200">“{query}”</p>
    <p className="mt-3 text-xs text-emerald-300 leading-relaxed">{answer}</p>
  </div>
);

const App: React.FC = () => {
  const [liveIndex, setLiveIndex] = useState(0);
  const [activeRole, setActiveRole] = useState<RoleKey>("builders");

  // for the dashboard examples
  const [showExamples, setShowExamples] = useState(false);
  const [exampleIndex, setExampleIndex] = useState(0);

  // live telemetry ticker
  useEffect(() => {
    const id = setInterval(() => {
      setLiveIndex((prev) => (prev + 1) % LIVE_LINES.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  // cycle example dashboard when visible
  useEffect(() => {
    if (!showExamples) return;
    const id = setInterval(() => {
      setExampleIndex((prev) => (prev + 1) % EXAMPLES.length);
    }, 3500);
    return () => clearInterval(id);
  }, [showExamples]);

  const liveLines = [
    LIVE_LINES[(liveIndex + LIVE_LINES.length - 1) % LIVE_LINES.length],
    LIVE_LINES[liveIndex]
  ];

  const role = ROLE_CONFIG[activeRole];
  const activeExample = EXAMPLES[exampleIndex];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* soft radial glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,235,0.25),_transparent_55%)] opacity-80" />

      {/* NAV */}
      <header className="relative border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="PoolBrain.ai logo"
              className="h-12 w-auto drop-shadow-[0_0_18px_rgba(34,211,238,0.55)]"
            />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-300 hidden sm:inline">
              Continuously fine-tuned pool industry model
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#what" className="hover:text-cyan-300">
              What is PoolBrain?
            </a>
            <a href="#how" className="hover:text-cyan-300">
              How it works
            </a>
            <a href="#roles" className="hover:text-cyan-300">
              For your role
            </a>
            <a href="#marieb" className="hover:text-cyan-300">
              Marieb + PoolBrain
            </a>
            <a href="#engage" className="hover:text-cyan-300">
              Engagement
            </a>
            <a
              href="mailto:Falken@poolbrain.ai?subject=PoolBrain%20Deployment"
              className="rounded-full border border-cyan-400/70 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.28)] hover:bg-cyan-500/20"
            >
              DEPLOY
            </a>
          </nav>
        </div>
      </header>

      <main className="relative">
        {/* HERO */}
        <section className="relative border-b border-slate-800/60">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:px-6 md:py-20">
            {/* Left: text */}
            <div className="flex-1 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
                In-Field AI · SignalFlow · Pools
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                The continuously fine-tuned
                <span className="block text-cyan-300">
                  AI model for the swimming pool industry.
                </span>
              </h1>
              <p className="max-w-xl text-sm text-slate-300/90 sm:text-base">
                PoolBrain.ai is the evolving model behind Marieb Consulting
                engagements. We train it on the physics, chemistry, logistics,
                and workflows of the pool ecosystem — then fine-tune a private
                instance on your jobs, crews, and customers.
              </p>
              <p className="max-w-xl text-xs text-slate-400">
                You don’t “sign up” for PoolBrain. You get it embedded into your
                operation when you work with Marieb.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:Falken@poolbrain.ai?subject=Talk%20about%20deploying%20PoolBrain"
                  className="rounded-full bg-cyan-500 px-6 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:bg-cyan-400"
                >
                  Talk about deploying PoolBrain
                </a>
                <button
                  type="button"
                  onClick={() => setShowExamples((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-200 hover:border-cyan-400/70"
                >
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  {showExamples
                    ? "Hide sample dashboard"
                    : "Watch the model evolve (sample signals)"}
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
                <span>• Builders & Renovators</span>
                <span>• Service & Maintenance</span>
                <span>• Manufacturers & Distributors</span>
                <span>• Facilities & Operators</span>
              </div>
            </div>

            {/* Right: live console */}
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/90 shadow-[0_0_35px_rgba(15,23,42,0.9)]">
                <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/70 px-4 py-2">
                  <span className="text-xs font-mono text-slate-400">
                    MODEL TELEMETRY · POOLBRAIN CORE
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    STATUS: Fine-tuning active [OK]
                  </span>
                </div>
                <div className="bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_60%)] px-4 py-4">
                  <div className="space-y-2 text-[11px] font-mono text-slate-300">
                    {liveLines.map((line, idx) => (
                      <div
                        key={`${line}-${idx}`}
                        className={
                          idx === liveLines.length - 1
                            ? "text-emerald-300"
                            : "text-slate-500"
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-slate-800 pt-3 text-[10px] font-mono text-slate-400">
                    When Marieb runs new projects, PoolBrain learns. Your
                    private instance inherits those upgrades — your data stays
                    yours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SAMPLE DASHBOARD (toggles on button click) */}
        {showExamples && (
          <section className="border-b border-slate-800/60 bg-slate-950/90">
            <div className="mx-auto max-w-6xl px-4 pb-10 pt-4 md:px-6 md:pt-6">
              <div className="rounded-2xl border border-slate-700 bg-slate-950/95 shadow-[0_0_30px_rgba(15,23,42,0.95)]">
                <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-slate-400">
                      SAMPLE DEPLOYMENT DASHBOARD
                    </span>
                    <div className="hidden gap-1 rounded-full border border-slate-700 bg-slate-950/70 p-0.5 text-[10px] text-slate-400 sm:flex">
                      <span className="rounded-full bg-slate-800 px-2 py-0.5">
                        Signals
                      </span>
                      <span className="px-2 py-0.5">Workflows</span>
                      <span className="px-2 py-0.5">Insights</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    Cycling examples every ~3.5s
                  </span>
                </div>
                <div className="grid gap-4 p-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
                  <div>
                    <ExampleCard
                      title={activeExample.title}
                      query={activeExample.query}
                      answer={activeExample.answer}
                    />
                  </div>
                  <div className="space-y-3 text-[11px] text-slate-300">
                    <p className="font-mono text-cyan-300/90">
                      What you're seeing
                    </p>
                    <p className="text-xs text-slate-300">
                      These are examples of how a PoolBrain instance answers
                      real questions from builders, service teams,
                      manufacturers, and distributors — using your fields,
                      products, and history.
                    </p>
                    <p className="text-[11px] text-slate-400">
                      In a live deployment, this panel would sit on top of your
                      own jobs, customers, and SKUs — not dummy text.
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        setExampleIndex(
                          (prev) => (prev + 1) % EXAMPLES.length
                        )
                      }
                      className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/90 px-3 py-1.5 text-[11px] font-medium text-slate-100 hover:border-cyan-400/70"
                    >
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Next example
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* WHAT IS POOLBRAIN */}
        <section
          className="border-b border-slate-800/60 bg-slate-950/80"
          id="what"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
            <div className="grid gap-10 md:grid-cols-[1.4fr_minmax(0,1fr)] md:items-start">
              <div>
                <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                  PoolBrain is the shared industry brain.
                  <span className="block text-slate-300">
                    Your implementation is the private nervous system.
                  </span>
                </h2>
                <p className="mt-4 max-w-xl text-sm text-slate-300/90">
                  We train PoolBrain on the physics, chemistry, hydraulics,
                  logistics, and workflows that define the swimming pool
                  ecosystem: builders, service, manufacturers, distributors, buying groups, and
                  operators. When you work with Marieb, we don’t start from a
                  generic model — we bring PoolBrain into your world and tune it
                  on your history.
                </p>
              </div>
              <div className="space-y-4 text-sm">
                <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Industry Layer (shared)
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Continuously fine-tuned on cross-project patterns and
                    curated public / technical sources. This is the “pool
                    industry brain”.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Company Layer (private)
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Adapted to your jobs, crews, surfaces, SKUs, and customers.
                    Your operational data is isolated and never shared with
                    other companies.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Workflow Layer (custom)
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Consulting projects define the copilots, dashboards, and
                    automations your team actually touches day-to-day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-b border-slate-800/60" id="how">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              How Marieb uses PoolBrain in your world.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/90">
                  01 · Start from PoolBrain
                </p>
                <h3 className="mt-3 text-sm font-semibold text-slate-100">
                  A pool-specific base model.
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  We begin with the PoolBrain core: a model already steeped in
                  pool construction, service, coatings, compliance, and supply
                  dynamics.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/90">
                  02 · Tune on your reality
                </p>
                <h3 className="mt-3 text-sm font-semibold text-slate-100">
                  A private instance for your company.
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Past jobs, photos, invoices, failure reports, service logs,
                  and supply history shape a version of PoolBrain that knows how
                  your business actually works.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/90">
                  03 · Deploy into workflows
                </p>
                <h3 className="mt-3 text-sm font-semibold text-slate-100">
                  Copilots, dashboards, automations.
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  We plug your instance into day-to-day work: field copilots,
                  coating window guardrails, service triage, supply signals,
                  executive briefs, and more.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/90">
                  04 · Evolve together
                </p>
                <h3 className="mt-3 text-sm font-semibold text-slate-100">
                  The model keeps getting sharper.
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  As Marieb ships projects across the industry, PoolBrain’s core
                  improves. Your private instance can adopt upgrades while your
                  data stays isolated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROLE SWITCHER */}
        <section
          className="border-b border-slate-800/60 bg-slate-950/80"
          id="roles"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                  One model, tuned differently
                  <span className="block text-cyan-300">
                    for every link in the chain.
                  </span>
                </h2>
                <p className="mt-3 text-sm text-slate-300">
                  Choose your role to see how a PoolBrain deployment actually
                  shows up for you.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(Object.keys(ROLE_CONFIG) as RoleKey[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveRole(key)}
                      className={[
                        "rounded-full border px-3 py-1 text-xs font-medium",
                        activeRole === key
                          ? "border-cyan-400 bg-cyan-500/10 text-cyan-200"
                          : "border-slate-700 bg-slate-900/60 text-slate-300 hover:border-cyan-400/80"
                      ].join(" ")}
                    >
                      {ROLE_CONFIG[key].label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="rounded-2xl border border-slate-700 bg-slate-950/90 p-6 shadow-[0_0_25px_rgba(15,23,42,0.9)]">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/80">
                    Role view · Powered by PoolBrain instance
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-50">
                    {role.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-[6px] h-1 w-1 rounded-full bg-cyan-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900/80 p-3 text-xs text-slate-300">
                    <span className="font-mono text-cyan-300/90">
                      Example query
                    </span>
                    <p className="mt-1 italic">{role.example}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARIEB + POOLBRAIN SECTION */}
        <section className="border-b border-slate-800/60" id="marieb">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                  Marieb is the team.
                  <span className="block text-slate-300">
                    PoolBrain.ai is the model they bring.
                  </span>
                </h2>
                <p className="mt-4 text-sm text-slate-300/90">
                  Marieb Consulting scopes your use cases, designs SignalFlow,
                  handles integrations, and works with your people in the field.
                  PoolBrain.ai is the continuously fine-tuned pool model that
                  powers those systems.
                </p>
              </div>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div className="rounded-xl border border-slate-700 bg-slate-950/90 p-4">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Marieb Consulting
                  </h3>
                  <ul className="mt-2 space-y-1 text-xs text-slate-300">
                    <li>• Maps your jobs, data, and tools into SignalFlow.</li>
                    <li>• Designs and deploys workflows and copilots.</li>
                    <li>• Handles change management and training.</li>
                    <li>• Acts as your in-house AI & ops engineering shop.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-950/90 p-4">
                  <h3 className="text-sm font-semibold text-slate-100">
                    PoolBrain.ai
                  </h3>
                  <ul className="mt-2 space-y-1 text-xs text-slate-300">
                    <li>• Continuously fine-tuned pool industry model.</li>
                    <li>• Private instance adapted to your company.</li>
                    <li>• Powers copilots, dashboards, guardrails, briefs.</li>
                    <li>• Evolves as the industry and your business do.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENGAGEMENT / CTA */}
        <section
          className="border-b border-slate-800/60 bg-slate-950/80"
          id="engage"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Start with one pilot. Let the brain grow from there.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              PoolBrain is a long-term advantage, but we prove it with short,
              concrete projects. We aim for “paid for itself” before we talk
              about scaling.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-950/90 p-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/90">
                  01 · Signal Mapping (Week 1–2)
                </p>
                <p className="mt-2 text-sm text-slate-100">
                  We map your jobs, tools, and data sources into a simple
                  SignalFlow sketch and choose 1–2 workflows with clear ROI.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/90 p-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/90">
                  02 · Pilot Deployment (Week 3–8)
                </p>
                <p className="mt-2 text-sm text-slate-100">
                  We fine-tune your PoolBrain instance and deploy workflows like
                  “Can we coat today?” or “Top 10 job risks this week.”
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/90 p-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/90">
                  03 · Scale or Pause (Week 9+)
                </p>
                <p className="mt-2 text-sm text-slate-100">
                  If the pilot hits, we expand. If not, you keep a better map of
                  your operations and we part as friends.
                </p>
              </div>
            </div>
            <div
              id="contact"
              className="mt-10 flex flex-wrap items-center gap-4 text-sm"
            >
              <a
                href="mailto:Falken@poolbrain.ai?subject=PoolBrain%20Deployment%20Conversation"
                className="rounded-full bg-cyan-500 px-6 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:bg-cyan-400"
              >
                Email about a deployment
              </a>
              <p className="text-slate-300">
                Or include PoolBrain in your next{" "}
                <span className="text-cyan-300">Marieb Consulting</span> SOW.
              </p>
            </div>
          </div>
        </section>

        {/* SIMPLE FAQ STUB */}
        <section className="border-b border-slate-800/60" id="faq">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              FAQ
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-700 bg-slate-950/90 p-5">
                <h3 className="text-sm font-semibold text-slate-100">
                  Do we buy PoolBrain as a standalone product?
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  No. PoolBrain is the continuously fine-tuned model behind
                  Marieb Consulting. You access it through engagements where we
                  design and deploy workflows inside your operation.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/90 p-5">
                <h3 className="text-sm font-semibold text-slate-100">
                  Does our data stay our data?
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Yes. Each company’s instance is isolated. We improve the core
                  model with patterns and techniques, not with your identifiable
                  operational data.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/90 p-5">
                <h3 className="text-sm font-semibold text-slate-100">
                  Do we need new hardware or sensors?
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Not to start. PoolBrain can launch on the data you already
                  have — photos, notes, spreadsheets, project tools. Extra
                  sensors can plug into the same brain later.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/90 p-5">
                <h3 className="text-sm font-semibold text-slate-100">
                  What’s a realistic first workflow?
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Coating window guardrails, failure pattern search, service
                  call triage, or weekly executive briefs are common starting
                  points. We’ll pick something concrete and measurable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/60 bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
          <p>PoolBrain.ai · A continuously fine-tuned In-Field AI model.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.marieb.consulting"
              className="hover:text-cyan-300"
            >
              marieb.consulting
            </a>
            <a href="#faq" className="hover:text-cyan-300">
              FAQ
            </a>
            <a href="#" className="hover:text-cyan-300">
              Privacy
            </a>
            <a href="#" className="hover:text-cyan-300">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
