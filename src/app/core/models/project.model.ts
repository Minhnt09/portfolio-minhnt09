export interface Project {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  image: string;
  links: {
    github: string;
    demo: string;
  };
  highlights: string[];
  technologies: string[];
}
