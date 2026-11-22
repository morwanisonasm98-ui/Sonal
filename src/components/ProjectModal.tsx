import React, { useEffect } from 'react';
import { Upload, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { PortfolioProject } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioAssetContext';
import { ArtworkFrame } from './ArtworkFrame';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { openLightbox, setAssetOverride, imageOverrides, clearAssetOverride } = usePortfolio();

  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  const handleFilePreview = (assetId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setAssetOverride(assetId, objectUrl);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#191816]/80 p-4 backdrop-blur-xs sm:p-6 lg:p-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-[#D9D2C6] bg-[#F4F1EA] text-[#252525] shadow-2xl dark:border-[#35312C] dark:bg-[#191816] dark:text-[#F4F1EA]"
          >
            {/* Sticky Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-[#D9D2C6] bg-[#F4F1EA]/95 px-6 py-4 backdrop-blur-xs sm:px-8 dark:border-[#35312C] dark:bg-[#191816]/95">
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold tracking-wider text-[#7D6A54] uppercase dark:text-[#B59F84]">
                  Project {project.number} · {project.categories.join(' · ')}
                </p>
                <h2
                  id="project-modal-title"
                  className="font-heading truncate text-lg font-bold sm:text-xl"
                >
                  {project.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project case study"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[#D9D2C6] bg-[#FFFFFF] text-[#252525] transition-colors hover:border-[#252525] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] dark:border-[#35312C] dark:bg-[#22201D] dark:text-[#F4F1EA] dark:hover:border-[#F4F1EA]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-10 p-6 sm:p-8 lg:p-10">
              {/* Project Brief Grid */}
              <div className="grid grid-cols-1 gap-8 border-b border-[#D9D2C6] pb-8 lg:grid-cols-12 dark:border-[#35312C]">
                <div className="space-y-4 lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6B665F] dark:text-[#A39C92]">
                    <span className="font-semibold text-[#252525] dark:text-[#F4F1EA]">
                      {project.statusLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.pdfPages}</span>
                    {project.message && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-editorial italic text-[#7D6A54] dark:text-[#B59F84]">
                          Message: “{project.message}”
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-base leading-relaxed text-[#252525] dark:text-[#F4F1EA]">
                    {project.overview}
                  </p>
                  <p className="text-sm leading-relaxed text-[#5C5852] dark:text-[#B8B1A6]">
                    {project.extendedContext}
                  </p>
                </div>

                <div className="border border-[#D9D2C6] bg-[#FFFFFF] p-5 lg:col-span-5 dark:border-[#35312C] dark:bg-[#22201D]">
                  <p className="text-xs font-semibold tracking-wider text-[#7D6A54] uppercase dark:text-[#B59F84]">
                    Creative Elements
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-[#3B3833] dark:text-[#D7D1C7]">
                    {project.creativeElements.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span aria-hidden="true" className="text-[#A28B70]">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project Artwork Plates */}
              <div>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-lg font-bold">
                      Artwork Plates &amp; Applications
                    </h3>
                    <p className="text-xs text-[#6B665F] dark:text-[#A39C92]">
                      Click any artwork plate to view in fullscreen lightbox. You can also test extracted PDF artwork files locally in this session.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {project.assets.map((asset, idx) => (
                    <div
                      key={asset.id}
                      className="flex flex-col border border-[#D9D2C6] bg-[#FFFFFF] p-4 dark:border-[#35312C] dark:bg-[#22201D]"
                    >
                      <ArtworkFrame
                        asset={asset}
                        fit="contain"
                        onClick={() => openLightbox(project.assets, idx)}
                      />
                      <div className="mt-4 flex flex-col gap-2">
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="font-heading text-sm font-bold">{asset.title}</h4>
                          <span className="font-mono text-[11px] text-[#7D6A54] dark:text-[#B59F84]">
                            {asset.pdfReference}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-[#5C5852] dark:text-[#B8B1A6]">
                          {asset.caption}
                        </p>

                        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-[#D9D2C6]/60 pt-2.5 dark:border-[#35312C]">
                          <label className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-[#7D6A54] transition-colors hover:text-[#252525] dark:text-[#B59F84] dark:hover:text-[#F4F1EA]">
                            <Upload className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Preview Local Artwork</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="sr-only"
                              onChange={(e) => handleFilePreview(asset.id, e)}
                            />
                          </label>

                          {imageOverrides[asset.id] && (
                            <button
                              type="button"
                              onClick={() => clearAssetOverride(asset.id)}
                              className="text-xs text-[#6B665F] underline hover:text-[#252525] dark:text-[#A39C92] dark:hover:text-[#F4F1EA]"
                            >
                              Reset Preview
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
