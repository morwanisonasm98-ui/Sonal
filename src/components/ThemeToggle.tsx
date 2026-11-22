import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioAssetContext';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = usePortfolio();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[#D9D2C6] bg-[#FFFFFF] text-[#252525] transition-colors duration-200 hover:border-[#A28B70] hover:text-[#A28B70] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] dark:border-[#35312C] dark:bg-[#22201D] dark:text-[#F4F1EA] dark:hover:border-[#B59F84] dark:hover:text-[#B59F84]"
    >
      {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
};
