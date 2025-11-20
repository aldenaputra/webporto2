import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    url: "/pic2.png",
    name: "Hi, I'm Alden!",
    title: "Computer Science Master's Student",
    description: "Bridging data science, analytics, and engineering with a growing emphasis on safeguarding information systems.",
    email: "alden.aputra@gmail.com",
    location: "Jakarta, Indonesia",
    headshotUrl: "/pic2.png"
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
      "Financial Services and Investment",
      "Risk Management",
      "Human Resource Information Systems"      
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

  education: [
    {
      id: 1,
      level: 'High School Diploma',
      school: 'SMA Regina Pacis Bogor',
      degree: 'Math & Natural Science Major',
      duration: 'Jul 2018 - Jul 2021',
      achievements: ['Best Male Student', 'Youth Science Club'],
      gpa: '93.47/100',
      getdotcolor: 'blue-500',
    },
    {
      id: 2,
      level: "Bachelor's Degree",
      school: 'BINUS University',
      degree: 'Computer Science: Database Technology Streaming',
      duration: 'Sept 2021 - Aug 2025',
      achievements: ['Summa Cum Laude', 'Outstanding Graduate'],
      gpa: '3.92/4.0',
      getdotcolor: 'violet-500',
    },
    {
      id: 3,
      level: "Master's Degree",
      school: 'BINUS Graduate Program',
      degree: 'Magister Teknik Informatika - Fast Track Programme: Information Security Management Streaming',
      duration: 'Sept 2024 - Aug 2026',
      achievements: ['Ongoing study, graduation expected in August 2026'],
      gpa: '4.0/4.0 (Current)',
      getdotcolor: 'fuchsia-600',
    },
  ],

  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername"
  }
};