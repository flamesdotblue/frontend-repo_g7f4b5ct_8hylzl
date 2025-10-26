import React from 'react';
import { Mail, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-neutral-950 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-['Manrope'] text-2xl font-bold sm:text-3xl">Invest at the Inflection Point</h3>
              <p className="mt-2 max-w-2xl text-white/70">
                If you are a founder seeking a strategic capital partner—or an LP exploring focused exposure to early-stage
                breakouts—let’s connect.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@growthfund.example"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-medium text-black transition hover:bg-orange-400"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10"
              >
                <Calendar className="h-4 w-4" /> Book a Call
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">
          This site is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
