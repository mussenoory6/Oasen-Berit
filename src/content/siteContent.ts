export const siteContent = {
  company: {
    name: "Oasen i Djursholm",
    tagline: "Professionell hudvård i Djursholm sedan 1999",
    phone: "073-679 61 62",
    phoneHref: "tel:0736796162",
    email: "beritshudvard@yahoo.se",
    address: "Vendevägen 15, 182 60 Djursholm",
    addressLine2: "Djursholms Torg",
    bookingUrl: "https://oasisasis.netlify.app/boka",
    logoUrl: "/placeholder-logo.svg",
    treater: "Berit Falk",
    treaterTitle: "Aukt. Hudterapeut & Grundare",
    initials: "BF",
    footerTagline: "Professionell hudvård · Djursholm sedan 1999",
  },

  theme: {
    accent: "#5c9090",
  },

  hero: {
    badge: "Auktoriserad hudterapeut · Djursholm · Sedan 1999",
    headline: "Din oas för\nprofessionell hudvård",
    subheadline:
      "Välkommen till Oasen i Djursholm — din destination för avancerad hudvård med moderna behandlingar. Berit Falk erbjuder Madonna-behandling, E-light och skräddarsydda hudvårdsbehandlingar med över 40 års erfarenhet.",
    cta: {
      primary: "Boka behandling",
      primaryUrl: "https://oasisasis.netlify.app/boka",
      secondary: "Se behandlingar",
      secondaryUrl: "#tjanster",
    },
    heroImage: "/placeholder-hero.jpg",
    heroCard: {
      label: "Våra specialiteter",
      title: "Avancerad hudvård och hudföryngring",
      items: [
        { icon: "✦", label: "Madonna-behandling", desc: "Signaturbehandling för hudföryngring" },
        { icon: "✦", label: "E-light / IPL", desc: "Hårborttagning och hudföryngring" },
        { icon: "✦", label: "Ansiktsbehandling", desc: "Klassisk och avancerad hudvård" },
      ],
    },
  },

  about: {
    sectionLabel: "01 — Om oss",
    headline: "Möt Berit Falk",
    headlineEm: "auktoriserad hudterapeut & grundare",
    quote: "Prova gärna olika behandlingsformer men ge varje behandling sin tid. Att hoppa mellan olika former under samma tid kommer bara att skapa frustration.",
    bio: "Berit grundade Oasen 1999 med visionen att skapa en verklig oas för välmående i hjärtat av Djursholm. Med över 40 års erfarenhet som auktoriserad hudterapeut erbjuder hon moderna och resultatinriktade behandlingar — från klassisk ansiktsbehandling till avancerade tekniker som Madonna-behandling och E-light.",
    bio2: "På Oasen arbetar vi utifrån din huds unika förutsättningar. Varje behandling är individuellt anpassad för att ge dig bästa möjliga resultat — med vetenskapligt beprövade metoder och professionella produkter. Välkommen att boka en konsultation.",
    image: "/bild1.png",
    credentials: [
      "Auktoriserad hudterapeut",
      "Specialist på Madonna-behandling",
      "Certifierad E-light & IPL-terapeut",
    ],
  },

  services: {
    title: "Våra hudvårdsbehandlingar",
    subtitle:
      "Från klassisk ansiktsbehandling till avancerad hudföryngring — välj den behandling som passar din hud.",
    categories: [
      {
        id: "ansiktsbehandling" as const,
        label: "Ansiktsbehandling",
        tagline: "Klassisk hudvård",
        fromPrice: "Från 695 kr",
        description:
          "Professionella ansiktsbehandlingar anpassade efter din hudtyp. Djuprengöring, portömning, exfoliering och återfuktning — för en klar och strålande hy.",
        highlights: ["Djuprengöring med ånga", "Individuell hudanalys", "Anpassad mask och serum"],
        packages: [],
        services: [
          {
            name: "Klassisk ansiktsbehandling",
            description: "Grundlig rengöring, portömning och anpassad mask för din hudtyp",
            duration: "60 min",
            price: "695 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
          {
            name: "Djupgående ansiktsbehandling",
            description: "Intensiv behandling med ångöppning, peeling och näring anpassad för känslig och problemhy",
            duration: "75 min",
            price: "895 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
          {
            name: "Anti-age ansiktsbehandling",
            description: "Lyftande och stramande behandling mot linjer och rynkor med aktiva serum",
            duration: "75 min",
            price: "995 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
          {
            name: "Ansiktsbehandling med ryggmassage",
            description: "Klassisk ansiktsbehandling kombinerad med avslappnande rygg- och nackjmassage",
            duration: "90 min",
            price: "1 195 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
        ],
      },
      {
        id: "madonna" as const,
        label: "Madonna-behandling",
        tagline: "Signaturbehandling för hudföryngring",
        fromPrice: "Från 1 200 kr",
        description:
          "Oasens signaturbehandling för hudföryngring. Madonna-behandlingen kombinerar microdermabrasion med avancerade aktiva substanser för en märkbart ungdomligare och strålande hy.",
        highlights: ["Microdermabrasion", "Kollagenstimulerande serum", "Synbart lyftande resultat"],
        packages: [],
        services: [
          {
            name: "Madonna-behandling — Standard",
            description: "Microdermabrasion med djupverkande serum för omedelbar hudföryngring",
            duration: "60 min",
            price: "1 200 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
          {
            name: "Madonna-behandling — Intensiv",
            description: "Utökad behandling med starkare exfoliering och premiumserum för maximalt resultat",
            duration: "90 min",
            price: "1 595 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
          {
            name: "Madonna-behandling — Kur 4 tillfällen",
            description: "Fyra behandlingar för långsiktigt och bestående resultat",
            duration: "60 min / tillfälle",
            price: "4 400 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
        ],
      },
      {
        id: "elight" as const,
        label: "E-light & IPL",
        tagline: "Hårborttagning & hudföryngring",
        fromPrice: "Från 895 kr",
        description:
          "E-light kombinerar IPL (intensivt pulsljus) med radiofrekvens för effektiv och skonsam hårborttagning och hudföryngring. Behandlar pigment, ytliga blodkärl och stimulerar kollagen.",
        highlights: ["Permanent hårborttagning", "Pigment- och kärlbehandling", "Kollagenstimulerande"],
        packages: [],
        services: [
          {
            name: "E-light hårborttagning — Ansikte",
            description: "Effektiv permanent hårborttagning i ansiktet med E-light IPL",
            duration: "30 min",
            price: "895 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
          {
            name: "E-light hårborttagning — Kropp",
            description: "Permanent hårborttagning på kropp — axlar, armar, ben eller bikinilinjen",
            duration: "45 min",
            price: "1 195 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
          {
            name: "E-light hudföryngring — Ansikte",
            description: "IPL-behandling mot pigment, rosacea och ytliga blodkärl. Ger jämnare och klarare hy.",
            duration: "45 min",
            price: "1 295 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
          {
            name: "E-light behandling — Kur 6 tillfällen",
            description: "Sex behandlingar för optimalt och bestående resultat",
            duration: "30–45 min / tillfälle",
            price: "4 995 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
        ],
      },
      {
        id: "avancerad" as const,
        label: "Avancerad hudvård",
        tagline: "Peeling & specialbehandlingar",
        fromPrice: "Från 795 kr",
        description:
          "Avancerade hudvårdsbehandlingar för dig som vill ta ytterligare ett steg för en förbättrad hudkvalitet. Kemisk peeling, aknebehandling och skräddarsydda specialbehandlingar.",
        highlights: ["Kemisk peeling", "Aknebehandling", "Pigmentkorrigering"],
        packages: [],
        services: [
          {
            name: "Kemisk peeling",
            description: "Exfoliering med syror för att förnya hudytan, minska pigment och fina linjer",
            duration: "45 min",
            price: "895 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
          {
            name: "Aknebehandling",
            description: "Intensivbehandling mot akne och problemhy med djuprengöring och antibakteriella aktiva",
            duration: "60 min",
            price: "795 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
          {
            name: "Pigmentkorrigering",
            description: "Målinriktad behandling mot pigmentfläckar och ojämn hudton",
            duration: "60 min",
            price: "1 095 kr",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
          {
            name: "Konsultation & hudanalys",
            description: "Personlig konsultation med Berit för att ta fram en behandlingsplan anpassad för dig",
            duration: "30 min",
            price: "Kostnadsfri",
            icon: "diamond",
            bookingUrl: "https://oasisasis.netlify.app/boka",
          },
        ],
      },
    ],
  },

  results: {
    title: "Våra Resultat",
    subtitle:
      "Naturliga förbättringar som föryngrar utan att förändra. Varje behandling är skräddarsydd efter din huds unika förutsättningar.",
    items: [
      { label: "Madonna-behandling", before: "/results/before1.png", after: "/results/after1.png" },
      { label: "E-light hudföryngring", before: "/results/before2.png", after: "/results/after2.png" },
      { label: "Kemisk peeling", before: "/results/before3.png", after: "/results/after3.png" },
      { label: "Ansiktsbehandling", before: "/results/before1.png", after: "/results/after1.png" },
    ],
  },

  stats: [
    { value: "1999", label: "Grundat" },
    { value: "40+", label: "Års erfarenhet" },
    { value: "25+", label: "År i Djursholm" },
  ],

  testimonials: {
    title: "Vad kunderna säger",
    subtitle: "Riktiga upplevelser från nöjda kunder",
    items: [
      {
        name: "Anna Lindström",
        text: "Berit är fantastisk! Madonna-behandlingen gav mig verkligen nytt liv i huden. Jag ser år yngre ut och huden känns strålande. Varmt rekommenderat!",
        rating: 5,
      },
      {
        name: "Maja Björk",
        text: "Jag har gjort E-light behandling hos Berit och är otroligt nöjd. Professionellt bemötande och fantastiskt resultat. Hårborttagningen är effektiv och skonsam.",
        rating: 5,
      },
      {
        name: "Kund 3",
        text: "Oasen är en verklig oas — precis som namnet antyder. Berit tar verkligen hand om en och anpassar behandlingen efter ens individuella behov. Bästa hudvården i Djursholm!",
        rating: 5,
      },
    ],
  },

  cta: {
    title: "Redo för en oas av välmående?",
    description:
      "Boka din hudvårdsbehandling hos Berit Falk på Oasen i Djursholm. Kostnadsfri konsultation ingår alltid.",
    buttonText: "Boka behandling",
    buttonUrl: "https://oasisasis.netlify.app/boka",
    secondaryText: "Ring 073-679 61 62",
    secondaryUrl: "tel:0736796162",
    backgroundImage: "/placeholder-cta.jpg",
  },

  contact: {
    title: "Hör av dig",
    description:
      "Har du frågor om en hudvårdsbehandling? Kontakta Berit direkt så återkommer hon så snart som möjligt. Kostnadsfri konsultation erbjuds alltid.",
  },

  googleReviews: {
    show: false,
    placeId: "",
  },

  aura: {
    intro: "Välkommen till Oasen i Djursholm! Jag är Aura — Berits digitala assistent. Hur kan jag hjälpa dig idag?",
    footer: "Oasen i Djursholm · Alltid här",
    quickReplies: [
      { id: "tider", label: "Boka tid" },
      { id: "madonna", label: "Madonna-behandling" },
      { id: "elight", label: "E-light & IPL" },
      { id: "priser", label: "Priser & behandlingar" },
      { id: "kontakt", label: "Kontakt & adress" },
    ],
    responses: {
      tider: "Du kan boka din tid enkelt via vår bokningssida. Klicka på 'Boka behandling' i menyn för att se alla tillgängliga tider — eller ring Berit direkt på 073-679 61 62.",
      priser: "Vi erbjuder klassisk ansiktsbehandling (från 695 kr), Madonna-behandling (från 1 200 kr), E-light hårborttagning (från 895 kr) och kemisk peeling (895 kr). Kostnadsfri konsultation ingår alltid. Välkommen att kontakta oss för en personlig behandlingsplan.",
      madonna: "Madonna-behandlingen är vår signaturbehandling för hudföryngring. Den kombinerar microdermabrasion med aktiva serum för en märkbart ungdomligare och strålande hy. Standard 60 min (1 200 kr), Intensiv 90 min (1 595 kr), eller kur 4 tillfällen (4 400 kr).",
      elight: "E-light kombinerar IPL (intensivt pulsljus) med radiofrekvens för effektiv hårborttagning och hudföryngring. Behandlar pigment, ytliga blodkärl och stimulerar kollagenproduktionen. Priser från 895 kr — boka en konsultation med Berit för att ta reda på vad som passar dig bäst.",
      kontakt: "Oasen hittar du på Vendevägen 15, Djursholms Torg, 182 60 Djursholm. Ring Berit på 073-679 61 62 eller skriv till beritshudvard@yahoo.se. Parkering: 3 timmars gratis parkering vid biblioteket.",
      adress: "Vi finns på Vendevägen 15, Djursholms Torg, 182 60 Djursholm — en lugn och välkomnande oas. Parkering finns vid biblioteket (3 timmar gratis). Välkommen!",
    },
    fallback: "Tack för ditt meddelande! Berit återkommer till dig så snart som möjligt. Du kan också ringa direkt på 073-679 61 62.",
  },

  booking: {
    categories: [
      {
        id: "ansiktsbehandling",
        icon: "✨",
        title: "Ansiktsbehandling",
        subtitle: "Klassisk hudvård",
        description: "Professionella ansiktsbehandlingar anpassade efter din hudtyp.",
        fromPrice: "Från 695 kr",
        treatments: [
          { name: "Klassisk ansiktsbehandling", description: "Djuprengöring och anpassad mask", duration: "60 min", price: "695 kr" },
          { name: "Djupgående ansiktsbehandling", description: "Intensiv behandling för problemhy", duration: "75 min", price: "895 kr" },
          { name: "Anti-age ansiktsbehandling", description: "Lyftande behandling mot linjer", duration: "75 min", price: "995 kr" },
          { name: "Ansiktsbehandling med ryggmassage", description: "Behandling och avslappning", duration: "90 min", price: "1 195 kr" },
        ],
      },
      {
        id: "madonna",
        icon: "💆",
        title: "Madonna-behandling",
        subtitle: "Signaturbehandling",
        description: "Oasens signaturbehandling för hudföryngring och microdermabrasion.",
        fromPrice: "Från 1 200 kr",
        treatments: [
          { name: "Madonna-behandling — Standard", description: "Microdermabrasion med serum", duration: "60 min", price: "1 200 kr" },
          { name: "Madonna-behandling — Intensiv", description: "Utökad med premiumserum", duration: "90 min", price: "1 595 kr" },
          { name: "Madonna-behandling — Kur 4 tillfällen", description: "Optimalt långsiktigt resultat", duration: "60 min / tillfälle", price: "4 400 kr" },
        ],
      },
      {
        id: "elight",
        icon: "🌟",
        title: "E-light & IPL",
        subtitle: "Hårborttagning & hudföryngring",
        description: "E-light IPL för effektiv och skonsam hårborttagning och hudföryngring.",
        fromPrice: "Från 895 kr",
        treatments: [
          { name: "E-light hårborttagning — Ansikte", description: "Permanent hårborttagning", duration: "30 min", price: "895 kr" },
          { name: "E-light hårborttagning — Kropp", description: "Effektiv och skonsam", duration: "45 min", price: "1 195 kr" },
          { name: "E-light hudföryngring", description: "Mot pigment och blodkärl", duration: "45 min", price: "1 295 kr" },
          { name: "E-light kur 6 tillfällen", description: "Bästa resultatet", duration: "30–45 min / tillfälle", price: "4 995 kr" },
        ],
      },
      {
        id: "avancerad",
        icon: "🌿",
        title: "Avancerad hudvård",
        subtitle: "Peeling & specialbehandlingar",
        description: "Kemisk peeling, aknebehandling och pigmentkorrigering.",
        fromPrice: "Från 795 kr",
        treatments: [
          { name: "Kemisk peeling", description: "Förnyar hudytan", duration: "45 min", price: "895 kr" },
          { name: "Aknebehandling", description: "Intensivt mot problemhy", duration: "60 min", price: "795 kr" },
          { name: "Pigmentkorrigering", description: "Jämnare hudton", duration: "60 min", price: "1 095 kr" },
          { name: "Konsultation & hudanalys", description: "Personlig behandlingsplan", duration: "30 min", price: "Kostnadsfri" },
        ],
      },
    ],
  },

  instagram: {
    handle: "@oasenidjursholm",
    url: "https://www.instagram.com/oasenidjursholm",
  },

  contactFormTreatments: [
    "Ansiktsbehandling",
    "Madonna-behandling",
    "E-light hårborttagning",
    "E-light hudföryngring",
    "Kemisk peeling",
    "Konsultation",
  ],
}
