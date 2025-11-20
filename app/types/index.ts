export interface Project {
  id: string;
  title: string;
  description: string;
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

export interface SimpleSkill {
  skill: string;
}

export interface Certification {
  name: string;
}

export interface EducationItem {
  id: number;
  level: string;
  school: string;
  degree: string;
  duration: string;
  achievements: string[];
  gpa?: string;
  getdotcolor: string;
}

export interface WorkExperience {
  name: string;
  desc: string;
  image: string;
  techstack: string[];
  link: string;
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
    bio2: string;
    skills: Skill[];
    hardSkills: SimpleSkill[];
    softSkills: SimpleSkill[];
    certifications: Certification[];
    cvUrl: string;
    domainsOfInterest?: string[];
  };
  projects: Project[];
  education: EducationItem[];
  workExperiences: WorkExperience[];
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
  };
}