import React, { useState } from 'react';
import { SELECTED_PROJECTS, type PortfolioProject } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { RevealSection } from './RevealSection';

interface ProjectGalleryProps {
  onOpenProject: (project: PortfolioProject) => void;
}

type FilterOption = 'all' | 'advertising' | 'typography' | 'branding';

const FILTER_TABS: { id: FilterOption; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'advertising', label: 'Advertising & Social' },
  { id: 'typography', label: 'Typography' },
  { id: 'branding', label: 'Branding & Logos' },
];

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');

  const visibleProjects =
    activeFilter === 'all'
      ? SELECTED_PROJECTS
      : SELECTED_PROJECTS.filter((p) => p.filterGroup === activeFilter);

  return (
    <section
      id="work"
      className="border-b border-[#D9D2C6] bg-[#FFFFFF] py-20 lg:py-28 dark:border-[#35312C] dark:bg-[#22201D]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <RevealSection>
          <div className="flex flex-col justify-between gap-6 border-b border-[#D9D2C6] pb-8 lg:flex-row lg:items-end dark:border-[#35312C]">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                04 · Selected Work
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[#252525] [text-wrap:balance] sm:text-4xl dark:text-[#F4F1EA]">
                Selected Design &amp; Visual Communication Projects
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5C5852] dark:text-[#B8B1A6]">
                A curated presentation of advertising campaigns, social awareness initiatives, experimental typography, and brand identity studies from Sonal Morwani’s portfolio.
              </p>
            </div>

            {/* Interactive Filter Controls */}
            <div
              role="tablist"
              aria-label="Filter portfolio projects"
              className="flex flex-wrap items-center gap-1 border border-[#D9D2C6] bg-[#F4F1EA] p-1 self-start lg:self-auto dark:border-[#35312C] dark:bg-[#191816]"
            >
              {FILTER_TABS.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`min-h-[36px] px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#252525] text-[#F4F1EA] dark:bg-[#F4F1EA] dark:text-[#191816]'
                        : 'text-[#5C5852] hover:text-[#252525] dark:text-[#B8B1A6] dark:hover:text-[#F4F1EA]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenProject={onOpenProject}
              />
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
