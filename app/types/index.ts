export interface Project {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  mobileDescription?: string;
  mobileHighlights?: string[];
  technologies: string[];
  featuredTechnologies?: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  driveUrl?: string;
}

export interface Publication {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  mobileDescription?: string;
  mobileMeta?: string;
  technologies: string[];
  featuredTechnologies?: string[];
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

export interface SkillGroup {
  category: string;
  skills: string[];
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
  courses?: { name: string; code: string }[];
  activities?: string[];
  volunteering?: string[];
}

export interface WorkExperience {
  name: string;
  shortName?: string;
  desc: string;
  mobileDesc?: string;
  mobileHighlights?: string[];
  image: string;
  techstack: string[];
  featuredTechstack?: string[];
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
    bio1: string;
    bio2: string;
    mobileBio?: string;
    skills: Skill[];
    hardSkills: SkillGroup[];
    softSkills: SimpleSkill[];
    certifications: Certification[];
    cvUrl: string;
    domainsOfInterest?: string[];
  };
  projects: Project[];
  publications: Publication[];
  education: EducationItem[];
  workExperiences: WorkExperience[];
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
  };
}
