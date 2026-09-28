import Image from 'next/image';
import Link from "next/link";
import React from 'react';

const Banner = () => {
    return (
  <section className="my-6 overflow-hidden rounded-2xl border border-[#292c34] bg-[#15171d] sm:my-8">
      <div className="grid min-h-[430px] items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
        {/* Content */}
        <div>
          <p className="mb-4 text-[10px] font-bold tracking-[0.18em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-display max-w-2xl text-4xl font-black uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <Link
            href="#library"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#ccff00] px-5 py-3 text-xs font-black text-black transition hover:scale-[1.02] hover:bg-[#bdf000]"
          >
            <span>▦</span>
            BROWSE WORKOUTS
          </Link>
        </div>

        {/* Image */}
        <div className="relative mx-auto h-[280px] w-full max-w-[420px] lg:h-[360px]">
          <Image
            src="/banner.png"
            alt="Workout illustration"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
    );
};

export default Banner;