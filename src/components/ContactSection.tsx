import React from 'react';
import { ArrowUp, Download, Mail, Phone } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';
import { downloadVerifiedCV } from '../utils/cvExport';
import { RevealSection } from './RevealSection';

export const ContactSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="bg-[#F4F1EA] py-20 lg:py-28 dark:bg-[#191816]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <RevealSection>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Heading & Supporting Text */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                09 · Contact
              </p>
              <h2 className="font-heading mt-3 max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#252525] [text-wrap:balance] sm:text-4xl dark:text-[#F4F1EA]">
                Let’s Create Meaningful Visual Connections.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#4A4640] dark:text-[#C5BEB3]">
                For opportunities in graphic design, visual communication, creative practice and art education, feel free to get in touch.
              </p>

              {/* Contact Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={`mailto:${PORTFOLIO_PROFILE.email}`}
                  className="inline-flex min-h-[44px] items-center gap-2 bg-[#252525] px-5 py-3 text-sm font-semibold text-[#F4F1EA] transition-colors duration-200 hover:bg-[#A28B70] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] whitespace-nowrap shrink-0 dark:bg-[#F4F1EA] dark:text-[#191816] dark:hover:bg-[#B59F84]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Email Me</span>
                </a>

                <a
                  href={PORTFOLIO_PROFILE.phoneHref}
                  className="inline-flex min-h-[44px] items-center gap-2 border border-[#252525] bg-transparent px-5 py-3 text-sm font-semibold text-[#252525] transition-colors duration-200 hover:bg-[#252525] hover:text-[#F4F1EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] whitespace-nowrap shrink-0 dark:border-[#D9D2C6]/60 dark:text-[#F4F1EA] dark:hover:bg-[#F4F1EA] dark:hover:text-[#191816]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Call Me</span>
                </a>

                <button
                  type="button"
                  onClick={downloadVerifiedCV}
                  className="inline-flex min-h-[44px] items-center gap-2 border border-[#D9D2C6] bg-[#FFFFFF] px-5 py-3 text-sm font-semibold text-[#252525] transition-colors duration-200 hover:border-[#A28B70] hover:text-[#A28B70] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] whitespace-nowrap shrink-0 dark:border-[#35312C] dark:bg-[#22201D] dark:text-[#F4F1EA] dark:hover:border-[#B59F84] dark:hover:text-[#B59F84]"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download CV</span>
                </button>

                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex min-h-[44px] items-center gap-1.5 px-3 py-3 text-sm font-medium text-[#5C5852] transition-colors hover:text-[#252525] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A28B70] whitespace-nowrap shrink-0 dark:text-[#B8B1A6] dark:hover:text-[#F4F1EA]"
                >
                  <ArrowUp className="h-4 w-4" aria-hidden="true" />
                  <span>Back to Top</span>
                </button>
              </div>
            </div>

            {/* Right Contact Details Card */}
            <div className="border border-[#D9D2C6] bg-[#FFFFFF] p-7 sm:p-8 lg:col-span-5 dark:border-[#35312C] dark:bg-[#22201D]">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                Direct Details
              </p>

              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-xs text-[#6B665F] dark:text-[#A39C92]">Name</dt>
                  <dd className="mt-1 font-heading font-semibold text-[#252525] dark:text-[#F4F1EA]">
                    {PORTFOLIO_PROFILE.name}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-[#6B665F] dark:text-[#A39C92]">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${PORTFOLIO_PROFILE.email}`}
                      className="font-medium text-[#252525] underline decoration-[#D9D2C6] underline-offset-4 transition-colors hover:decoration-[#A28B70] dark:text-[#F4F1EA] dark:decoration-[#35312C]"
                    >
                      {PORTFOLIO_PROFILE.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-[#6B665F] dark:text-[#A39C92]">Phone</dt>
                  <dd className="mt-1 font-mono tabular-nums">
                    <a
                      href={PORTFOLIO_PROFILE.phoneHref}
                      className="font-medium text-[#252525] underline decoration-[#D9D2C6] underline-offset-4 transition-colors hover:decoration-[#A28B70] dark:text-[#F4F1EA] dark:decoration-[#35312C]"
                    >
                      {PORTFOLIO_PROFILE.phone}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-[#6B665F] dark:text-[#A39C92]">Location</dt>
                  <dd className="mt-1 font-medium text-[#252525] dark:text-[#F4F1EA]">
                    {PORTFOLIO_PROFILE.location}.
                  </dd>
                </div>

                {/* Editable Social Links: Hidden until actual URLs are provided */}
                {PORTFOLIO_PROFILE.socialLinks.length > 0 && (
                  <div>
                    <dt className="text-xs text-[#6B665F] dark:text-[#A39C92]">Links</dt>
                    <dd className="mt-2 flex flex-wrap gap-4">
                      {PORTFOLIO_PROFILE.socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#7D6A54] underline underline-offset-4 hover:text-[#252525] dark:text-[#B59F84] dark:hover:text-[#F4F1EA]"
                        >
                          {link.label}
                        </a>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
