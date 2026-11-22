import React from 'react';
import { LOGO_STUDIES } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioAssetContext';
import { ArtworkFrame } from './ArtworkFrame';
import { RevealSection } from './RevealSection';

export const LogoGallery: React.FC = () => {
  const { openLightbox } = usePortfolio();
  const logoAssets = LOGO_STUDIES.map((l) => l.asset);

  return (
    <section
      id="branding"
      className="border-b border-[#D9D2C6] bg-[#FFFFFF] py-20 lg:py-28 dark:border-[#35312C] dark:bg-[#22201D]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <RevealSection>
          <div className="flex flex-col justify-between gap-6 border-b border-[#D9D2C6] pb-8 md:flex-row md:items-end dark:border-[#35312C]">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                06 · Branding &amp; Logo Design
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[#252525] [text-wrap:balance] sm:text-4xl dark:text-[#F4F1EA]">
                Brand Identity &amp; Logo Studies
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#5C5852] dark:text-[#B8B1A6]">
              Exploratory logo studies and identity concepts extracted from Portfolio PDF Pages 10 &amp; 11. Presented strictly as conceptual design studies rather than official brand commissions.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {LOGO_STUDIES.map((study, idx) => (
              <article
                key={study.id}
                className="flex flex-col border border-[#D9D2C6] bg-[#FAF8F4] dark:border-[#35312C] dark:bg-[#191816]"
              >
                <div className="p-5 pb-0 sm:p-6 sm:pb-0">
                  <ArtworkFrame
                    asset={study.asset}
                    fit="contain"
                    onClick={() => openLightbox(logoAssets, idx)}
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#7D6A54] dark:text-[#B59F84]">
                      <span className="font-mono font-semibold tabular-nums">
                        {study.number}
                      </span>
                      <span>{study.statusNote}</span>
                    </div>

                    <h3 className="font-heading mt-2 text-xl font-bold text-[#252525] dark:text-[#F4F1EA]">
                      {study.brandName}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#4A4640] dark:text-[#C5BEB3]">
                      {study.description}
                    </p>
                  </div>

                  {/* Verified Colour Palette Swatches */}
                  <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[#D9D2C6]/80 pt-4 dark:border-[#35312C]">
                    <span className="text-[11px] font-semibold tracking-wider text-[#6B665F] uppercase dark:text-[#A39C92]">
                      Colour Study
                    </span>
                    <div className="flex flex-wrap items-center gap-3">
                      {study.paletteLabels.map((swatch) => (
                        <div key={swatch.name} className="flex items-center gap-1.5 text-xs text-[#4A4640] dark:text-[#C5BEB3]">
                          <span
                            className="h-3.5 w-3.5 border border-[#252525]/20 dark:border-white/20"
                            style={{ backgroundColor: swatch.hex }}
                            aria-hidden="true"
                          />
                          <span>{swatch.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
