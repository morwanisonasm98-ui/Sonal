import {
  AWARDS_LIST,
  DESIGN_EXPERTISE,
  EDUCATION_LIST,
  EXHIBITIONS_LIST,
  PORTFOLIO_PROFILE,
  PROFESSIONAL_DESIGN_EXPERIENCE,
  PUBLICATIONS,
  SOFTWARE_TOOLS,
  TEACHING_EXPERIENCE,
} from '../data/portfolioData';

/**
 * Generates and downloads a clean, print-ready HTML Curriculum Vitae
 * containing strictly verified credentials from portfolioData.ts.
 */
export function downloadVerifiedCV(): void {
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${PORTFOLIO_PROFILE.name} — Curriculum Vitae</title>
  <style>
    body { font-family: 'Lato', Arial, sans-serif; color: #252525; max-width: 820px; margin: 40px auto; padding: 0 24px; line-height: 1.55; }
    h1 { font-family: 'Manrope', Arial, sans-serif; font-size: 28px; margin: 0 0 4px; letter-spacing: -0.02em; }
    .subtitle { font-size: 14px; color: #6B5D4D; margin-bottom: 12px; font-weight: 600; }
    .contact { font-size: 13px; color: #4A4A4A; border-bottom: 1px solid #D9D2C6; padding-bottom: 16px; margin-bottom: 24px; }
    h2 { font-family: 'Manrope', Arial, sans-serif; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; color: #A28B70; border-bottom: 1px solid #E5DFD5; padding-bottom: 6px; margin: 24px 0 12px; }
    .entry { margin-bottom: 12px; }
    .entry-head { display: flex; justify-content: space-between; gap: 16px; font-weight: 700; font-size: 14px; }
    .entry-sub { font-size: 13px; color: #525252; }
    .date { font-weight: 400; color: #6B6B6B; font-size: 13px; white-space: nowrap; }
    ul { margin: 6px 0 0; padding-left: 18px; font-size: 13px; }
    li { margin-bottom: 4px; }
    @media print { body { margin: 20px auto; } }
  </style>
</head>
<body>
  <h1>${PORTFOLIO_PROFILE.name}</h1>
  <div class="subtitle">${PORTFOLIO_PROFILE.title}</div>
  <div class="contact">
    ${PORTFOLIO_PROFILE.location} &middot; ${PORTFOLIO_PROFILE.email} &middot; ${PORTFOLIO_PROFILE.phone}
  </div>

  <h2>Profile</h2>
  ${PORTFOLIO_PROFILE.aboutParagraphs.map((p) => `<p style="font-size:13.5px;margin:0 0 8px;">${p}</p>`).join('')}

  <h2>Education</h2>
  ${EDUCATION_LIST.map(
    (edu) => `
    <div class="entry">
      <div class="entry-head"><span>${edu.degree} — ${edu.field}${edu.status ? ` (${edu.status})` : ''}</span><span class="date">${edu.period}</span></div>
      <div class="entry-sub">${edu.institution}, ${edu.location}</div>
    </div>`
  ).join('')}

  <h2>Teaching Experience</h2>
  ${TEACHING_EXPERIENCE.map(
    (t) => `
    <div class="entry">
      <div class="entry-head"><span>${t.role}${t.department ? ` — ${t.department}` : ''}</span><span class="date">${t.period}</span></div>
      <div class="entry-sub">${t.organization}, ${t.location}</div>
    </div>`
  ).join('')}

  <h2>Design Experience</h2>
  ${PROFESSIONAL_DESIGN_EXPERIENCE.map(
    (exp) => `
    <div class="entry">
      <div class="entry-head"><span>${exp.role} — ${exp.organization}</span><span class="date">${exp.period}</span></div>
      <div class="entry-sub">${exp.location}</div>
    </div>`
  ).join('')}

  <h2>Research & Publications</h2>
  ${PUBLICATIONS.map(
    (pub) => `
    <div class="entry">
      <div class="entry-head"><span>${pub.kind}: ${pub.title}</span><span class="date">${pub.date}</span></div>
      <div class="entry-sub">${pub.venueOrBook} &middot; ${pub.organizerOrPublisher}${pub.isbn ? ` &middot; ISBN: ${pub.isbn}` : ''}</div>
    </div>`
  ).join('')}

  <h2>Areas of Expertise & Tools</h2>
  <p style="font-size:13px;"><strong>Practice:</strong> ${DESIGN_EXPERTISE.map((d) => d.title).join(', ')}</p>
  <p style="font-size:13px;"><strong>Software:</strong> ${[...SOFTWARE_TOOLS.designTools, ...SOFTWARE_TOOLS.additionalTools].join(', ')}</p>

  <h2>Awards & Selected Exhibitions</h2>
  <ul>
    ${AWARDS_LIST.map((a) => `<li><strong>${a.title}</strong>, ${a.organizer} (${a.date})</li>`).join('')}
    ${EXHIBITIONS_LIST.map((ex) => `<li>${ex.title} (${ex.year})</li>`).join('')}
  </ul>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Sonal_Morwani_CV.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
