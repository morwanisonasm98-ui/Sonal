import React from 'react';
import { TYPOGRAPHY_WORKS } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioAssetContext';
import { ArtworkFrame } from './ArtworkFrame';
import { RevealSection } from './RevealSection';

export const TypographyGallery: React.FC = () => {
  const { openLightbox } = usePortfolio();
  const typographyAssets = TYPOGRAPHY_WORKS.map((w) => w.asset);

  return (
    <section
      id="typography"
      className="border-b border-[#D9D2C6] bg-[#F4F1EA] py-20 lg:py-28 dark:border-[#35312C] dark:bg-[#191816]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <RevealSection>
          <div className="flex flex-col justify-between gap-6 border-b border-[#D9D2C6] pb-8 md:flex-row md:items-end dark:border-[#35312C]">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                05 · Typography &amp; Illustration
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[#252525] [text-wrap:balance] sm:text-4xl dark:text-[#F4F1EA]">
                Creative Typography
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#5C5852] dark:text-[#B8B1A6]">
              Typographic experiments exploring dimensional lettering, visual depth, perspective, halftone texture, and portrait-integrated compositions (Portfolio PDF Pages 7–9).
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TYPOGRAPHY_WORKS.map((work, idx) => (
              <figure key={work.id} className="flex flex-col">
                <ArtworkFrame
                  asset={work.asset}
                  fit="contain"
                  onClick={() => openLightbox(typographyAssets, idx)}
                />
                <figcaption className="mt-4 border-t border-[#D9D2C6] pt-3 dark:border-[#35312C]">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-heading text-base font-bold text-[#252525] dark:text-[#F4F1EA]">
                      <span className="mr-2 font-mono text-xs font-medium text-[#7D6A54] tabular-nums dark:text-[#B59F84]">
                        {work.number}
                      </span>
                      {work.title}
                    </h3>
                    <span className="shrink-0 text-xs text-[#6B665F] dark:text-[#A39C92]">
                      {work.technique}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5C5852] dark:text-[#B8B1A6]">
                    {work.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
