import React from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROFILE, SELECTED_PROJECTS } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioAssetContext';
import { ArtworkFrame } from './ArtworkFrame';

export const HeroSection: React.FC = () => {
  const { openLightbox } = usePortfolio();
  const previewWork = SELECTED_PROJECTS[0].coverAsset;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="border-b border-[#D9D2C6] bg-[#F4F1EA] pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20 dark:border-[#35312C] dark:bg-[#191816]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Main Editorial Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Column */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                {PORTFOLIO_PROFILE.heroLabel}
              </p>

              <h1 className="font-heading mt-4 text-[clamp(2.5rem,5vw,4.25rem)] font-bold leading-[1.06] tracking-tight text-[#252525] [text-wrap:balance] dark:text-[#F4F1EA]">
                {PORTFOLIO_PROFILE.name}
              </h1>

              <p className="mt-3 text-base font-medium text-[#5C5852] sm:text-lg dark:text-[#CFC8BC]">
                {PORTFOLIO_PROFILE.title}
              </p>

              <div className="my-7 h-px w-16 bg-[#A28B70] dark:bg-[#B59F84]" />

              <p className="font-editorial max-w-2xl text-2xl leading-snug font-normal text-[#252525] italic [text-wrap:balance] sm:text-3xl dark:text-[#F4F1EA]">
                {PORTFOLIO_PROFILE.heroStatement}
              </p>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4A4640] sm:text-[17px] dark:text-[#C5BEB3]">
                {PORTFOLIO_PROFILE.heroSupport}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => scrollTo('work')}
                className="inline-flex min-h-[44px] items-center gap-2 bg-[#252525] px-6 py-3 text-sm font-semibold text-[#F4F1EA] transition-colors duration-200 hover:bg-[#A28B70] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] whitespace-nowrap shrink-0 dark:bg-[#F4F1EA] dark:text-[#191816] dark:hover:bg-[#B59F84] dark:hover:text-[#191816]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('academics')}
                className="inline-flex min-h-[44px] items-center gap-2 border border-[#252525] bg-transparent px-5 py-3 text-sm font-semibold text-[#252525] transition-colors duration-200 hover:bg-[#252525] hover:text-[#F4F1EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] whitespace-nowrap shrink-0 dark:border-[#D9D2C6]/60 dark:text-[#F4F1EA] dark:hover:border-[#F4F1EA] dark:hover:bg-[#F4F1EA] dark:hover:text-[#191816]"
              >
                <span>View Academic Profile</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex min-h-[44px] items-center gap-1.5 px-3 py-3 text-sm font-semibold text-[#7D6A54] underline decoration-[#A28B70]/50 underline-offset-4 transition-colors hover:text-[#252525] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] whitespace-nowrap shrink-0 dark:text-[#B59F84] dark:hover:text-[#F4F1EA]"
              >
                <span>Contact Me</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Visual Composition: Portrait + Subtle Cropped Artwork Preview */}
          <div className="lg:col-span-5">
            <div className="grid h-full grid-cols-12 gap-4">
              <div className="col-span-7 flex flex-col">
                <ArtworkFrame
                  asset={PORTFOLIO_PROFILE.portraitAsset}
                  fit="cover"
                  priority
                  onClick={() => openLightbox([PORTFOLIO_PROFILE.portraitAsset, previewWork], 0)}
                  className="h-full w-full"
                />
                <p className="mt-2 text-xs text-[#6B665F] dark:text-[#A39C92]">
                  Sonal Morwani · Jaipur
                </p>
              </div>

              <div className="col-span-5 flex flex-col justify-end">
                <div className="border border-[#D9D2C6] bg-[#FFFFFF] p-3 dark:border-[#35312C] dark:bg-[#22201D]">
                  <p className="mb-2 text-[11px] font-medium tracking-wider text-[#7D6A54] uppercase dark:text-[#B59F84]">
                    Selected Preview
                  </p>
                  <ArtworkFrame
                    asset={previewWork}
                    fit="cover"
                    priority
                    compact
                    onClick={() => openLightbox([previewWork, ...SELECTED_PROJECTS[0].assets.slice(1)], 0)}
                  />
                  <p className="mt-2.5 text-xs font-semibold text-[#252525] dark:text-[#F4F1EA]">
                    {SELECTED_PROJECTS[0].shortTitle}
                  </p>
                  <p className="text-[11px] text-[#6B665F] dark:text-[#A39C92]">
                    {SELECTED_PROJECTS[0].pdfPages}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Identity & Credentials Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-[#D9D2C6] pt-7 sm:grid-cols-2 lg:grid-cols-4 dark:border-[#35312C]">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#7D6A54] uppercase dark:text-[#B59F84]">
              Visual Identity
            </p>
            <p className="font-heading mt-1 text-sm font-semibold text-[#252525] dark:text-[#F4F1EA]">
              {PORTFOLIO_PROFILE.brandPractice}
            </p>
            <p className="mt-0.5 text-xs text-[#5C5852] dark:text-[#B8B1A6]">
              {PORTFOLIO_PROFILE.brandTagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-[#7D6A54] uppercase dark:text-[#B59F84]">
              Doctoral Research
            </p>
            <p className="font-heading mt-1 text-sm font-semibold text-[#252525] dark:text-[#F4F1EA]">
              PhD in Visual Art (Pursuing)
            </p>
            <p className="mt-0.5 text-xs text-[#5C5852] dark:text-[#B8B1A6]">
              IIS (Deemed to be University), Jaipur
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-[#7D6A54] uppercase dark:text-[#B59F84]">
              Academic Foundation
            </p>
            <p className="font-heading mt-1 text-sm font-semibold text-[#252525] dark:text-[#F4F1EA]">
              MVA &amp; BVA — Applied Art
            </p>
            <p className="mt-0.5 text-xs text-[#5C5852] dark:text-[#B8B1A6]">
              Rajasthan School of Art, Jaipur
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-[#7D6A54] uppercase dark:text-[#B59F84]">
              Based In
            </p>
            <p className="font-heading mt-1 text-sm font-semibold text-[#252525] dark:text-[#F4F1EA]">
              Jaipur, Rajasthan
            </p>
            <p className="mt-0.5 text-xs text-[#5C5852] dark:text-[#B8B1A6]">
              Design Practice &amp; Art Education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
