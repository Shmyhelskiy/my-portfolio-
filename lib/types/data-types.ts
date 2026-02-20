export interface SkillTypes {
  title: string;
  lightIcon: string;
  darkIcon: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  link?: string;
}
export type ProjectsData = Project[];
