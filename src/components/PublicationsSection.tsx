import React from 'react';
import { BookOpen, FileText } from 'lucide-react';
import { PUBLICATIONS } from '../data/portfolioData';
import { RevealSection } from './RevealSection';

export const PublicationsSection: React.FC = () => {
  return (
    <section
      id="research"
      className="border-b border-[#D9D2C6] bg-[#F4F1EA] py-20 lg:py-28 dark:border-[#35312C] dark:bg-[#191816]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <RevealSection>
          <div className="flex flex-col justify-between gap-6 border-b border-[#D9D2C6] pb-8 md:flex-row md:items-end dark:border-[#35312C]">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                08 · Research &amp; Publications
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[#252525] [text-wrap:balance] sm:text-4xl dark:text-[#F4F1EA]">
                Research, Writing &amp; Academic Contributions
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#5C5852] dark:text-[#B8B1A6]">
              Conference research paper and published book chapters examining photography-illustration synergy, digital typography, and interdisciplinary themes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PUBLICATIONS.map((pub) => (
              <article
                key={pub.id}
                className="flex flex-col justify-between border border-[#D9D2C6] bg-[#FFFFFF] p-7 dark:border-[#35312C] dark:bg-[#22201D]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#7D6A54] dark:text-[#B59F84]">
                    <span className="inline-flex items-center gap-1.5 font-semibold tracking-wider uppercase">
                      {pub.kind === 'Research Paper' ? (
                        <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                      <span>
                        {pub.kind}
                        {pub.number ? ` · ${pub.number}` : ''}
                      </span>
                    </span>
                    <span className="font-mono tabular-nums">{pub.date}</span>
                  </div>

                  <h3 className="font-heading mt-4 text-xl font-bold leading-snug text-[#252525] [text-wrap:balance] dark:text-[#F4F1EA]">
                    {pub.title}
                  </h3>

                  <p className="font-editorial mt-4 text-sm italic text-[#4A4640] dark:text-[#CFC8BC]">
                    {pub.venueOrBook}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#6B665F] dark:text-[#A39C92]">
                    {pub.organizerOrPublisher}
                  </p>
                </div>

                {pub.isbn && (
                  <div className="mt-6 border-t border-[#D9D2C6]/70 pt-3 font-mono text-xs text-[#5C5852] tabular-nums dark:border-[#35312C] dark:text-[#B8B1A6]">
                    ISBN: {pub.isbn}
                  </div>
                )}
              </article>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
