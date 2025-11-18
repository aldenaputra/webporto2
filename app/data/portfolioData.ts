import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    url: "/pic2.png",
    name: "Hi, I'm Alden!",
    title: "Computer Science Master's Student",
    description: "Bridging data science, analytics, and engineering with a growing emphasis on safeguarding information systems.",
    email: "your.email@example.com",
    location: "Your Location",
    headshotUrl: "/placeholder-headshot.jpg"
  },

  about: {
    bio: "Write a short bio about yourself here. This should be 2-3 sentences that give visitors a quick overview of who you are and what you do professionally.",
    careerGoals: [
      "Goal 1: What you want to achieve in your career",
      "Goal 2: Another professional aspiration",
      "Goal 3: Long-term career vision"
    ],
    skills: [
      { name: "JavaScript", level: "Advanced", category: "Frontend" },
      { name: "TypeScript", level: "Advanced", category: "Frontend" },
      { name: "React", level: "Advanced", category: "Frontend" },
      { name: "Next.js", level: "Intermediate", category: "Frontend" },
      { name: "Node.js", level: "Intermediate", category: "Backend" },
      { name: "Python", level: "Intermediate", category: "Backend" },
      { name: "PostgreSQL", level: "Intermediate", category: "Database" },
      { name: "Git", level: "Advanced", category: "Tools" }
    ],
    cvUrl: "https://drive.google.com/file/d/YOUR_CV_ID/view?usp=sharing",
    hobbies: [
      "Photography",
      "Reading",
      "Traveling",
      "Open Source Contributing"
    ]
  },

  projects: [
    {
      id: "1",
      title: "Project Name 1",
      description: "Brief overview of the project",
      situation: "Describe the situation or problem you were facing",
      task: "What was your specific task or responsibility",
      action: "What actions did you take to address the task",
      result: "What was the measurable outcome of your actions",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/project1",
      demoUrl: "https://project1-demo.vercel.app",
      imageUrl: "/project1-screenshot.jpg"
    },
    {
      id: "2",
      title: "Project Name 2",
      description: "Brief overview of the second project",
      situation: "Describe the situation or problem you were facing",
      task: "What was your specific task or responsibility",
      action: "What actions did you take to address the task",
      result: "What was the measurable outcome of your actions",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/yourusername/project2",
      driveUrl: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID",
      imageUrl: "/project2-screenshot.jpg"
    },
        {
      id: "3",
      title: "Project Name 2",
      description: "Brief overview of the second project",
      situation: "Describe the situation or problem you were facing",
      task: "What was your specific task or responsibility",
      action: "What actions did you take to address the task",
      result: "What was the measurable outcome of your actions",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/yourusername/project2",
      driveUrl: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID",
      imageUrl: "/project2-screenshot.jpg"
    }
  ],
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername"
  }
};