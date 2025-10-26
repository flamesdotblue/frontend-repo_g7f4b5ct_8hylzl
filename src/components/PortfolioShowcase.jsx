import React from 'react';
import { Building2 } from 'lucide-react';

const ventures = [
  {
    name: 'NovaPay',
    sector: 'Fintech Infrastructure',
    thesis: 'Real-time payouts and treasury rails for marketplaces',
    growth: 'Series A trajectory • 9x YoY GPV',
  },
  {
    name: 'ClearStack',
    sector: 'Enterprise SaaS',
    thesis: 'Workflow automation for compliance-heavy operations',
    growth: 'Net revenue retention 140%+',
  },
  {
    name: 'VectorIQ',
    sector: 'Applied AI',
    thesis: 'Agentic copilots for field services and logistics',
    growth: 'Pilot-to-production in 120 days',
  },
  {
    name: 'InfraSphere',
    sector: 'Digital Infrastructure',
    thesis: 'Edge compute fabric for latency-sensitive apps',
    growth: 'Unit economics breakeven in 8 months',
  },
];

const PortfolioShowcase = () => {
  return (
    <section id="portfolio" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-['Manrope'] text-3xl font-bold sm:text-4xl">Selective, High-Conviction Ownership</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              A concentrated portfolio where each position compounds on product velocity, efficient distribution, and clear value capture.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ventures.map((v) => (
            <div key={v.name} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20">
                  <Building2 className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{v.name}</h3>
                  <p className="text-xs text-white/60">{v.sector}</p>
                </div>
              </div>
              <p className="text-sm text-white/80">{v.thesis}</p>
              <div className="mt-4 inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs text-orange-300">
                {v.growth}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
