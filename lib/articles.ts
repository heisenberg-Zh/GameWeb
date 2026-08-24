export type ArticleStatus = "verified" | "versioned" | "pending";

export type Article = {
  section: string;
  slug: string;
  keyword: string;
  title: string;
  summary: string;
  category: string;
  status: ArticleStatus;
  readTime: string;
  file?: string;
  related: string[];
};

export const articles: Article[] = [
  {
    section: "guides",
    slug: "dust-front-rts-guide",
    keyword: "Dust Front RTS guide",
    title: "Dust Front RTS Guide: Systems, Units and Strategy",
    summary: "A source-checked overview of the confirmed RTS systems, public Demo, economy, production and battlefield planning.",
    category: "Guide",
    status: "verified",
    readTime: "9 min",
    file: "dust-front-rts-guide.mdx",
    related: ["dust-front-rts-beginner-guide", "dust-front-rts-demo", "dust-front-rts-build-order"]
  },
  {
    section: "guides",
    slug: "dust-front-rts-beginner-guide",
    keyword: "Dust Front RTS beginner guide",
    title: "Dust Front RTS Beginner Guide: Your First Operation",
    summary: "A cautious first-session plan built around confirmed base construction, resources, factories and mixed military forces.",
    category: "Guide",
    status: "versioned",
    readTime: "10 min",
    file: "dust-front-rts-beginner-guide.mdx",
    related: ["dust-front-rts-build-order", "dust-front-rts-economy-guide", "dust-front-rts-base-building"]
  },
  {
    section: "guides",
    slug: "dust-front-rts-demo",
    keyword: "Dust Front RTS demo",
    title: "Dust Front RTS Demo: Availability and What to Verify",
    summary: "Where to find the official Steam Demo and how to distinguish current playable features from planned full-game systems.",
    category: "Demo",
    status: "verified",
    readTime: "6 min",
    file: "dust-front-rts-demo.mdx",
    related: ["dust-front-rts-beginner-guide", "dust-front-rts-guide", "dust-front-rts-hardest-difficulty"]
  },
  {
    section: "guides",
    slug: "dust-front-rts-build-order",
    keyword: "Dust Front RTS build order",
    title: "Dust Front RTS Build Order: A Flexible Demo Framework",
    summary: "A version-aware opening framework that prioritizes information, sustainable production and defensive flexibility.",
    category: "Build Order",
    status: "versioned",
    readTime: "10 min",
    file: "dust-front-rts-build-order.mdx",
    related: ["dust-front-rts-economy-guide", "dust-front-rts-base-building", "dust-front-rts-factory-production"]
  },
  {
    section: "systems",
    slug: "dust-front-rts-economy-guide",
    keyword: "Dust Front RTS economy guide",
    title: "Dust Front RTS Economy Guide: Resources to Production",
    summary: "How to reason about extraction, processing, storage, factories and army spending without relying on unverified values.",
    category: "Economy",
    status: "versioned",
    readTime: "9 min",
    file: "dust-front-rts-economy-guide.mdx",
    related: ["dust-front-rts-factory-production", "dust-front-rts-base-building", "dust-front-rts-build-order"]
  },
  {
    section: "systems",
    slug: "dust-front-rts-base-building",
    keyword: "Dust Front RTS base building",
    title: "Dust Front RTS Base Building: Layout and Resilience",
    summary: "A practical layout method for production, storage, reinforcement routes and defense based on confirmed game pillars.",
    category: "Base Building",
    status: "versioned",
    readTime: "9 min",
    file: "dust-front-rts-base-building.mdx",
    related: ["dust-front-rts-economy-guide", "dust-front-rts-factory-production", "dust-front-rts-hardest-difficulty"]
  },
  {
    section: "systems",
    slug: "dust-front-rts-factory-production",
    keyword: "Dust Front RTS factory production",
    title: "Dust Front RTS Factory Production and Queue Planning",
    summary: "A source-aware approach to factory roles, production queues, bottlenecks and reinforcement timing.",
    category: "Factory",
    status: "versioned",
    readTime: "8 min",
    file: "dust-front-rts-factory-production.mdx",
    related: ["dust-front-rts-economy-guide", "dust-front-rts-tanks-guide", "dust-front-rts-army-composition"]
  },
  {
    section: "units",
    slug: "dust-front-rts-tanks-guide",
    keyword: "Dust Front RTS tanks guide",
    title: "Dust Front RTS Tanks Guide: Roles and Combined Arms",
    summary: "Confirmed vehicle context and a conservative framework for positioning armor without inventing unit statistics.",
    category: "Units",
    status: "versioned",
    readTime: "8 min",
    file: "dust-front-rts-tanks-guide.mdx",
    related: ["dust-front-rts-army-composition", "dust-front-rts-factory-production", "dust-front-rts-scouting-guide"]
  },
  {
    section: "strategy",
    slug: "dust-front-rts-army-composition",
    keyword: "Dust Front RTS army composition",
    title: "Dust Front RTS Army Composition: Build for the Mission",
    summary: "A scenario-based combined-arms framework using only confirmed infantry, vehicle and aviation categories.",
    category: "Units",
    status: "versioned",
    readTime: "9 min",
    file: "dust-front-rts-army-composition.mdx",
    related: ["dust-front-rts-tanks-guide", "dust-front-rts-scouting-guide", "dust-front-rts-hardest-difficulty"]
  },
  {
    section: "difficulty",
    slug: "dust-front-rts-hardest-difficulty",
    keyword: "Dust Front RTS hardest difficulty",
    title: "Dust Front RTS Hardest Difficulty: Survival Framework",
    summary: "A versioned checklist for economy protection, production continuity, reconnaissance and defensive recovery.",
    category: "Hardest Difficulty",
    status: "versioned",
    readTime: "9 min",
    file: "dust-front-rts-hardest-difficulty.mdx",
    related: ["dust-front-rts-build-order", "dust-front-rts-base-building", "dust-front-rts-army-composition"]
  },
  {
    section: "factions",
    slug: "dust-front-rts-factions",
    keyword: "Dust Front RTS factions",
    title: "Dust Front RTS Factions: Confirmed Information",
    summary: "The public description mentions competing powers and enemy groups, but a complete playable faction list is not yet verified.",
    category: "Factions",
    status: "pending",
    readTime: "2 min",
    related: ["dust-front-rts-best-faction", "dust-front-rts-guide"]
  },
  {
    section: "factions",
    slug: "dust-front-rts-best-faction",
    keyword: "Dust Front RTS best faction",
    title: "Dust Front RTS Best Faction: Evidence Required",
    summary: "A fixed best-faction ranking would be misleading until playable factions and current balance can be verified.",
    category: "Factions",
    status: "pending",
    readTime: "2 min",
    related: ["dust-front-rts-factions", "dust-front-rts-army-composition"]
  },
  {
    section: "systems",
    slug: "dust-front-rts-tech-tree",
    keyword: "Dust Front RTS tech tree",
    title: "Dust Front RTS Tech Tree: Current Verification Status",
    summary: "Technology branches are part of the official description, but the complete node list and optimal route remain unverified.",
    category: "Technology",
    status: "pending",
    readTime: "2 min",
    related: ["dust-front-rts-factory-production", "dust-front-rts-economy-guide"]
  },
  {
    section: "units",
    slug: "dust-front-rts-aircraft-guide",
    keyword: "Dust Front RTS aircraft guide",
    title: "Dust Front RTS Aircraft Guide: Awaiting Demo Evidence",
    summary: "Aviation is named in public materials, but current aircraft types, costs and operational rules require verification.",
    category: "Units",
    status: "pending",
    readTime: "2 min",
    related: ["dust-front-rts-army-composition", "dust-front-rts-tanks-guide"]
  },
  {
    section: "units",
    slug: "dust-front-rts-infantry-guide",
    keyword: "Dust Front RTS infantry guide",
    title: "Dust Front RTS Infantry Guide: Confirmed Scope",
    summary: "Infantry is confirmed as a military category, while specific squads, weapons and values remain to be documented.",
    category: "Units",
    status: "pending",
    readTime: "2 min",
    related: ["dust-front-rts-army-composition", "dust-front-rts-tanks-guide"]
  },
  {
    section: "strategy",
    slug: "dust-front-rts-global-map-guide",
    keyword: "Dust Front RTS global map guide",
    title: "Dust Front RTS Global Map Guide: Feature Status",
    summary: "The official description discusses territory, economy, events and garrisons; Demo availability still needs verification.",
    category: "Map Strategy",
    status: "pending",
    readTime: "2 min",
    related: ["dust-front-rts-campaign-guide", "dust-front-rts-procedural-missions"]
  },
  {
    section: "strategy",
    slug: "dust-front-rts-scouting-guide",
    keyword: "Dust Front RTS scouting guide",
    title: "Dust Front RTS Scouting Guide: Verification Tracker",
    summary: "Reconnaissance advice needs current Demo footage before general RTS habits can be described as game-specific mechanics.",
    category: "Map Strategy",
    status: "pending",
    readTime: "2 min",
    related: ["dust-front-rts-army-composition", "dust-front-rts-global-map-guide"]
  },
  {
    section: "campaign",
    slug: "dust-front-rts-campaign-guide",
    keyword: "Dust Front RTS campaign guide",
    title: "Dust Front RTS Campaign Guide: Awaiting Full Details",
    summary: "A non-linear campaign is confirmed, but a mission sequence or walkthrough cannot be verified from current materials.",
    category: "Campaign",
    status: "pending",
    readTime: "2 min",
    related: ["dust-front-rts-global-map-guide", "dust-front-rts-procedural-missions"]
  },
  {
    section: "campaign",
    slug: "dust-front-rts-procedural-missions",
    keyword: "Dust Front RTS procedural missions",
    title: "Dust Front RTS Procedural Missions: What Is Confirmed",
    summary: "Procedural world generation is confirmed, while mission variables, probabilities and rewards are not public.",
    category: "Campaign",
    status: "pending",
    readTime: "2 min",
    related: ["dust-front-rts-campaign-guide", "dust-front-rts-global-map-guide"]
  },
  {
    section: "weapons",
    slug: "dust-front-rts-nuclear-weapon",
    keyword: "Dust Front RTS nuclear weapon",
    title: "Dust Front RTS Nuclear Weapon: Implementation Status",
    summary: "Public materials mention destructive superweapons, but current availability and unlock conditions are not verified.",
    category: "Nuclear Weapon",
    status: "pending",
    readTime: "2 min",
    related: ["dust-front-rts-tech-tree", "dust-front-rts-campaign-guide"]
  }
];

export const articleBySlug = (slug: string) => articles.find((article) => article.slug === slug);

export const articleHref = (article: Article) => `/${article.section}/${article.slug}`;

export const categories = Array.from(new Set(articles.map((article) => article.category)));
