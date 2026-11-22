export interface ArtworkAsset {
  id: string;
  plateCode: string;
  title: string;
  caption: string;
  discipline: string;
  pdfReference: string;
  /**
   * Place the extracted artwork file at public/images/portfolio/<filename>
   * or update `src` directly with the image URL.
   */
  src: string;
  recommendedFilename: string;
  alt: string;
  aspectRatio: '3/4' | '4/3' | '1/1' | '16/10' | '4/5';
  compositionNotes: string;
  swatches?: string[];
  accentTag?: string;
}

export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  filterGroup: 'advertising' | 'typography' | 'branding';
  categories: string[];
  statusLabel: string;
  message?: string;
  overview: string;
  extendedContext: string;
  creativeElements: string[];
  pdfPages: string;
  coverAsset: ArtworkAsset;
  assets: ArtworkAsset[];
}

export interface TypographyWork {
  id: string;
  number: string;
  title: string;
  technique: string;
  description: string;
  asset: ArtworkAsset;
}

export interface LogoStudy {
  id: string;
  number: string;
  brandName: string;
  statusNote: string;
  description: string;
  paletteLabels: { name: string; hex: string }[];
  asset: ArtworkAsset;
}

export interface EducationEntry {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  department?: string;
  organization: string;
  location: string;
  period: string;
  type: 'teaching' | 'design';
  editableNote?: string;
}

