import React from 'react';
import { Shield, Gauge, Users2, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: TrendingUp,
    title: 'Growth Discipline',
    desc: 'Systematic underwriting focused on unit economics, velocity, and compounding retention.',
  },
  {
    icon: Shield,
    title: 'Downside Protection',
    desc: 'Structured entries, governance alignment, and rigorous risk controls to protect capital.',
  },
  {
    icon: Gauge,
    title: 'Acceleration Engine',
    desc: 'Operator network, GTM playbooks, and strategic partnerships to unlock non-linear growth.',
  },
  {
    icon: Users2,
    title: 'Founder-First',
    desc: 'We co-build with exceptional teams at the earliest stages of repeatable traction.',
  },
];

const ValuePillars = () => {
  return (
    <section className="relative w-full bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-['Manrope'] text-3xl font-bold sm:text-4xl">A Thesis Built for Asymmetric Upside</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              We target categories where technology moats, large reachable markets, and capital efficiency intersect.
            </p>
          </div>
          <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
            Target outcomes: 5x–15x in ~6 years
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-orange-400/40 hover:bg-white/[0.04]"
            >
              <div className="absolute inset-0 -z-[0] bg-gradient-to-tr from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 transition group-hover:opacity-100" />
              <p.icon className="h-6 w-6 text-orange-400" />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
