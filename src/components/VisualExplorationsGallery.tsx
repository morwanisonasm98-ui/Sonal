import React from 'react';
import { VISUAL_EXPLORATIONS } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioAssetContext';
import { ArtworkFrame } from './ArtworkFrame';
import { RevealSection } from './RevealSection';

export const VisualExplorationsGallery: React.FC = () => {
  const { openLightbox } = usePortfolio();

  return (
    <section
      id="visual-explorations"
      className="border-b border-[#D9D2C6] bg-[#F4F1EA] py-20 lg:py-28 dark:border-[#35312C] dark:bg-[#191816]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <RevealSection>
          <div className="flex flex-col justify-between gap-6 border-b border-[#D9D2C6] pb-8 md:flex-row md:items-end dark:border-[#35312C]">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                Visual Archive
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[#252525] [text-wrap:balance] sm:text-4xl dark:text-[#F4F1EA]">
                A Collection of Visual Explorations
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#5C5852] dark:text-[#B8B1A6]">
              Digital illustrations, advertising compositions, typographic studies, and logo explorations presented in their original proportions. Click any plate to inspect in fullscreen with keyboard navigation.
            </p>
          </div>

          {/* Aspect-Preserving Masonry Columns */}
          <div className="mt-12 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
            {VISUAL_EXPLORATIONS.map((asset, idx) => (
              <div key={`${asset.id}-${idx}`} className="break-inside-avoid">
                <ArtworkFrame
                  asset={asset}
                  fit="contain"
                  onClick={() => openLightbox(VISUAL_EXPLORATIONS, idx)}
                />
                <div className="mt-2.5 flex items-baseline justify-between gap-3 px-0.5">
                  <p className="text-xs font-semibold text-[#252525] dark:text-[#F4F1EA]">
                    {asset.title}
                  </p>
                  <span className="shrink-0 text-[11px] text-[#6B665F] dark:text-[#A39C92]">
                    {asset.discipline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