export interface PublicationEntry {
  id: string;
  kind: 'Research Paper' | 'Book Chapter';
  number?: string;
  title: string;
  venueOrBook: string;
  organizerOrPublisher: string;
  date: string;
  isbn?: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export const PORTFOLIO_PROFILE = {
  brandPractice: 'THE VISUAL PRACTICE',
  brandTagline: 'Design. Communication. Art Education.',
  name: 'Sonal Morwani',
  title: 'Graphic Designer & Visual Arts Academician',
  heroLabel: 'GRAPHIC DESIGNER | VISUAL ARTS ACADEMICIAN',
  heroStatement: 'Designing Visual Ideas. Communicating Through Art.',
  heroSupport:
    'Exploring the intersection of graphic design, visual communication, typography, illustration and art education.',
  location: 'Jaipur, Rajasthan, India',
  email: 'morwanisona.sm.98@gmail.com',
  phone: '+91 7414011144',
  phoneHref: 'tel:+917414011144',
  portraitAsset: {
    id: 'sonal-portrait-hero',
    plateCode: 'CV · PORTRAIT',
    title: 'Sonal Morwani — Profile Photograph',
    caption: 'Professional portrait from CV',
    discipline: 'Profile',
    pdfReference: 'CV Document',
    src: '/images/portfolio/sonal-morwani-portrait.webp',
    recommendedFilename: 'public/images/portfolio/sonal-morwani-portrait.webp',
    alt: 'Professional photograph of Sonal Morwani, Graphic Designer and Visual Arts Academician',
    aspectRatio: '4/5' as const,
    compositionNotes:
      'Replace with the actual professional photograph extracted from Sonal Morwani’s CV PDF.',
  },
  aboutPortraitAsset: {
    id: 'sonal-portrait-about',
    plateCode: 'PROFILE · 02',
    title: 'Sonal Morwani',
    caption: 'Jaipur, Rajasthan, India',
    discipline: 'Visual Arts Academician',
    pdfReference: 'CV Document',
    src: '/images/portfolio/sonal-morwani-profile.webp',
    recommendedFilename: 'public/images/portfolio/sonal-morwani-profile.webp',
    alt: 'Profile photograph of Sonal Morwani, Graphic Designer and Visual Arts Academician in Jaipur',
    aspectRatio: '1/1' as const,
    compositionNotes:
      'Small editorial profile photograph from CV. Maintain original tones and aspect ratio.',
  },
  aboutHeading: 'A Creative Practice Rooted in Applied Art',
  aboutParagraphs: [
    'I am a Graphic Designer and Visual Arts academician with a background in Applied Art. My creative practice focuses on visual communication, graphic compositions, advertising, branding, typography and digital illustration.',
    'I approach design as a process of translating ideas into meaningful visual experiences. Through experimentation with colour, typography, imagery and composition, I explore different ways of communicating concepts.',
    'Alongside my design practice, my academic journey and teaching experience continue to shape my understanding of art, design and visual expression.',
    'Currently pursuing a PhD in Visual Art at IIS (Deemed to be University), Jaipur, following postgraduate and undergraduate studies in Applied Art from Rajasthan School of Art.',
  ],
  /**
   * Keep empty until verified social URLs are supplied.
   * Links added here will appear automatically in the Contact section.
   */
  socialLinks: [] as SocialLink[],
};

export const DESIGN_EXPERTISE = [
  {
    id: 'graphic-design',
    number: '01',
    title: 'Graphic Design',
    description:
      'Creating visual compositions, promotional graphics, layouts and posters.',
  },
  {
    id: 'advertising-campaign',
    number: '02',
    title: 'Advertising & Campaign Design',
    description:
      'Developing campaign visuals and concept-based communication.',
  },
  {
    id: 'brand-identity',
    number: '03',
    title: 'Brand Identity & Logo Design',
    description:
      'Exploring logo concepts, typography, colour systems and brand presentation.',
  },
  {
    id: 'creative-typography',
    number: '04',
    title: 'Creative Typography',
    description:
      'Experimenting with letterforms, dimensional effects, textures and typographic compositions.',
  },
  {
    id: 'digital-illustration',
    number: '05',
    title: 'Digital Illustration',
    description:
      'Developing character illustrations and digital artwork.',
  },
  {
    id: 'visual-communication',
    number: '06',
    title: 'Visual Communication',
    description:
      'Communicating ideas and messages through visual elements, imagery and composition.',
  },
];

export const SOFTWARE_TOOLS = {
  designTools: [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'CorelDRAW',
    'Adobe InDesign',
    'Figma',
    'Digital Illustration',
  ],
  additionalTools: [
    'Microsoft Word',
    'Microsoft Excel',
    'Microsoft PowerPoint',
  ],
};

export const SELECTED_PROJECTS: PortfolioProject[] = [
  {
    id: 'rayban-pop-art',
    number: '01',
    title: 'Ray-Ban Pop Art Advertising Campaign',
    shortTitle: 'Ray-Ban Pop Art Campaign',
    filterGroup: 'advertising',
    categories: ['Advertising Design', 'Digital Illustration', 'Visual Communication'],
    statusLabel: 'Concept / Academic Project',
    message: 'Never Hide.',
    overview:
      'An advertising campaign concept exploring the visual identity of Ray-Ban through a pop-art-inspired design approach. The project combines expressive character illustrations, bold colours, graphic patterns and typography to create visually engaging promotional compositions.',
    extendedContext:
      'Developed as an applied art advertising study centered around the "Never Hide." campaign theme, pairing illustrated male and female characters with high-contrast pop-art halftone textures and promotional mockup applications.',
    creativeElements: [
      'Pop-art-inspired character illustrations',
      'Male and female illustrated characters',
      'Bold red, black and white colour palette',
      'Advertising poster compositions',
      'Promotional mockup applications',
      'Campaign typography',
    ],
    pdfPages: 'Portfolio PDF · Pages 3 & 4',
    coverAsset: {
      id: 'rayban-poster-01',
      plateCode: 'PLATE 01 · A',
      title: 'Ray-Ban Pop Art Poster — Character Illustration I',
      caption: 'Pop-art character illustration & campaign poster composition ("Never Hide.")',
      discipline: 'Advertising Design',
      pdfReference: 'Portfolio PDF · Page 3',
      src: '/images/portfolio/rayban-pop-art-poster-01.webp',
      recommendedFilename: 'public/images/portfolio/rayban-pop-art-poster-01.webp',
      alt: 'Ray-Ban Pop Art advertising campaign poster featuring bold red, black and white character illustration',
      aspectRatio: '3/4',
      compositionNotes:
        'Extract illustrated character poster from Portfolio PDF Page 3. Bold red, black & white pop-art palette.',
      swatches: ['#C8232C', '#1C1C1C', '#F7F5F0'],
      accentTag: 'Never Hide.',
    },
    assets: [
      {
        id: 'rayban-poster-01',
        plateCode: 'PLATE 01 · A',
        title: 'Ray-Ban Pop Art Poster — Male Character',
        caption: 'Expressive pop-art male character illustration with campaign typography.',
        discipline: 'Advertising Design',
        pdfReference: 'Portfolio PDF · Page 3',
        src: '/images/portfolio/rayban-pop-art-poster-01.webp',
        recommendedFilename: 'public/images/portfolio/rayban-pop-art-poster-01.webp',
        alt: 'Ray-Ban Pop Art campaign poster featuring male character illustration in red, black and white',
        aspectRatio: '3/4',
        compositionNotes: 'Portfolio PDF Page 3 — Illustrated male character composition.',
        swatches: ['#C8232C', '#1C1C1C', '#F7F5F0'],
      },
      {
        id: 'rayban-poster-02',
        plateCode: 'PLATE 01 · B',
        title: 'Ray-Ban Pop Art Poster — Female Character',
        caption: 'Expressive pop-art female character illustration with halftone graphic patterns.',
        discipline: 'Digital Illustration',
        pdfReference: 'Portfolio PDF · Page 3',
        src: '/images/portfolio/rayban-pop-art-poster-02.webp',
        recommendedFilename: 'public/images/portfolio/rayban-pop-art-poster-02.webp',
        alt: 'Ray-Ban Pop Art campaign poster featuring female character illustration',
        aspectRatio: '3/4',
        compositionNotes: 'Portfolio PDF Page 3 — Illustrated female character composition.',
        swatches: ['#C8232C', '#1C1C1C', '#F7F5F0'],
      },
      {
        id: 'rayban-mockup-03',
        plateCode: 'PLATE 01 · C',
        title: 'Ray-Ban Campaign Applications & Promotional Mockups',
        caption: 'Promotional mockup applications showcasing the campaign typography and illustrations.',
        discipline: 'Visual Communication',
        pdfReference: 'Portfolio PDF · Page 4',
        src: '/images/portfolio/rayban-campaign-mockup.webp',
        recommendedFilename: 'public/images/portfolio/rayban-campaign-mockup.webp',
        alt: 'Ray-Ban Pop Art promotional mockup applications from portfolio page 4',
        aspectRatio: '4/3',
        compositionNotes: 'Portfolio PDF Page 4 — Campaign applications & promotional mockups.',
        swatches: ['#C8232C', '#1C1C1C', '#FFFFFF'],
      },
    ],
  },
  {
    id: 'soil-pollution-campaign',
    number: '02',
    title: 'Soil Pollution Awareness Campaign',
    shortTitle: 'Soil Pollution Awareness',
    filterGroup: 'advertising',
    categories: ['Social Awareness', 'Campaign Design', 'Illustration'],
    statusLabel: 'Awareness Campaign Concept',
    message: 'Save Soil.',
    overview:
      'An environmental awareness campaign focusing on soil pollution and the importance of protecting soil as a fundamental natural resource. The campaign communicates environmental concerns through illustrated scenarios, Hindi-language messaging and visual storytelling.',
    extendedContext:
      'Structured around contrasting visual narratives that juxtapose soil degradation with agricultural vitality, paired with accessible Hindi-language messaging for outdoor and digital awareness media.',
    creativeElements: [
      'Agricultural illustrations',
      'Environmental awareness graphics',
      'Hindi-language communication',
      'Contrasting visual narratives',
      'Campaign poster layouts',
      'Outdoor advertising mockup',
    ],
    pdfPages: 'Portfolio PDF · Page 6',
    coverAsset: {
      id: 'soil-poster-01',
      plateCode: 'PLATE 02 · A',
      title: 'Soil Pollution Awareness — Campaign Posters',
      caption: 'Illustrated environmental awareness posters with Hindi-language messaging ("Save Soil.")',
      discipline: 'Social Awareness Campaign',
      pdfReference: 'Portfolio PDF · Page 6',
      src: '/images/portfolio/soil-awareness-poster-01.webp',
      recommendedFilename: 'public/images/portfolio/soil-awareness-poster-01.webp',
      alt: 'Soil Pollution Awareness Campaign poster with agricultural illustration and Hindi-language messaging',
      aspectRatio: '3/4',
      compositionNotes:
        'Extract campaign poster artwork from Portfolio PDF Page 6. Preserve original agricultural & environmental tones.',
      swatches: ['#6B5335', '#4D7C43', '#D9C8A9'],
      accentTag: 'Save Soil.',
    },
    assets: [
      {
        id: 'soil-poster-01',
        plateCode: 'PLATE 02 · A',
        title: 'Soil Pollution Awareness — Illustrated Poster Series',
        caption: 'Contrasting visual narratives and Hindi-language environmental communication.',
        discipline: 'Social Awareness',
        pdfReference: 'Portfolio PDF · Page 6',
        src: '/images/portfolio/soil-awareness-poster-01.webp',
        recommendedFilename: 'public/images/portfolio/soil-awareness-poster-01.webp',
        alt: 'Soil pollution awareness campaign poster featuring contrasting agricultural scenarios',
        aspectRatio: '3/4',
        compositionNotes: 'Portfolio PDF Page 6 — Campaign posters & illustrations.',
        swatches: ['#6B5335', '#4D7C43', '#D9C8A9'],
      },
      {
        id: 'soil-outdoor-02',
        plateCode: 'PLATE 02 · B',
        title: 'Soil Awareness — Outdoor Advertising & Digital Applications',
        caption: 'Outdoor advertising mockup and digital campaign extensions.',
        discipline: 'Campaign Design',
        pdfReference: 'Portfolio PDF · Page 6',
        src: '/images/portfolio/soil-awareness-outdoor-mockup.webp',
        recommendedFilename: 'public/images/portfolio/soil-awareness-outdoor-mockup.webp',
        alt: 'Outdoor advertising mockup for Soil Pollution Awareness Campaign',
        aspectRatio: '4/3',
        compositionNotes: 'Portfolio PDF Page 6 — Digital applications and outdoor advertising mockup.',
        swatches: ['#6B5335', '#4D7C43', '#D9C8A9'],
      },
    ],
  },
  {
    id: 'creative-typography',
    number: '03',
    title: 'Creative Typography Explorations',
    shortTitle: 'Creative Typography',
    filterGroup: 'typography',
    categories: ['Typography', 'Digital Art', 'Experimental Design'],
    statusLabel: 'Experimental Series · 6 Works',
    overview:
      'A collection of typographic experiments exploring dimensional lettering, visual depth, perspective, texture and expressive compositions.',
    extendedContext:
      'Six distinct typographic studies spanning isometric geometry, 3D inflation, halftone rhythm, and portrait-integrated letterforms extracted from pages 7, 8 and 9 of the portfolio.',
    creativeElements: [
      'Isometric perspective lettering',
      'Dimensional & 3D inflated letterforms',
      'Halftone texture compositions',
      'Portrait-based typographic integration',
      'Experimental depth and contrast',
    ],
    pdfPages: 'Portfolio PDF · Pages 7, 8 & 9',
    coverAsset: {
      id: 'typo-do-something-great',
      plateCode: 'PLATE 03 · A',
      title: 'Do Something Great — Isometric Typography',
      caption: 'Isometric typographic composition exploring architectural depth and perspective.',
      discipline: 'Creative Typography',
      pdfReference: 'Portfolio PDF · Page 7',
      src: '/images/portfolio/typography-do-something-great.webp',
      recommendedFilename: 'public/images/portfolio/typography-do-something-great.webp',
      alt: 'Do Something Great isometric typography artwork',
      aspectRatio: '4/3',
      compositionNotes: 'Extract from Portfolio PDF Page 7 — Isometric typography.',
    },
    assets: [
      {
        id: 'typo-do-something-great',
        plateCode: 'TYPO · 01',
        title: 'Do Something Great',
        caption: 'Isometric typography.',
        discipline: 'Typography',
        pdfReference: 'Portfolio PDF · Page 7',
        src: '/images/portfolio/typography-do-something-great.webp',
        recommendedFilename: 'public/images/portfolio/typography-do-something-great.webp',
        alt: 'Do Something Great — Isometric typography composition',
        aspectRatio: '4/3',
        compositionNotes: 'Isometric perspective typography from PDF Page 7.',
      },
      {
        id: 'typo-immeasurable',
        plateCode: 'TYPO · 02',
        title: 'Immeasurable',
        caption: 'Dimensional typography.',
        discipline: 'Typography',
        pdfReference: 'Portfolio PDF · Page 7',
        src: '/images/portfolio/typography-immeasurable.webp',
        recommendedFilename: 'public/images/portfolio/typography-immeasurable.webp',
        alt: 'Immeasurable — Dimensional typography composition',
        aspectRatio: '4/3',
        compositionNotes: 'Dimensional lettering experiment from PDF Page 7.',
      },
      {
        id: 'typo-double-chocolate',
        plateCode: 'TYPO · 03',
        title: 'Double Chocolate Ice Cream',
        caption: '3D inflated typography.',
        discipline: 'Typography',
        pdfReference: 'Portfolio PDF · Page 8',
        src: '/images/portfolio/typography-double-chocolate.webp',
        recommendedFilename: 'public/images/portfolio/typography-double-chocolate.webp',
        alt: 'Double Chocolate Ice Cream — 3D inflated typography artwork',
        aspectRatio: '4/3',
        compositionNotes: '3D inflated letterforms from PDF Page 8.',
      },
      {
        id: 'typo-high-camp',
        plateCode: 'TYPO · 04',
        title: 'High Camp',
        caption: 'Halftone typography.',
        discipline: 'Typography',
        pdfReference: 'Portfolio PDF · Page 8',
        src: '/images/portfolio/typography-high-camp.webp',
        recommendedFilename: 'public/images/portfolio/typography-high-camp.webp',
        alt: 'High Camp — Halftone typography composition',
        aspectRatio: '4/3',
        compositionNotes: 'Halftone texture typography from PDF Page 8.',
      },
      {
        id: 'typo-make-in-india',
        plateCode: 'TYPO · 05',
        title: 'Make in India',
        caption: 'Portrait-based typography.',
        discipline: 'Typography',
        pdfReference: 'Portfolio PDF · Page 9',
        src: '/images/portfolio/typography-make-in-india.webp',
        recommendedFilename: 'public/images/portfolio/typography-make-in-india.webp',
        alt: 'Make in India — Portrait-based typography artwork',
        aspectRatio: '3/4',
        compositionNotes: 'Portrait-based typography from PDF Page 9.',
      },
      {
        id: 'typo-self-portrait',
        plateCode: 'TYPO · 06',
        title: 'Self-Portrait Typography',
        caption: 'Letterform and portrait composition.',
        discipline: 'Typography',
        pdfReference: 'Portfolio PDF · Page 9',
        src: '/images/portfolio/typography-self-portrait.webp',
        recommendedFilename: 'public/images/portfolio/typography-self-portrait.webp',
        alt: 'Self-Portrait Typography — Letterform and portrait composition',
        aspectRatio: '3/4',
        compositionNotes: 'Letterform and portrait composition from PDF Page 9.',
      },
    ],
  },
  {
    id: 'brand-identity-logos',
    number: '04',
    title: 'Brand Identity & Logo Design Studies',
    shortTitle: 'Brand Identity & Logos',
    filterGroup: 'branding',
    categories: ['Branding', 'Logo Design', 'Visual Identity'],
    statusLabel: 'Logo Studies / Concepts',
    overview:
      'Four exploratory logo and brand identity studies examining organic forms, geometric simplification, expressive wordmarks and emblem construction.',
    extendedContext:
      'Note: Presented strictly as exploratory logo studies and academic/portfolio concepts—not official commercial commissions.',
    creativeElements: [
      'Organic leaf-inspired identity forms (Marico study)',
      'Geometric orange lettering & simplified forms (DOMS study)',
      'Rose-toned calligraphic wordmark (Pragya Makeup Artist concept)',
      'Golden circular emblem & serif pairing (Aveena Jewels concept)',
    ],
    pdfPages: 'Portfolio PDF · Pages 10 & 11',
    coverAsset: {
      id: 'logo-aveena',
      plateCode: 'PLATE 04 · D',
      title: 'Aveena Jewels — Logo Concept',
      caption: 'Jewellery identity concept using golden visual elements, typography and a circular emblem.',
      discipline: 'Logo Study / Concept',
      pdfReference: 'Portfolio PDF · Page 11',
      src: '/images/portfolio/logo-study-aveena.webp',
      recommendedFilename: 'public/images/portfolio/logo-study-aveena.webp',
      alt: 'Aveena Jewels circular emblem and golden typography logo concept',
      aspectRatio: '4/3',
      compositionNotes: 'Extract from Portfolio PDF Page 11 — Aveena Jewels logo concept.',
      swatches: ['#C8A24B', '#252525', '#F4F1EA'],
    },
    assets: [
      {
        id: 'logo-marico',
        plateCode: 'STUDY · 01',
        title: 'Marico — Logo Study',
        caption: 'Organic leaf-inspired forms and a blue-green colour palette.',
        discipline: 'Logo Study',
        pdfReference: 'Portfolio PDF · Page 10',
        src: '/images/portfolio/logo-study-marico.webp',
        recommendedFilename: 'public/images/portfolio/logo-study-marico.webp',
        alt: 'Marico logo study using organic leaf-inspired forms and blue-green colour palette',
        aspectRatio: '4/3',
        compositionNotes: 'Portfolio PDF Page 10 — Organic leaf-inspired forms, blue-green palette.',
        swatches: ['#0E6B74', '#2F9E79', '#F4F1EA'],
      },
      {
        id: 'logo-doms',
        plateCode: 'STUDY · 02',
        title: 'DOMS — Logo Study',
        caption: 'Geometric logo study using orange lettering and simplified graphic forms.',
        discipline: 'Logo Study',
        pdfReference: 'Portfolio PDF · Page 10',
        src: '/images/portfolio/logo-study-doms.webp',
        recommendedFilename: 'public/images/portfolio/logo-study-doms.webp',
        alt: 'DOMS geometric logo study with orange lettering and simplified graphic forms',
        aspectRatio: '4/3',
        compositionNotes: 'Portfolio PDF Page 10 — Geometric orange lettering study.',
        swatches: ['#EA5B1C', '#252525', '#FFFFFF'],
      },
      {
        id: 'logo-pragya',
        plateCode: 'STUDY · 03',
        title: 'Pragya Makeup Artist — Wordmark Concept',
        caption: 'Wordmark concept using elegant typography and a soft rose-toned palette.',
        discipline: 'Wordmark Concept',
        pdfReference: 'Portfolio PDF · Page 11',
        src: '/images/portfolio/logo-study-pragya.webp',
        recommendedFilename: 'public/images/portfolio/logo-study-pragya.webp',
        alt: 'Pragya Makeup Artist wordmark logo concept in soft rose-toned palette',
        aspectRatio: '4/3',
        compositionNotes: 'Portfolio PDF Page 11 — Soft rose-toned wordmark concept.',
        swatches: ['#C98A95', '#8C535E', '#F8F2F3'],
      },
      {
        id: 'logo-aveena',
        plateCode: 'STUDY · 04',
        title: 'Aveena Jewels — Identity Concept',
        caption: 'Jewellery identity concept using golden visual elements, typography and a circular emblem.',
        discipline: 'Identity Concept',
        pdfReference: 'Portfolio PDF · Page 11',
        src: '/images/portfolio/logo-study-aveena.webp',
        recommendedFilename: 'public/images/portfolio/logo-study-aveena.webp',
        alt: 'Aveena Jewels identity concept featuring golden circular emblem and typography',
        aspectRatio: '4/3',
        compositionNotes: 'Portfolio PDF Page 11 — Golden visual elements & circular emblem.',
        swatches: ['#C8A24B', '#252525', '#F4F1EA'],
      },
    ],
  },
];

export const TYPOGRAPHY_WORKS: TypographyWork[] = [
  {
    id: 'do-something-great',
    number: '01',
    title: 'Do Something Great',
    technique: 'Isometric typography',
    description: 'Exploratory letterforms constructed on an isometric spatial grid.',
    asset: SELECTED_PROJECTS[2].assets[0],
  },
  {
    id: 'immeasurable',
    number: '02',
    title: 'Immeasurable',
    technique: 'Dimensional typography',
    description: 'Depth-driven typographic composition examining visual scale and layering.',
    asset: SELECTED_PROJECTS[2].assets[1],
  },
  {
    id: 'double-chocolate',
    number: '03',
    title: 'Double Chocolate Ice Cream',
    technique: '3D inflated typography',
    description: 'Tactile, volumetric letterforms styled with playful sculpted surface depth.',
    asset: SELECTED_PROJECTS[2].assets[2],
  },
  {
    id: 'high-camp',
    number: '04',
    title: 'High Camp',
    technique: 'Halftone typography',
    description: 'Expressive type treatment structured around dotted halftone pattern contrast.',
    asset: SELECTED_PROJECTS[2].assets[3],
  },
  {
    id: 'make-in-india',
    number: '05',
    title: 'Make in India',
    technique: 'Portrait-based typography',
    description: 'Integration of typographic contours within a figurative portrait composition.',
    asset: SELECTED_PROJECTS[2].assets[4],
  },
  {
    id: 'self-portrait-typo',
    number: '06',
    title: 'Self-Portrait Typography',
    technique: 'Letterform and portrait composition',
    description: 'Personal portrait study constructed through layered letterform texture.',
    asset: SELECTED_PROJECTS[2].assets[5],
  },
];

export const LOGO_STUDIES: LogoStudy[] = [
  {
    id: 'marico',
    number: '01',
    brandName: 'Marico',
    statusNote: 'Logo Study / Concept',
    description:
      'A logo study using organic leaf-inspired forms and a blue-green colour palette.',
    paletteLabels: [
      { name: 'Deep Teal', hex: '#0E6B74' },
      { name: 'Botanical Green', hex: '#2F9E79' },
    ],
    asset: SELECTED_PROJECTS[3].assets[0],
  },
  {
    id: 'doms',
    number: '02',
    brandName: 'DOMS',
    statusNote: 'Logo Study / Concept',
    description:
      'A geometric logo study using orange lettering and simplified graphic forms.',
    paletteLabels: [
      { name: 'Vibrant Orange', hex: '#EA5B1C' },
      { name: 'Charcoal', hex: '#252525' },
    ],
    asset: SELECTED_PROJECTS[3].assets[1],
  },
  {
    id: 'pragya-makeup',
    number: '03',
    brandName: 'Pragya Makeup Artist',
    statusNote: 'Wordmark Concept',
    description:
      'A wordmark concept using elegant typography and a soft rose-toned palette.',
    paletteLabels: [
      { name: 'Soft Rose', hex: '#C98A95' },
      { name: 'Muted Plum', hex: '#8C535E' },
    ],
    asset: SELECTED_PROJECTS[3].assets[2],
  },
  {
    id: 'aveena-jewels',
    number: '04',
    brandName: 'Aveena Jewels',
    statusNote: 'Identity Concept',
    description:
      'A jewellery identity concept using golden visual elements, typography and a circular emblem.',
    paletteLabels: [
      { name: 'Warm Gold', hex: '#C8A24B' },
      { name: 'Obsidian', hex: '#252525' },
    ],
    asset: SELECTED_PROJECTS[3].assets[3],
  },
];

export const VISUAL_EXPLORATIONS: ArtworkAsset[] = [
  SELECTED_PROJECTS[0].assets[0],
  SELECTED_PROJECTS[2].assets[4],
  SELECTED_PROJECTS[1].assets[0],
  SELECTED_PROJECTS[2].assets[0],
  SELECTED_PROJECTS[0].assets[2],
  SELECTED_PROJECTS[3].assets[3],
  SELECTED_PROJECTS[2].assets[2],
  SELECTED_PROJECTS[1].assets[1],
  SELECTED_PROJECTS[2].assets[5],
  SELECTED_PROJECTS[3].assets[0],
];

export const EDUCATION_LIST: EducationEntry[] = [
  {
    id: 'phd-visual-art',
    degree: 'PhD in Visual Art',
    field: 'Visual Art',
    institution: 'IIS (Deemed to be University)',
    location: 'Jaipur, Rajasthan',
    period: '2026 – Present',
    status: 'Pursuing',
  },
  {
    id: 'mva-applied-art',
    degree: 'Master of Visual Arts (MVA)',
    field: 'Applied Art',
    institution: 'Rajasthan School of Art',
    location: 'Jaipur',
    period: '2023–2025',
  },
  {
    id: 'bva-applied-art',
    degree: 'Bachelor of Visual Arts (BVA)',
    field: 'Applied Art',
    institution: 'Rajasthan School of Art',
    location: 'Jaipur',
    period: '2019–2023',
  },
];

export const TEACHING_EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'asst-prof-jvwu',
    role: 'Assistant Professor',
    department: 'Department of Fashion & Fine Arts',
    organization: "Jayoti Vidyapeeth Women's University",
    location: 'Jaipur',
    period: 'Dates / Status Editable',
    type: 'teaching',
    editableNote: 'Editable employment entry — update exact dates when confirmed.',
  },
];

