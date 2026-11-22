import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'work', label: 'Work' },
  { id: 'academics', label: 'Academics' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const scrollPosition = window.scrollY + 140;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        isScrolled
          ? 'border-b border-[#D9D2C6] bg-[#F4F1EA]/95 backdrop-blur-sm dark:border-[#35312C] dark:bg-[#191816]/95'
          : 'border-b border-[#D9D2C6]/60 bg-[#F4F1EA]/90 dark:border-[#35312C]/60 dark:bg-[#191816]/90'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-10">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="font-heading text-lg font-bold tracking-tight text-[#252525] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] dark:text-[#F4F1EA]"
        >
          Sonal Morwani
        </a>

        {/* Zone 2: Desktop Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] ${
                  isActive
                    ? 'text-[#252525] dark:text-[#F4F1EA]'
                    : 'text-[#5C5852] hover:text-[#252525] dark:text-[#B8B1A6] dark:hover:text-[#F4F1EA]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute right-0 -bottom-0.5 left-0 h-[1.5px] bg-[#A28B70] dark:bg-[#B59F84]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Theme Toggle + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('work');
            }}
            className="hidden h-10 items-center justify-center bg-[#252525] px-5 text-xs font-semibold tracking-wide text-[#F4F1EA] transition-colors duration-200 hover:bg-[#A28B70] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] whitespace-nowrap shrink-0 sm:inline-flex dark:bg-[#F4F1EA] dark:text-[#191816] dark:hover:bg-[#B59F84] dark:hover:text-[#191816]"
          >
            Explore My Work
          </a>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center border border-[#D9D2C6] bg-[#FFFFFF] text-[#252525] transition-colors hover:border-[#A28B70] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] lg:hidden dark:border-[#35312C] dark:bg-[#22201D] dark:text-[#F4F1EA]"
          >
            {mobileOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav-menu"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-[#D9D2C6] bg-[#F4F1EA] px-4 py-5 lg:hidden dark:border-[#35312C] dark:bg-[#191816]"
          >
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`flex min-h-[44px] items-center justify-between border-b border-[#D9D2C6]/60 px-2 text-base font-medium dark:border-[#35312C]/60 ${
                      isActive
                        ? 'text-[#A28B70] dark:text-[#B59F84]'
                        : 'text-[#252525] dark:text-[#F4F1EA]'
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}
              <div className="pt-4">
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('work');
                  }}
                  className="flex min-h-[44px] w-full items-center justify-center bg-[#252525] px-5 text-sm font-semibold text-[#F4F1EA] dark:bg-[#F4F1EA] dark:text-[#191816]"
                >
                  Explore My Work
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
