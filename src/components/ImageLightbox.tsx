import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Upload, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioAssetContext';
import { ArtworkFrame } from './ArtworkFrame';

export const ImageLightbox: React.FC = () => {
  const {
    lightboxItems,
    lightboxIndex,
    isLightboxOpen,
    closeLightbox,
    setLightboxIndex,
    setAssetOverride,
  } = usePortfolio();

  const currentAsset = lightboxItems[lightboxIndex];

  useEffect(() => {
    if (!isLightboxOpen || lightboxItems.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % lightboxItems.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, lightboxItems.length, closeLightbox, setLightboxIndex]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!currentAsset) return;
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setAssetOverride(currentAsset.id, objectUrl);
  };

  return (
    <AnimatePresence>
      {isLightboxOpen && currentAsset && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Fullscreen view: ${currentAsset.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={closeLightbox}
          className="fixed inset-0 z-[60] flex flex-col justify-between bg-[#141311]/95 p-4 text-[#F4F1EA] sm:p-6 lg:p-8"
        >
          {/* Top Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between gap-4 border-b border-white/10 pb-3"
          >
            <div className="min-w-0">
              <p className="font-mono text-xs text-[#B59F84] tabular-nums">
                {currentAsset.plateCode} · {lightboxIndex + 1} / {lightboxItems.length}
              </p>
              <p className="font-heading truncate text-sm font-semibold sm:text-base">
                {currentAsset.title}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <label className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 border border-white/20 bg-white/5 px-3.5 text-xs font-medium text-[#F4F1EA] transition-colors hover:bg-white/15">
                <Upload className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">Load Image Preview</span>
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close fullscreen lightbox"
                className="inline-flex h-10 w-10 items-center justify-center border border-white/25 bg-white/10 text-[#F4F1EA] transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B59F84]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Center Artwork Canvas */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative mx-auto my-4 flex w-full max-w-4xl flex-1 items-center justify-center overflow-hidden"
          >
            {lightboxItems.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length
                  )
                }
                aria-label="Previous artwork"
                className="absolute left-0 z-10 inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-[#141311]/80 text-[#F4F1EA] transition-colors hover:bg-[#A28B70] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B59F84] sm:left-2"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
            )}

            <div className="w-full max-w-2xl px-12 sm:px-16">
              <ArtworkFrame
                asset={currentAsset}
                fit="contain"
                showExpandHint={false}
                className="max-h-[68vh] w-full"
              />
            </div>

            {lightboxItems.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) => (prev + 1) % lightboxItems.length)
                }
                aria-label="Next artwork"
                className="absolute right-0 z-10 inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-[#141311]/80 text-[#F4F1EA] transition-colors hover:bg-[#A28B70] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B59F84] sm:right-2"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Bottom Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col justify-between gap-2 border-t border-white/10 pt-3 text-xs text-[#C5BEB3] sm:flex-row sm:items-center"
          >
            <p>{currentAsset.caption}</p>
            <p className="font-mono text-[11px] text-[#B59F84]">
              {currentAsset.pdfReference} · Use Arrow keys or Esc
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
