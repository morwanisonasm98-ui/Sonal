import React from 'react';
import { AWARDS_LIST, EXHIBITIONS_LIST } from '../data/portfolioData';
import { RevealSection } from './RevealSection';

export const AwardsSection: React.FC = () => {
  return (
    <section
      id="recognition"
      className="border-b border-[#D9D2C6] bg-[#FFFFFF] py-16 lg:py-20 dark:border-[#35312C] dark:bg-[#22201D]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <RevealSection>
          <div className="border-b border-[#D9D2C6] pb-6 dark:border-[#35312C]">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
              Recognition &amp; Exhibitions
            </p>
            <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight text-[#252525] sm:text-3xl dark:text-[#F4F1EA]">
              Creative Recognition &amp; Participation
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Awards */}
            <div className="lg:col-span-5">
              <h3 className="font-heading text-xs font-bold tracking-[0.14em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                Awards
              </h3>
              <ul className="mt-4 divide-y divide-[#D9D2C6] border-t border-b border-[#D9D2C6] dark:divide-[#35312C] dark:border-[#35312C]">
                {AWARDS_LIST.map((award) => (
                  <li key={award.id} className="py-4">
                    <p className="text-sm font-semibold text-[#252525] dark:text-[#F4F1EA]">
                      {award.title}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-[#6B665F] dark:text-[#A39C92]">
                      <span>{award.organizer}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{award.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Selected Exhibitions & Activities */}
            <div className="lg:col-span-7">
              <h3 className="font-heading text-xs font-bold tracking-[0.14em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                Selected Exhibitions &amp; Activities
              </h3>
              <ul className="mt-4 divide-y divide-[#D9D2C6]/80 border-t border-b border-[#D9D2C6] dark:divide-[#35312C]/80 dark:border-[#35312C]">
                {EXHIBITIONS_LIST.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-baseline justify-between gap-4 py-3 text-sm"
                  >
                    <span className="text-[#3B3833] dark:text-[#D7D1C7]">
                      {item.title}
                    </span>
                    <span className="shrink-0 font-mono text-xs text-[#7D6A54] tabular-nums dark:text-[#B59F84]">
                      {item.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
