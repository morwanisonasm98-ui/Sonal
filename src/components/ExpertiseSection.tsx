import React from 'react';
import { DESIGN_EXPERTISE, SOFTWARE_TOOLS } from '../data/portfolioData';
import { RevealSection } from './RevealSection';

export const ExpertiseSection: React.FC = () => {
  return (
    <section
      id="expertise"
      className="border-b border-[#D9D2C6] bg-[#F4F1EA] py-20 lg:py-28 dark:border-[#35312C] dark:bg-[#191816]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <RevealSection>
          <div className="flex flex-col justify-between gap-6 border-b border-[#D9D2C6] pb-8 md:flex-row md:items-end dark:border-[#35312C]">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                03 · Design Expertise
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[#252525] [text-wrap:balance] sm:text-4xl dark:text-[#F4F1EA]">
                Areas of Creative Practice
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#5C5852] dark:text-[#B8B1A6]">
              Multidisciplinary foundations bridging advertising concepts, brand identity, typography, digital illustration, and visual communication.
            </p>
          </div>

          {/* 6 Areas of Practice Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DESIGN_EXPERTISE.map((area) => (
              <article
                key={area.id}
                className="flex flex-col justify-between border border-[#D9D2C6] bg-[#FFFFFF] p-7 transition-colors duration-200 hover:border-[#A28B70] dark:border-[#35312C] dark:bg-[#22201D] dark:hover:border-[#B59F84]"
              >
                <div>
                  <span className="font-mono text-xs font-medium tracking-widest text-[#7D6A54] tabular-nums dark:text-[#B59F84]">
                    {area.number}
                  </span>
                  <h3 className="font-heading mt-4 text-xl font-semibold tracking-tight text-[#252525] dark:text-[#F4F1EA]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5C5852] dark:text-[#C5BEB3]">
                    {area.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Software & Digital Tools Grid (No Percentages or Progress Bars) */}
          <div className="mt-16 border border-[#D9D2C6] bg-[#FFFFFF] p-7 sm:p-9 dark:border-[#35312C] dark:bg-[#22201D]">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                  Software &amp; Digital Tools
                </p>
                <h3 className="font-heading mt-2 text-2xl font-bold tracking-tight text-[#252525] dark:text-[#F4F1EA]">
                  Design &amp; Production Suite
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5C5852] dark:text-[#B8B1A6]">
                  Tools used across layout publication, vector identity design, raster illustration, and academic documentation.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-8">
                  <div>
                    <p className="mb-3 text-xs font-semibold tracking-wider text-[#6B665F] uppercase dark:text-[#A39C92]">
                      Design &amp; Visual Communication
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {SOFTWARE_TOOLS.designTools.map((tool) => (
                        <div
                          key={tool}
                          className="border border-[#D9D2C6] bg-[#FAF8F4] px-4 py-3 text-sm font-medium text-[#252525] dark:border-[#35312C] dark:bg-[#191816] dark:text-[#F4F1EA]"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-semibold tracking-wider text-[#6B665F] uppercase dark:text-[#A39C92]">
                      Additional Tools
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {SOFTWARE_TOOLS.additionalTools.map((tool) => (
                        <div
                          key={tool}
                          className="border border-[#D9D2C6]/80 bg-[#FAF8F4]/60 px-4 py-3 text-sm font-medium text-[#4A4640] dark:border-[#35312C]/80 dark:bg-[#191816]/60 dark:text-[#C5BEB3]"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
