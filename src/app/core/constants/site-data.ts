import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';

export const profile = {
  name: 'Minh Nguyen',
  badge: 'Frontend Developer',
  role: 'Frontend Developer | Angular Developer | TypeScript Enthusiast',
  email: 'minhnguyen.frontend@example.com',
  university: 'Thang Long University',
  location: 'Vietnam',
  description:
    'I am an Information Technology student at Thang Long University with a strong interest in Frontend Development. I enjoy building modern, responsive, and user-friendly web applications using Angular and TypeScript.',
  goal: 'Become a professional Frontend Developer and continuously improve through real-world projects.',
  github: 'https://github.com/Minhnt09',
  linkedin: '#',
};

export const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Contact', target: 'contact' },
];

export const projects: Project[] = [
  {
    slug: 'zamy-clothing-website',
    name: 'Zamy Clothing Website',
    eyebrow: 'Fashion E-commerce',
    description:
      'A modern fashion e-commerce website built with Angular and Tailwind CSS, featuring responsive shopping flows and a polished deployed frontend.',
    longDescription:
      'Zamy Clothing Website is a focused fashion storefront built around practical e-commerce patterns: product discovery, detail browsing, cart management, checkout flow, admin login, and a responsive Angular UI prepared for real users.',
    image: '/assets/videos/dev.mp4',
    links: {
      github: 'https://github.com/Minhnt09/Zamy',
      demo: 'https://zamy-minhnt09.vercel.app',
    },
    highlights: [
      'Product Listing',
      'Product Detail',
      'Shopping Cart',
      'Checkout',
      'Admin Login',
      'Deployed Frontend',
    ],
    technologies: ['Angular', 'Tailwind CSS', 'TypeScript', 'Responsive UI'],
  },
];

export const skills: Skill[] = [
  { name: 'HTML', icon: 'HTML', description: 'Semantic structure for accessible interfaces.' },
  { name: 'CSS', icon: 'CSS', description: 'Responsive layouts, motion, and visual systems.' },
  { name: 'JavaScript', icon: 'JS', description: 'Interactive browser experiences and logic.' },
  { name: 'TypeScript', icon: 'TS', description: 'Typed, maintainable frontend architecture.' },
  { name: 'Angular', icon: 'A', description: 'Standalone components, routing, forms, and RxJS.' },
  { name: 'Tailwind CSS', icon: 'TW', description: 'Fast utility-first styling with consistent systems.' },
  { name: 'RxJS', icon: 'RX', description: 'Reactive data streams and clean async state.' },
  { name: 'REST API', icon: 'API', description: 'Client integration with backend resources.' },
  { name: 'Git', icon: 'Git', description: 'Version control for disciplined project work.' },
  { name: 'GitHub', icon: 'GH', description: 'Repository collaboration and deployment workflows.' },
  { name: 'VS Code', icon: 'VS', description: 'Efficient development with modern tooling.' },
];

export const experiences: Experience[] = [
  {
    title: 'Information Technology Student',
    period: 'Thang Long University',
    description: 'Building a foundation in software, web technologies, and practical development habits.',
  },
  {
    title: 'Frontend Learning Journey',
    period: 'Angular and TypeScript',
    description: 'Studying component architecture, responsive UI, state, routing, and clean interaction design.',
  },
  {
    title: 'Building Zamy Clothing Website',
    period: 'E-commerce project',
    description: 'Created a full storefront experience with product pages, cart, checkout, admin login, and deployment.',
  },
  {
    title: 'Improving Angular, RxJS, UI/UX and Web Performance',
    period: 'Current focus',
    description: 'Refining animation quality, accessibility, API thinking, and production-ready frontend performance.',
  },
];
