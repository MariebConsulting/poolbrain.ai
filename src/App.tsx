import React from "react";
import logo from "./assets/poolbrain-logo.svg";

const SIGNALS = [
  "Field-trained intelligence",
  "Private deployment model",
  "SignalFlow-compatible",
  "Pool industry specific",
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_38%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.10),_transparent_28%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:44px_44px]" />

      <header className="relative z-10 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="PoolBrain.ai"
              className="h-11 w-auto opacity-95 drop-shadow-[0_0_22px_rgba(34,211,238,0.28)]"
            />
          </a>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-500/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Private Deployment
            </span>
            <a
              href="mailto:Falken@poolbrain.ai?subject=PoolBrain"
              className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              Inquire
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-6 md:py-24">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-300/75">
                Industry-Specific Intelligence Layer
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
                Known by the people
                <span className="block text-slate-400">who would need it.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                PoolBrain.ai is not a general AI product with pool language
                pasted on top. It is a private industry model shaped around
                field conditions, operational memory, material behavior, failure
                patterns, and decision-making inside the swimming pool trade.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">
                It is not broadly offered. It is deployed selectively where the
                underlying workflows, data, and people justify it.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:Falken@poolbrain.ai?subject=PoolBrain%20Deployment"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300"
                >
                  Request Access
                </a>
                <a
                  href="#signal"
                  className="rounded-full border border-white/15 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  View Signal
                </a>
              </div>
            </div>

            <div className="flex items-end">
              <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_50px_rgba(2,6,23,0.9)]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500">
                    POOLBRAIN CORE
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400/80">
                    Active
                  </span>
                </div>

                <div className="space-y-5 p-5">
                  <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4">
                    <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-cyan-300/70">
                      Status
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      Domain-trained. Privately deployed. Continuously refined at
                      the workflow layer.
                    </p>
                  </div>

                  <div className="space-y-2">
                    {SIGNALS.map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl border border-white/8 bg-slate-900/70 px-4 py-3"
                      >
                        <span className="text-xs uppercase tracking-[0.16em] text-slate-400">
                          {item}
                        </span>
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.65)]" />
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-4">
                    <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500">
                      Visibility
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Not publicly documented in full. Not sold as commodity
                      software.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="signal" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-300/70">
                  What it is
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  A specialized model layer for a specific industry with
                  specific physics, specific constraints, and specific economic
                  consequences.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-300/70">
                  What it is not
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  Not a chatbot wrapper. Not generic SaaS. Not broad-market AI
                  theater.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-300/70">
                  Why it matters
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  Because in this industry, bad information compounds fast:
                  schedule drift, coating failure, warranty noise, service loss,
                  and preventable field mistakes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
                  Quiet Proof
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                  The model becomes more valuable the less you need to explain
                  it.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-5">
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500">
                    Builders
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Surface conditions, sequencing, install memory, field risk.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-5">
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500">
                    Service
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Recurring incidents, equipment behavior, route intelligence,
                    operational memory.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-5">
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500">
                    Manufacturers
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Failure pattern visibility, training gaps, field feedback,
                    product reality.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-5">
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500">
                    Operators
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Decision support where conditions change faster than policy
                    manuals do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
            <div className="rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.045] p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300/75">
                Deployment Model
              </p>

              <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                    PoolBrain is placed,
                    <span className="block text-slate-300">not mass marketed.</span>
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                    The right implementation is selective. Data, workflows, and
                    operational maturity matter. When there is a fit, PoolBrain
                    becomes the intelligence layer behind a more specific system.
                  </p>
                </div>

                <a
                  href="mailto:Falken@poolbrain.ai?subject=PoolBrain%20Placement"
                  className="inline-flex rounded-full border border-white/15 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  Discuss Placement
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
          <p>PoolBrain.ai</p>
          <div className="flex flex-wrap items-center gap-4">
            <span>Industry-specific model layer</span>
            <span className="text-slate-700">/</span>
            <span>Private deployment</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;