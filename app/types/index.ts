export interface Project {
  id: string;
  title: string;
  description: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  driveUrl?: string;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
}

export interface PortfolioData {
  personal: {
    url: string;
    name: string;
    title: string;
    description: string;
    email: string;
    location: string;
    headshotUrl?: string;
  };
  about: {
    bio: string;
    careerGoals: string[];
    skills: Skill[];
    cvUrl: string;
    hobbies?: string[];
  };
  projects: Project[];
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
  };
}