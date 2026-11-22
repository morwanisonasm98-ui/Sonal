import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ArtworkAsset } from '../data/portfolioData';

interface PortfolioContextValue {
  isDark: boolean;
  toggleTheme: () => void;
  imageOverrides: Record<string, string>;
  setAssetOverride: (assetId: string, objectUrl: string) => void;
  clearAssetOverride: (assetId: string) => void;
  lightboxItems: ArtworkAsset[];
  lightboxIndex: number;
  isLightboxOpen: boolean;
  openLightbox: (items: ArtworkAsset[], initialIndex?: number) => void;
  closeLightbox: () => void;
  setLightboxIndex: React.Dispatch<React.SetStateAction<number>>;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = sessionStorage.getItem('sonal-portfolio-theme');
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
    } catch {
      // Ignore storage access errors in restricted frames
    }
    return false;
  });

  const [imageOverrides, setImageOverrides] = useState<Record<string, string>>({});
  const [lightboxItems, setLightboxItems] = useState<ArtworkAsset[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      sessionStorage.setItem('sonal-portfolio-theme', isDark ? 'dark' : 'light');
    } catch {
      // Ignore storage errors
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const setAssetOverride = (assetId: string, objectUrl: string) => {
    setImageOverrides((prev) => {
      if (prev[assetId]) {
        URL.revokeObjectURL(prev[assetId]);
      }
      return { ...prev, [assetId]: objectUrl };
    });
  };

  const clearAssetOverride = (assetId: string) => {
    setImageOverrides((prev) => {
      const next = { ...prev };
      if (next[assetId]) {
        URL.revokeObjectURL(next[assetId]);
        delete next[assetId];
      }
      return next;
    });
  };

  const openLightbox = (items: ArtworkAsset[], initialIndex = 0) => {
    setLightboxItems(items);
    setLightboxIndex(initialIndex);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <PortfolioContext.Provider
      value={{
        isDark,
        toggleTheme,
        imageOverrides,
        setAssetOverride,
        clearAssetOverride,
        lightboxItems,
        lightboxIndex,
        isLightboxOpen,
        openLightbox,
        closeLightbox,
        setLightboxIndex,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export function usePortfolio(): PortfolioContextValue {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return ctx;
}
