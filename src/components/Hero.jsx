import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, LineChart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/dE8ryMHkF0EMjFf3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,140,0,0.15),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-orange-400" />
          Early-Stage Ownership • High-Growth Ventures
        </div>
        <h1 className="font-['Manrope'] text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Build a Portfolio of Breakout Companies
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          We partner with founders at the inflection point—where product-market fit, scalable economics,
          and disciplined execution converge—targeting 5x to 15x capital growth over a 6-year horizon.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-medium text-black transition hover:bg-orange-400"
          >
            Explore Portfolio
            <LineChart className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 font-medium text-white/90 transition hover:bg-white/10"
          >
            Speak with Us
          </a>
        </div>
        <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
          <div>
            Focus: Fintech • Enterprise SaaS • Applied AI • Digital Infrastructure
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
