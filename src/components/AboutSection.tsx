import React from 'react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioAssetContext';
import { ArtworkFrame } from './ArtworkFrame';
import { RevealSection } from './RevealSection';

export const AboutSection: React.FC = () => {
  const { openLightbox } = usePortfolio();

  return (
    <section
      id="about"
      className="border-b border-[#D9D2C6] bg-[#FFFFFF] py-20 lg:py-28 dark:border-[#35312C] dark:bg-[#22201D]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <RevealSection>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Section Index & Profile Photograph */}
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                02 · About
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold leading-tight tracking-tight text-[#252525] [text-wrap:balance] sm:text-4xl dark:text-[#F4F1EA]">
                {PORTFOLIO_PROFILE.aboutHeading}
              </h2>

              <div className="mt-8 max-w-[260px]">
                <ArtworkFrame
                  asset={PORTFOLIO_PROFILE.aboutPortraitAsset}
                  fit="cover"
                  compact
                  onClick={() => openLightbox([PORTFOLIO_PROFILE.aboutPortraitAsset], 0)}
                />
                <div className="mt-3 flex items-center justify-between text-xs text-[#6B665F] dark:text-[#A39C92]">
                  <span>{PORTFOLIO_PROFILE.name}</span>
                  <span>Jaipur, India</span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Bio Prose */}
            <div className="flex flex-col justify-center lg:col-span-8">
              <div className="max-w-2xl space-y-6 text-base leading-[1.75] text-[#3B3833] sm:text-[17px] dark:text-[#D7D1C7]">
                {PORTFOLIO_PROFILE.aboutParagraphs.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? 'text-lg font-medium leading-relaxed text-[#252525] dark:text-[#F4F1EA]' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 border-t border-[#D9D2C6] pt-8 sm:grid-cols-3 dark:border-[#35312C]">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#7D6A54] uppercase dark:text-[#B59F84]">
                    Primary Discipline
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-[#252525] dark:text-[#F4F1EA]">
                    Applied Art &amp; Visual Communication
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#7D6A54] uppercase dark:text-[#B59F84]">
                    Current Research
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-[#252525] dark:text-[#F4F1EA]">
                    PhD in Visual Art · IIS University
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#7D6A54] uppercase dark:text-[#B59F84]">
                    Location
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-[#252525] dark:text-[#F4F1EA]">
                    {PORTFOLIO_PROFILE.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
