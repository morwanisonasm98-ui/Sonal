import React from 'react';
import {
  EDUCATION_LIST,
  PROFESSIONAL_DESIGN_EXPERIENCE,
  TEACHING_EXPERIENCE,
} from '../data/portfolioData';
import { RevealSection } from './RevealSection';

export const AcademicTimeline: React.FC = () => {
  return (
    <section
      id="academics"
      className="border-b border-[#D9D2C6] bg-[#FFFFFF] py-20 lg:py-28 dark:border-[#35312C] dark:bg-[#22201D]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <RevealSection>
          <div className="flex flex-col justify-between gap-6 border-b border-[#D9D2C6] pb-8 md:flex-row md:items-end dark:border-[#35312C]">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                07 · Academic Profile
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[#252525] [text-wrap:balance] sm:text-4xl dark:text-[#F4F1EA]">
                Academic Journey &amp; Teaching Practice
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#5C5852] dark:text-[#B8B1A6]">
              Formal training in Applied Art and doctoral research in Visual Art, complemented by university teaching and graphic design studio experience.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Education Column */}
            <div className="lg:col-span-6">
              <h3 className="font-heading text-sm font-bold tracking-[0.14em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                Education
              </h3>

              <div className="mt-6 divide-y divide-[#D9D2C6] border-t border-b border-[#D9D2C6] dark:divide-[#35312C] dark:border-[#35312C]">
                {EDUCATION_LIST.map((edu) => (
                  <div key={edu.id} className="py-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-heading text-lg font-bold text-[#252525] dark:text-[#F4F1EA]">
                        {edu.degree}
                        {edu.status ? ` — ${edu.status}` : ''}
                      </h4>
                      <span className="font-mono text-xs text-[#7D6A54] tabular-nums dark:text-[#B59F84]">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-[#4A4640] dark:text-[#CFC8BC]">
                      {edu.field}
                    </p>
                    <p className="mt-1 text-sm text-[#6B665F] dark:text-[#A39C92]">
                      {edu.institution}, {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching & Design Experience Column */}
            <div className="space-y-12 lg:col-span-6">
              {/* Teaching Experience */}
              <div>
                <h3 className="font-heading text-sm font-bold tracking-[0.14em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                  Teaching Experience
                </h3>

                <div className="mt-6 divide-y divide-[#D9D2C6] border-t border-b border-[#D9D2C6] dark:divide-[#35312C] dark:border-[#35312C]">
                  {TEACHING_EXPERIENCE.map((item) => (
                    <div key={item.id} className="py-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="font-heading text-lg font-bold text-[#252525] dark:text-[#F4F1EA]">
                          {item.role}
                        </h4>
                        <span className="font-mono text-xs text-[#7D6A54] dark:text-[#B59F84]">
                          {item.period}
                        </span>
                      </div>
                      {item.department && (
                        <p className="mt-1 text-sm font-medium text-[#4A4640] dark:text-[#CFC8BC]">
                          {item.department}
                        </p>
                      )}
                      <p className="mt-1 text-sm text-[#6B665F] dark:text-[#A39C92]">
                        {item.organization}, {item.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Design Experience */}
              <div>
                <h3 className="font-heading text-sm font-bold tracking-[0.14em] text-[#7D6A54] uppercase dark:text-[#B59F84]">
                  Professional Design Experience
                </h3>

                <div className="mt-6 divide-y divide-[#D9D2C6] border-t border-b border-[#D9D2C6] dark:divide-[#35312C] dark:border-[#35312C]">
                  {PROFESSIONAL_DESIGN_EXPERIENCE.map((exp) => (
                    <div key={exp.id} className="py-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="font-heading text-base font-bold text-[#252525] dark:text-[#F4F1EA]">
                          {exp.role}
                        </h4>
                        <span className="font-mono text-xs text-[#7D6A54] tabular-nums dark:text-[#B59F84]">
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-[#5C5852] dark:text-[#B8B1A6]">
                        {exp.organization}
                        {exp.location ? `, ${exp.location}` : ''}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
