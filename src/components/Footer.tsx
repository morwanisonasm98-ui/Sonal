import React from 'react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#D9D2C6] bg-[#F4F1EA] py-8 text-xs text-[#5C5852] dark:border-[#35312C] dark:bg-[#191816] dark:text-[#A39C92]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-10">
        <p>© 2026 {PORTFOLIO_PROFILE.name}. All Rights Reserved.</p>
        <p>{PORTFOLIO_PROFILE.title}.</p>
      </div>
    </footer>
  );
};
