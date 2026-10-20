export type Project = {
  slug: string;
  number: string;
  title: string;
  type: string;
  description: string;
  category: string;
  tone: "mint" | "peach" | "blue";
  href: string;
  repositoryHref: string | null;
};

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    number: "01",
    title: "Bazar Dor",
    type: "Market price tracker",
    description: "A local market price guide for comparing everyday products and following price changes.",
    category: "Price tracking",
    tone: "mint",
    href: "https://bazar-dor-beta-ten.vercel.app/",
    repositoryHref: "https://github.com/naziachowdhurydev/Bazarador-web",
  },
  {
    slug: "explore-technologies",
    number: "02",
    title: "Explore Technologies",
    type: "Technology discovery",
    description: "A developer-focused resource for exploring technologies and building a development stack.",
    category: "Developer tools",
    tone: "peach",
    href: "https://explore-technologies.netlify.app/",
    repositoryHref: "https://github.com/naziachowdhurydev/Explore-Technologyyy",
  },
  {
    slug: "fitlog",
    number: "03",
    title: "FitLog",
    type: "Workout library",
    description: "A workout library experience for discovering training ideas and keeping fitness goals in view.",
    category: "Fitness",
    tone: "blue",
    href: "https://b14-a6-fit-log-virid.vercel.app/",
    repositoryHref: "https://github.com/naziachowdhurydev/B14-A6-Fit-Log",
  },
];
