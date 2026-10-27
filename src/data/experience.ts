import type { Lang } from './site';

type T = Record<Lang, string>;

export interface Role {
  title: T;
  period: T;
  note: T;
}

export interface Employer {
  org: string;
  url?: string;
  where: T;
  roles: Role[];
}

// Most recent first. Tokidos roles are grouped so the progression reads as one line of work.
export const experience: Employer[] = [
  {
    org: 'Tokidos',
    url: 'https://tokidos.com',
    where: { en: 'Remote', fr: 'À distance' },
    roles: [
      {
        title: { en: 'Full-stack developer', fr: 'Développeur full-stack' },
        period: { en: 'May 2026 – now', fr: 'mai 2026 – auj.' },
        note: {
          en: 'Rebuilding the app in Flutter to replace the WebView + native hybrid. Auth, WebView performance, cross-device testing.',
          fr: "Réécriture de l'application en Flutter pour remplacer l'hybride WebView + natif. Authentification, performance WebView, tests multiappareils.",
        },
      },
      {
        title: { en: 'Full-stack developer intern', fr: 'Stagiaire, développement full-stack' },
        period: { en: 'Jan – Apr 2026', fr: 'janv. – avr. 2026' },
        note: {
          en: 'JavaScript and Node.js work on the web-based mobile app.',
          fr: "JavaScript et Node.js sur l'application mobile web.",
        },
      },
      {
        title: { en: 'Data analytics intern', fr: 'Stagiaire, analyse de données' },
        period: { en: 'Aug 2025 – Jan 2026', fr: 'août 2025 – janv. 2026' },
        note: {
          en: 'Gameplay and voice metrics, engagement dashboards, testing the recommendation system.',
          fr: "Métriques de jeu et de voix, tableaux de bord d'engagement, tests du système de recommandation.",
        },
      },
      {
        title: { en: 'Full-stack developer intern', fr: 'Stagiaire, développement full-stack' },
        period: { en: 'May – Aug 2025', fr: 'mai – août 2025' },
        note: {
          en: 'Internal tools for orders, subscriptions and support: KPI and support dashboards.',
          fr: 'Outils internes pour les commandes, abonnements et le soutien : tableaux de bord KPI et support.',
        },
      },
      {
        title: { en: 'Customer and technical support', fr: 'Service à la clientèle et soutien technique' },
        period: { en: 'Nov 2024 – now', fr: 'nov. 2024 – auj.' },
        note: {
          en: 'Shopify Inbox for customers, AWS CloudWatch for figuring out what broke.',
          fr: 'Shopify Inbox pour les clients, AWS CloudWatch pour trouver ce qui a brisé.',
        },
      },
    ],
  },
  {
    org: 'Euro Gear',
    url: 'https://eurogearinc.com',
    where: { en: 'Remote', fr: 'À distance' },
    roles: [
      {
        title: { en: 'Web & SEO manager', fr: 'Responsable web et SEO' },
        period: { en: 'Dec 2025 – now', fr: 'déc. 2025 – auj.' },
        note: {
          en: 'Rebuilt eurogearinc.com and keep it running: hosting, deploys, performance, search.',
          fr: "Refonte d'eurogearinc.com et maintien du site : hébergement, déploiements, performance, référencement.",
        },
      },
    ],
  },
  {
    org: 'KernelOp',
    url: 'https://kernelop.com',
    where: { en: 'Montréal', fr: 'Montréal' },
    roles: [
      {
        title: { en: 'Founder', fr: 'Fondateur' },
        period: { en: '2026 – now', fr: '2026 – auj.' },
        note: {
          en: 'A small software studio. I build, host and maintain the sites and apps myself.',
          fr: "Un petit studio logiciel. Je conçois, héberge et maintiens moi-même les sites et applications.",
        },
      },
    ],
  },
  {
    org: 'Department of National Defence',
    where: { en: 'Québec', fr: 'Québec' },
    roles: [
      {
        title: { en: 'Field service technician intern', fr: 'Stagiaire, technicien de service' },
        period: { en: 'May – Aug 2024', fr: 'mai – août 2024' },
        note: {
          en: 'IT support across Québec: hardware, software, backups, asset tracking.',
          fr: 'Soutien informatique partout au Québec : matériel, logiciels, sauvegardes, inventaire.',
        },
      },
    ],
  },
];

export const education = [
  {
    school: 'Concordia University',
    degree: { en: 'BEng, Computer Engineering', fr: 'B. Ing., génie informatique' },
    period: { en: '2026 – 2031', fr: '2026 – 2031' },
    note: { en: 'First year.', fr: 'Première année.' },
  },
  {
    school: 'Vanier College',
    degree: { en: 'DEC, Computer Science and Technology', fr: 'DEC, techniques de l’informatique' },
    period: { en: '2023 – 2026', fr: '2023 – 2026' },
    note: {
      en: "Dean's List three times (W23, F23, F24). Presented my Tokidos internship project to the school.",
      fr: "Palmarès du doyen trois fois (H23, A23, A24). Présentation de mon projet de stage chez Tokidos devant le collège.",
    },
  },
];

export const extras = {
  certs: [{ name: 'CS50x: Introduction to Computer Science', by: 'Harvard', year: '2024' }],
  events: [
    { name: 'Vanier Hacks', year: '2025', note: { en: 'Honourable mention, better code', fr: 'Mention honorable, meilleur code' } },
    { name: 'Bell Geekfest Hackathon Québec', year: '2023', note: { en: 'Built SecureSend', fr: 'Création de SecureSend' } },
    { name: 'McGill Physics Hackathon', year: '2023', note: { en: 'Participant', fr: 'Participant' } },
  ],
  languages: {
    en: 'English, French, conversational Spanish and Italian',
    fr: 'Anglais, français, espagnol et italien (intermédiaire)',
  },
};
