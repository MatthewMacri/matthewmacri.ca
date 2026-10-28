import type { Lang } from './site';

export const t = {
  en: {
    nav: { work: 'Work', about: 'About', resume: 'Resume', other: 'Français', otherShort: 'FR' },
    skip: 'Skip to content',
    intro:
      'I write software in Montréal. Full-stack developer at Tokidos, web and SEO at Euro Gear, and first-year Computer Engineering at Concordia. I also run <a href="https://kernelop.com">KernelOp</a>, a small software studio.',
    badge: 'Full-stack developer · Montréal',
    seeWork: 'See my work',
    emailMe: 'Email me',
    glance: [
      ['Working at', 'Tokidos, Euro Gear'],
      ['Studying', 'Computer Eng., Concordia'],
      ['Running', 'KernelOp'],
      ['Based in', 'Montréal, QC'],
    ],
    contactTitle: 'Let’s talk',
    now: 'Now',
    updated: 'updated',
    nowItems: [
      ['Tokidos', 'Rewriting the app in Flutter so it stops being a WebView in a native shell.'],
      ['Concordia', 'First semester of Computer Engineering.'],
      ['MotoRoute', 'Working toward the iOS release.'],
      ['This site', 'Rebuilt from scratch in October. Static HTML, almost no JavaScript.'],
    ],
    selected: 'Selected work',
    allWork: 'All work',
    experience: 'Experience',
    contact: 'Contact',
    contactBody:
      'Email is the best way to reach me, about work, a project or anything on this site. I usually reply within a day or two. I’m also on <a href="{github}">GitHub</a> and <a href="{linkedin}">LinkedIn</a>.',
    footerTime: 'in Montréal',
    lastUpdated: 'Last updated',
    theme: 'Theme',
  },
  fr: {
    nav: { work: 'Projets', about: 'À propos', resume: 'CV', other: 'English', otherShort: 'EN' },
    skip: 'Aller au contenu',
    intro:
      'J’écris du logiciel à Montréal. Développeur full-stack chez Tokidos, web et SEO chez Euro Gear, et première année en génie informatique à Concordia. Je dirige aussi <a href="https://kernelop.com">KernelOp</a>, un petit studio logiciel.',
    badge: 'Développeur full-stack · Montréal',
    seeWork: 'Voir mes projets',
    emailMe: 'M’écrire',
    glance: [
      ['Je travaille chez', 'Tokidos, Euro Gear'],
      ['J’étudie', 'Génie informatique, Concordia'],
      ['Je dirige', 'KernelOp'],
      ['Basé à', 'Montréal, QC'],
    ],
    contactTitle: 'On s’en parle',
    now: 'En ce moment',
    updated: 'mis à jour le',
    nowItems: [
      ['Tokidos', 'Réécriture de l’app en Flutter pour qu’elle cesse d’être une WebView dans une coquille native.'],
      ['Concordia', 'Première session en génie informatique.'],
      ['MotoRoute', 'En route vers la sortie iOS.'],
      ['Ce site', 'Refait de zéro en octobre. Du HTML statique, presque pas de JavaScript.'],
    ],
    selected: 'Projets choisis',
    allWork: 'Tous les projets',
    experience: 'Expérience',
    contact: 'Contact',
    contactBody:
      'Le courriel, c’est le plus simple, que ce soit pour un poste, un projet ou une question sur ce site. Je réponds habituellement en un jour ou deux. Aussi sur <a href="{github}">GitHub</a> et <a href="{linkedin}">LinkedIn</a>.',
    footerTime: 'à Montréal',
    lastUpdated: 'Dernière mise à jour',
    theme: 'Thème',
  },
} as const;

export function fill(s: string, vars: Record<string, string>) {
  return s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
}

export type Strings = (typeof t)[Lang];