export const PROFESSIONAL_DESIGN_EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'trend-media',
    role: 'Graphic Designer',
    organization: 'The Trend Media',
    location: 'Jaipur',
    period: '30 November 2023 – 27 February 2024',
    type: 'design',
  },
  {
    id: 'websitexnetwork',
    role: 'Graphic Design Intern',
    organization: 'WebsiteXnetwork',
    location: 'Jaipur',
    period: '18 May 2023 – 18 June 2023',
    type: 'design',
  },
  {
    id: 'tutankhamun-show',
    role: 'Intern',
    organization: 'TUTANKHAMUN: Secrets & Treasures International Art Show',
    location: 'Exhibition Internship',
    period: '7 September 2022 – 27 October 2022',
    type: 'design',
  },
];

export const PUBLICATIONS: PublicationEntry[] = [
  {
    id: 'icetda-2024',
    kind: 'Research Paper',
    title: 'Digital Photo Drawing: Exploring the Synergy of Photography and Illustration',
    venueOrBook:
      '2nd International Conference on Emerging Trends in Design & Arts (ICETDA 2024)',
    organizerOrPublisher:
      'Organised by the Faculty of Design and Arts, Poornima University, Jaipur, in association with the India Institute of Crafts and Design (IICD), Jaipur',
    date: '5–6 April 2024',
  },
  {
    id: 'book-chapter-01',
    kind: 'Book Chapter',
    number: '01',
    title: 'The Silent Voice of Design: Rethinking Typography in the Digital Age',
    venueOrBook: 'Creative Convergence in the Digital Era – Volume II',
    organizerOrPublisher: 'Bhumi Publishing',
    date: 'September 2026',
    isbn: '978-81-69967-04-4',
  },
  {
    id: 'book-chapter-02',
    kind: 'Book Chapter',
    number: '02',
    title: 'Navigating the Terrain: Challenges Confronting Indian Start-ups',
    venueOrBook: 'Management: Concepts and Research',
    organizerOrPublisher: 'RDRA Publishers & Distributors',
    date: '2024',
    isbn: '978-93-88361-62-0',
  },
];

