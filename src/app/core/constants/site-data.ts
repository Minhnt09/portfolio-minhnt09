import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';

export const profile = {
  name: 'Nguyen Thien Minh',
  badge: 'Frontend Developer',
  role: 'Frontend Developer | Angular Developer | TypeScript Enthusiast',
  email: 'ntm2005.work@gmail.com',
  phone: '0904401145',
  university: 'Thang Long University',
  major: 'Computer Science',
  location: 'Vietnam',
  description:
    'Frontend Developer Fresher with experience building Angular web applications using TypeScript, RxJS, RESTful APIs, and responsive component-based UI architecture.',
  goal: 'Seeking an opportunity to grow as a Frontend Developer and contribute to real-world web application projects.',
  github: 'https://github.com/Minhnt09',
  linkedin: '#',
  english: 'TOEIC 650+',
};

export const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];

export const projects: Project[] = [
  {
    slug: 'zamy-clothing-website',
    name: 'Zamy Clothing Website',
    eyebrow: 'Angular Fashion E-commerce',
    description:
      'A responsive fashion e-commerce storefront built with Angular, Tailwind CSS, REST API integration, cart state management, checkout flow, and deployment on Vercel/Render.',
    longDescription:
      'Zamy Clothing Website is my main personal project: a responsive fashion e-commerce application with product listing, product detail, shopping cart, checkout pages, reusable Angular components, RESTful API integration, cart state management using RxJS BehaviorSubject and localStorage, Angular Routing, frontend deployment on Vercel, and backend API deployment on Render.',
    image: '/assets/images/backgrounds/image.png',
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
      'Lookbook Campaign UI',
      'RxJS BehaviorSubject',
      'localStorage Cart',
      'Vercel + Render Deployment',
      'Deployed Frontend',
    ],
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'REST API', 'Vercel', 'Render'],
  },
];

export const skills: Skill[] = [
  { name: 'HTML', icon: 'HTML', description: 'Semantic structure for accessible interfaces.' },
  { name: 'CSS / SCSS', icon: 'CSS', description: 'Responsive layouts, styling systems, and maintainable UI.' },
  { name: 'JavaScript', icon: 'JS', description: 'Interactive browser experiences and logic.' },
  { name: 'TypeScript', icon: 'TS', description: 'Typed, maintainable frontend architecture.' },
  { name: 'Angular', icon: 'A', description: 'Standalone components, routing, forms, and RxJS.' },
  { name: 'Tailwind CSS', icon: 'TW', description: 'Fast utility-first styling with consistent systems.' },
  { name: 'RxJS', icon: 'RX', description: 'Observable, BehaviorSubject, and async UI state.' },
  { name: 'REST API', icon: 'API', description: 'Fetch, display, and handle backend data in Angular.' },
  { name: 'Git', icon: 'Git', description: 'Version control for disciplined project work.' },
  { name: 'GitHub', icon: 'GH', description: 'Repository collaboration and deployment workflows.' },
  { name: 'Vercel / Render', icon: 'VR', description: 'Frontend and backend deployment for web projects.' },
  { name: 'VS Code', icon: 'VS', description: 'Efficient development with modern tooling.' },
];

export const experiences: Experience[] = [
  {
    title: 'Frontend Developer Intern',
    company: 'OSP Group',
    category: 'Work Experience',
    period: '06/2025 - 08/2025',
    description: 'Worked on production-style Angular modules, UI updates, bug fixes, API integration, and staging validation.',
    highlights: [
      'Developed and updated UI features for the travel eSIM module using Angular.',
      'Fixed UI and functional bugs based on QA/BAT bug reports.',
      'Participated in the Insurance module for a Mobifone project.',
      'Integrated REST API data into Angular components and handled client-side display logic.',
      'Tested features on staging/test environments before delivery.',
    ],
  },
  {
    title: 'Zamy - E-commerce Website',
    company: 'Personal Project',
    category: 'Personal Project',
    period: 'Angular, TypeScript, RxJS, Tailwind CSS, REST API',
    description: 'Built a responsive fashion e-commerce website with reusable Angular components and deployed frontend/backend services.',
    highlights: [
      'Developed product listing, product detail, shopping cart, and checkout pages.',
      'Built reusable Angular components following component-based architecture.',
      'Integrated RESTful API to fetch and display product data from backend service.',
      'Implemented shopping cart state management using RxJS BehaviorSubject and localStorage.',
      'Created checkout form with user information fields, payment method selection, and order summary UI.',
      'Used Angular Routing for customer-facing page navigation.',
      'Deployed frontend on Vercel and backend API on Render.',
    ],
  },
  {
    title: 'Computer Science Student',
    company: 'Thang Long University',
    category: 'Education',
    period: 'Current',
    description: 'Studying Computer Science while focusing on frontend development, Angular architecture, API integration, and responsive web applications.',
  },
  {
    title: 'Frontend Growth Focus',
    company: 'Self-learning',
    category: 'Current Focus',
    period: 'Current focus',
    description: 'Improving Angular, RxJS, UI/UX, responsive design, API integration, deployment workflows, and production-ready frontend performance.',
  },
];
