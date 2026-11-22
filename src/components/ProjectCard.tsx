import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioAssetContext';
import { ArtworkFrame } from './ArtworkFrame';

interface ProjectCardProps {
  project: PortfolioProject;
  onOpenProject: (project: PortfolioProject) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenProject,
}) => {
  const { openLightbox } = usePortfolio();
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex flex-col border border-[#D9D2C6] bg-[#FFFFFF] transition-colors duration-200 hover:border-[#A28B70] dark:border-[#35312C] dark:bg-[#22201D] dark:hover:border-[#B59F84]">
      {/* Artwork Stage */}
      <div className="border-b border-[#D9D2C6] bg-[#FAF8F4] p-4 sm:p-5 dark:border-[#35312C] dark:bg-[#1B1A17]">
        <ArtworkFrame
          asset={project.coverAsset}
          fit="contain"
          onClick={() => openLightbox(project.assets, 0)}
        />

        {project.assets.length > 1 && (
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {project.assets.slice(0, 3).map((asset, idx) => (
              <ArtworkFrame
                key={asset.id}
                asset={asset}
                fit="cover"
                compact
                showExpandHint={false}
                onClick={() => openLightbox(project.assets, idx)}
                className="!aspect-[4/3]"
              />
            ))}
          </div>
        )}
      </div>

      {/* Editorial Metadata & Overview */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          {/* Unboxed Metadata Line (Zero Pills) */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#7D6A54] dark:text-[#B59F84]">
            <span className="font-mono font-semibold tabular-nums">{project.number}</span>
            <span aria-hidden="true">·</span>
            <span>{project.categories.join(' · ')}</span>
          </div>

          <h3 className="font-heading mt-3 text-2xl font-bold tracking-tight text-[#252525] [text-wrap:balance] dark:text-[#F4F1EA]">
            {project.title}
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6B665F] dark:text-[#A39C92]">
            <span>{project.statusLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.pdfPages}</span>
            {project.message && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-editorial italic text-[#252525] dark:text-[#F4F1EA]">
                  Message: “{project.message}”
                </span>
              </>
            )}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[#4A4640] dark:text-[#C5BEB3]">
            {project.overview}
          </p>

          {/* Expandable Project Details */}
          {expanded && (
            <div className="mt-4 border-t border-[#D9D2C6]/70 pt-4 dark:border-[#35312C]">
              <p className="text-sm leading-relaxed text-[#4A4640] dark:text-[#C5BEB3]">
                {project.extendedContext}
              </p>
              <p className="mt-3 text-xs font-semibold tracking-wider text-[#7D6A54] uppercase dark:text-[#B59F84]">
                Creative Elements
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-1.5 text-xs text-[#4A4640] sm:grid-cols-2 dark:text-[#C5BEB3]">
                {project.creativeElements.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden="true" className="text-[#A28B70]">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#D9D2C6]/70 pt-5 dark:border-[#35312C]">
          <button
            type="button"
            onClick={() => onOpenProject(project)}
            className="inline-flex min-h-[40px] items-center gap-2 bg-[#252525] px-4 py-2 text-xs font-semibold tracking-wide text-[#F4F1EA] transition-colors duration-200 hover:bg-[#A28B70] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] whitespace-nowrap shrink-0 dark:bg-[#F4F1EA] dark:text-[#191816] dark:hover:bg-[#B59F84]"
          >
            <span>Explore Project</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="inline-flex min-h-[40px] items-center gap-1.5 px-2 text-xs font-medium text-[#5C5852] transition-colors hover:text-[#252525] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] whitespace-nowrap shrink-0 dark:text-[#B8B1A6] dark:hover:text-[#F4F1EA]"
          >
            <span>{expanded ? 'Hide Details' : 'Project Elements'}</span>
            {expanded ? (
              <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