export const AWARDS_LIST = [
  {
    id: 'award-non-violence',
    title: 'Runner-up – Photography Competition',
    organizer: 'Organised by Prevalence of Non-Violence',
    date: '29 August 2023',
  },
  {
    id: 'award-jcompany',
    title: 'Award for Excellent Performance – National Art Contest',
    organizer: 'Organised by Jcompany',
    date: '1 April 2023',
  },
];

export const EXHIBITIONS_LIST = [
  {
    id: 'ex-kalaparv-2024',
    title: "18th International Art Festival, Kalaparv Crayon's Tonk",
    year: '2024',
  },
  {
    id: 'ex-kishangarh-2023',
    title: 'National Level IV Art Exhibition, Kishangarh',
    year: '2023',
  },
  {
    id: 'ex-kala-mela-23',
    title: '23rd Kala Mela, Rajasthan Lalit Kala Akademi, Jaipur',
    year: '2023',
  },
  {
    id: 'ex-kala-mela-22',
    title: '22nd Kala Mela, Rajasthan Lalit Kala Akademi, Jaipur',
    year: '2022',
  },
  {
    id: 'ex-rang-malhaar-2022',
    title: '13th International Rang-Malhaar, Rajasthan Lalit Kala Akademi',
    year: '2022',
  },
  {
    id: 'ex-jkk-2021',
    title:
      '5th Jaipur Kala Mahotsav, Jawahar Kala Kendra – Digital Illustration Exhibition and Poster Design Competition',
    year: '2021',
  },
  {
    id: 'ex-krishna-2021',
    title: 'Online National Art Exhibition, Krishna',
    year: '2021',
  },
  {
    id: 'ex-freedom-2021',
    title: 'Online International Art Exhibition, Freedom',
    year: '2021',
  },
];
