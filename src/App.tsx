/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import type { PortfolioProject } from './data/portfolioData';
import { PortfolioProvider } from './context/PortfolioAssetContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ProjectGallery } from './components/ProjectGallery';
import { TypographyGallery } from './components/TypographyGallery';
import { LogoGallery } from './components/LogoGallery';
import { VisualExplorationsGallery } from './components/VisualExplorationsGallery';
import { AcademicTimeline } from './components/AcademicTimeline';
import { PublicationsSection } from './components/PublicationsSection';
import { AwardsSection } from './components/AwardsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ImageLightbox } from './components/ImageLightbox';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-[#F4F1EA] text-[#252525] transition-colors duration-200 dark:bg-[#191816] dark:text-[#F4F1EA]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#252525] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#F4F1EA]"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <ExpertiseSection />
          <ProjectGallery onOpenProject={setSelectedProject} />
          <TypographyGallery />
          <LogoGallery />
          <VisualExplorationsGallery />
          <AcademicTimeline />
          <PublicationsSection />
          <AwardsSection />
          <ContactSection />
        </main>

        <Footer />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
        <ImageLightbox />
      </div>
    </PortfolioProvider>
  );
}
