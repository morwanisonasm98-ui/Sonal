import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import type { ArtworkAsset } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioAssetContext';

interface ArtworkFrameProps {
  asset: ArtworkAsset;
  className?: string;
  fit?: 'contain' | 'cover';
  priority?: boolean;
  onClick?: () => void;
  showExpandHint?: boolean;
  compact?: boolean;
}

const ASPECT_CLASSES: Record<ArtworkAsset['aspectRatio'], string> = {
  '3/4': 'aspect-[3/4]',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '16/10': 'aspect-[16/10]',
  '4/5': 'aspect-[4/5]',
};

export const ArtworkFrame: React.FC<ArtworkFrameProps> = ({
  asset,
  className = '',
  fit = 'contain',
  priority = false,
  onClick,
  showExpandHint = true,
  compact = false,
}) => {
  const { imageOverrides } = usePortfolio();
  const [imgError, setImgError] = useState(false);

  const overrideSrc = imageOverrides[asset.id];
  const activeSrc = overrideSrc || asset.src;
  const shouldRenderPlaceholder = imgError && !overrideSrc;

  const aspectClass = ASPECT_CLASSES[asset.aspectRatio] || 'aspect-[4/3]';

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      aria-label={onClick ? `Inspect ${asset.title}` : undefined}
      className={`group relative overflow-hidden border border-[#D9D2C6] bg-[#FFFFFF] dark:border-[#35312C] dark:bg-[#22201D] ${aspectClass} ${
        onClick
          ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F1EA] dark:focus-visible:ring-offset-[#191816]'
          : ''
      } ${className}`}
    >
      {!shouldRenderPlaceholder ? (
        <div className="relative h-full w-full bg-[#FAF8F4] dark:bg-[#1B1A17]">
          <img
            src={activeSrc}
            alt={asset.alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => {
              if (!overrideSrc) {
                setImgError(true);
              }
            }}
            className={`h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.025] ${
              fit === 'cover' ? 'object-cover' : 'object-contain p-2'
            }`}
          />
          {onClick && showExpandHint && (
            <div className="pointer-events-none absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center border border-[#D9D2C6]/80 bg-[#FFFFFF]/90 text-[#252525] opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:border-[#35312C] dark:bg-[#191816]/90 dark:text-[#F4F1EA]">
              <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
          )}
        </div>
      ) : (
        <div className="relative flex h-full w-full flex-col justify-between bg-[#FAF8F4] p-4 transition-colors duration-300 group-hover:bg-[#F7F4EE] dark:bg-[#22201D] dark:group-hover:bg-[#282521] sm:p-5">
          {/* Subtle architectural registration marks */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 border border-dashed border-[#D9D2C6]/80 dark:border-[#35312C]"
          />

          <div className="relative z-10 flex items-start justify-between gap-3">
            <span className="font-mono text-[11px] tracking-[0.12em] text-[#7D6A54] tabular-nums dark:text-[#B59F84]">
              {asset.plateCode}
            </span>
            <span className="font-mono text-[11px] text-[#6B665F] dark:text-[#A39C92]">
              {asset.pdfReference}
            </span>
          </div>

          <div className="relative z-10 my-auto py-2 text-center">
            {asset.accentTag && (
              <p className="font-editorial mb-1.5 text-sm italic text-[#A28B70] dark:text-[#B59F84]">
                “{asset.accentTag}”
              </p>
            )}
            <p
              className={`font-heading font-semibold tracking-tight text-[#252525] dark:text-[#F4F1EA] ${
                compact ? 'text-sm' : 'text-base sm:text-lg'
              }`}
            >
              {asset.title}
            </p>
            {!compact && (
              <p className="mx-auto mt-1.5 max-w-[34ch] text-xs leading-relaxed text-[#5C5852] dark:text-[#B8B1A6]">
                {asset.compositionNotes}
              </p>
            )}

            {asset.swatches && asset.swatches.length > 0 && (
              <div className="mt-3 flex items-center justify-center gap-2">
                {asset.swatches.map((hex) => (
                  <span
                    key={hex}
                    title={hex}
                    className="h-3.5 w-3.5 border border-[#252525]/15 dark:border-white/20"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="relative z-10 flex items-center justify-between gap-2 border-t border-[#D9D2C6]/70 pt-2.5 dark:border-[#35312C]">
            <span className="truncate font-mono text-[10.5px] text-[#6B665F] dark:text-[#A39C92]">
              {asset.recommendedFilename}
            </span>
            {onClick && showExpandHint && (
              <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-[#7D6A54] transition-colors group-hover:text-[#252525] dark:text-[#B59F84] dark:group-hover:text-[#F4F1EA]">
                <Maximize2 className="h-3 w-3" aria-hidden="true" />
                <span>Inspect</span>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
