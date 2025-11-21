import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    url: "/pic2.png",
    name: "Hi, I'm Alden!",
    title: "Computer Science Master's Student at BINUS University",
    description: "Bridging data science, analytics, and engineering with a growing emphasis on safeguarding information systems.",
    email: "alden.aputra@gmail.com",
    location: "Jakarta, Indonesia",
    headshotUrl: "/pic2.png"
  },

  about: {
    bio: "I’m a final-year Fast-Track Computer Science student specializing in Information Security Management, supported by a strong analytics and data-driven foundation from my bachelor’s in Database Technology. Across my internships as an HR Data Scientist and Reporting Analyst, I’ve built end-to-end dashboards, developed predictive models, streamlined reporting workflows, and translated complex SQL/HiveQL logic into efficient DAX expressions. I also contributed to risk-monitoring models and data governance initiatives, giving me hands-on experience across analytics, business intelligence, and scalable data solutions.",
    bio2: "Beyond my technical work, I’m someone who thrives on curiosity, creativity, and continuous improvement. I enjoy building data and IT security solutions, exploring new technologies, and expressing myself through music and art. I’m adaptable, collaborative, and driven by the desire to create meaningful work—whether it’s solving analytical challenges, safeguarding information systems, or contributing to impactful projects that help people and organizations make better decisions.",
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
    hardSkills: [
      { skill: "Data Science" },
      { skill: "Machine Learning" },
      { skill: "Python" },
      { skill: "Data Analytics" },
      { skill: "Power BI" },
      { skill: "DAX" },
      { skill: "Data Engineering" },
      { skill: "SQL" },
      { skill: "Apache Spark" },
      { skill: "Excel" },
      { skill: "Hadoop" },
      { skill: "Reporting and Analysis" },
      { skill: "Data Governance" },
      { skill: "Information Security" },
      { skill: "IT Risk Management" },
      { skill: "IT Audit" },
    ],
    softSkills: [
      { skill: "Public Speaking" },
      { skill: "Content Creation" },
      { skill: "Leadership" },
      { skill: "Problem Solving" },
      { skill: "Time Management" },
      { skill: "Project Management" },
    ],
    certifications: [
      { name: "Alibaba Cloud Certified Associate (ACA)" },
      { name: "SQL (Advanced) by HackerRank" },
      { name: "SAP Analytics Cloud Training by ASEAN DSE" },
    ],
    cvUrl: "/Alden Ardiwinata Putra ATS CV.pdf",
    // domainsOfInterest: [
    //   "Data Science",
    //   "Data Analytics",
    //   "Data Engineering",
    //   "Financial Services",
    //   "Risk Management",
    //   "Information Security",
    //   "IT Audit",
    //   "Data Governance",
    //   "Human Resource Information Systems"      
    // ]
  },

  projects: [
    {
      id: "1",
      title: "WSTGv4 OWASP Scripting and Testing Project, Fundamental of Cybersecurity Project",
      description: "Developed comprehensive Python scripts and AI-assisted security tools to systematically execute the entire OWASP Web Security Testing Guide (WSTGv4) checklist. Automated end-to-end security testing procedures, vulnerability detection, and generated detailed testing reports to validate web application security posture.",
      technologies: ["Python", "OWASP", "Cybersecurity", "Security Testing", "Web Security"],
      githubUrl: "https://github.com/aldenaputra/WSTG-Script-and-Master-Report-by-Alden-and-Kenneth.git",
      imageUrl: "/wstg.png"
    },
    {
      id: "2",
      title: "Network and Cybersecurity Projects",
      description: "Completed four in-depth cybersecurity assignments: (1) Penetration Testing Report on Kioptrix Level 1 System with vulnerability findings and remediation recommendations; (2) Memory Forensics Analysis on Cridex Malware using Volatility 2.0 for malware isolation and documentation; (3) TLS/SSL Decryption Analysis using Wireshark demonstrating protocol decryption techniques; (4) Hands-on Pyshark CLI-based Wireshark documentation and practical implementation.",
      technologies: ["Penetration Testing", "Wireshark", "Pyshark", "Volatility", "Memory Forensics", "TLS/SSL", "Cybersecurity", "Network Analysis"],
      driveUrl: "https://docs.google.com/document/d/1cTU-OmhIXidmQCD88Kr6X7nnrVfiO_LB0pyc3Ld5EoE/edit?usp=sharing",
      imageUrl: "/network.png"
    },
    {
      id: "3",
      title: "Enterprise Network Project & Simulation, Advanced Network Design",
      description: "Designed and simulated an enterprise-level network architecture with comprehensive metrics calculation including MTTR (Mean Time To Repair). Implemented GNS3 network environment with DHCP server configuration using keepalived, integrated DNS backup mechanisms, and implemented network security measures to simulate real-world enterprise infrastructure.",
      technologies: ["GNS3", "Network Design", "Network Security", "Cisco Packet Tracer"],
      driveUrl: "https://docs.google.com/document/d/1nxVayDarPnyCfkl1QgNnpFR8zBuHkz8d_IhB1w4vN0E/edit?usp=sharing",
      imageUrl: "/gns.png"
    },
    {
      id: "4",
      title: "Data Clustering & Classification on Multiple Datasets, Big Data Processing Project",
      description: "Performing data clustering (trash pollution dataset) using k-means model projected onto scatter plot and classification model (airplane schedule delay dataset) in Cloudera Quickstart VM (Jupyter Notebook).",
      technologies: ["SQL", "Jupyter Notebook", "Cloudera Quickstart VM", "Machine Learning", "Apache Spark", "VMware Workstation"],
      githubUrl: "https://github.com/aldenaputra/clustering-and-classification.git",
      imageUrl: "/vis.png"
    },
    {
      id: "5",
      title: "SARIMAX Prediction Model on Online Retail Dataset using Python (Google Colaboratory)",
      description: "Conducted exploratory data analysis (EDA) of an online retail dataset and executing model training to predict sales using SARIMAX algorithm in python (Google Colaboratory).",
      technologies: ["Python", "Pandas", "Machine Learning", "Google Colab"],
      githubUrl: "https://github.com/aldenaputra/SARIMAX-prediction-model.git",
      imageUrl: "/sarimax.png"
    },
    {
      id: "6",
      title: "Comparison of 4 SVM Kernels Performances in Aviation Satisfaction Dataset, Data Mining Project",
      description: "Conducted a complete process of KDD (Knowledge Discovery in Databases): exploratory data analysis (EDA), data preprocessing, outlier analysis, model fitting (classification prediction analysis), model evaluation, and permutation importance between SVM kernels (linear, RBF, polynomial, and sigmoid), of an aviation satisfaction dataset using python (Google Colaboratory).",
      technologies: ["Python", "Pandas", "Machine Learning", "Google Colab"],
      githubUrl: "https://github.com/aldenaputra/svm-4-kernel-comparison.git",
      imageUrl: "/datamining.png"
    },
    {
      id: "7",
      title: "Basic Data Visualization in Jupyter Notebook, Utilizing SparkSQL on Cloudera Quickstart VM, Big Data Processing Project",
      description: "Performing basic data visualization and queries (farm dataset) using SparkSQL (pySpark) in Jupyter Notebook on Cloudera Quickstart Virtual Machine.",
      technologies: ["SQL", "Jupyter Notebook", "Cloudera", "Virtual Machine", "Apache Spark", "VMware Workstation", "Python"],
      githubUrl: "https://github.com/aldenaputra/data-visualization-in-jupyter-spark-cloudera.git",
      imageUrl: "/clasclus.png"
    },
    {
      id: "8",
      title: "PlaTo UI/UX Prototyping, Human & Computer Interaction Project",
      description: "Designing UI and conducting UX testing (via survey and prototype testing) for IoT application that featured to perform automatic plant nursery remotely.",
      technologies: ["UI Prototyping", "UX Testing", "Figma"],
      demoUrl: "https://www.figma.com/file/UQahPrf3riu2UKva5k0csY/HCI---AoL-Case?type=design&node-id=101%3A2&mode=design&t=QbNj488Xs4JhnUr4-1",
      imageUrl: "/plato.png"
    },
    {
      id: "9",
      title: "Travail: Travel and Rail. A Laravel Full-Stack E-Ticketing Website, Software Engineering Project",
      description: "Entrusted to lead a software engineering project, Travail: Travel & Rail. Built a fully functional (full-stack) train e-ticketing website using Laravel's framework.",
      technologies: ["MySQL", "Laravel", "Vue.js", "Apache XAMPP", "HTML", "CSS", "JavaScript", "Git", "Figma"],
      githubUrl: "https://github.com/VzGarnet/Travail.git",
      imageUrl: "/travail.png"
    },
    {
      id: "10",
      title: "Portfolio Website Project using Next.js Framework",
      description: "Created and deployed a portfolio website using the Next.js framework and free hosting services from Vercel.",
      technologies: ["Next.js", "HTML", "Tailwind CSS", "TypeScript", "Git", "Vercel"],
      githubUrl: "https://github.com/aldenaputra/webportoexercise.git",
      imageUrl: "/porto.png"
    },
    {
      id: "11",
      title: "KarenJET, Database Design Project",
      description: "Entrusted to lead a database design project, KarenJET. Designing a database for enterprise scenarios and developing a mitigation plan for system alteration and recovery for specific scenarios that involve database transactions. Performed a strict normalization from 1NF to 5NF and created diagrams to elaborate the database system.",
      technologies: ["Visual Paradigm", "Database Design", "Excel", "Figma"],
      driveUrl: "https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=Ea_I6XQHFexNo-1RpLEk5MwBu3iwi47HMqHfiuZeruUoZg&e=zqngRY",
      imageUrl: "/Database Design.png"
    },
    {
      id: "12",
      title: "Java CRUD + Search Text-Based Application, Object Oriented Programming Final Project",
      description: "Design a java text-based application that implements the 4 main principles of object-oriented programming, input validation, and CRUD + search algorithm.",
      technologies: ["Java", "Eclipse IDE"],
      githubUrl: "https://github.com/aldenaputra/java-crud-search.git",
      imageUrl: "/javacruds.png"
    },
    {
      id: "13",
      title: "Algorithm Design in C, Algorithm & Programming Project",
      description: "Constructing several algorithms in C to solve logical problems and creating each flowchart to describe further the algorithm scheme.",
      technologies: ["C/C++", "Dev-C++"],
      githubUrl: "https://github.com/aldenaputra/algoprog_AoL.git",
      imageUrl: "/algoprog.png"
    },
    {
      id: "14",
      title: "Computer Network Design & Prototyping, Computer Network Case Study & Project",
      description: "Prototyping a computer network for specific case study and performing a comprehensive network simulation using Cisco Packet Tracer.",
      technologies: ["Cisco Packet Tracer", "Figma"],
      driveUrl: "https://binusianorg-my.sharepoint.com/personal/alden_putra_binus_ac_id/_layouts/15/guestaccess.aspx?share=EW2O2MDH3w1Nofp_3QBWyzsBNHT_M0GTICEKxs568-y1Bg&e=z31jAs",
      imageUrl: "/cn.png"
    },
    {
      id: "15",
      title: "Systematic Literature Review on IT Strategic Workspaces: Approach to Develop an Ideal Environment",
      description: "Conducted a SLR research (first author) regarding IT workspaces in order to find tangible metrics and method to develop an ideal environment for IT human resources. Accepted and presented in The 9th International Conference on Computing, Engineering and Design (ICCED 2023).",
      technologies: ["Research", "Mendeley", "Systematic Literature Review"],
      driveUrl: "https://aldenisius.notion.site/Research-Paper-SLR-8fd20ca95e6342cfaedd44daebe983a3?pvs=4",
      imageUrl: "/rmcs.png"
    },
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
      activities: [
        'Regina Pacis Youth Science Club Former Chairman',
        'Regina Pacis Band & Orchestra',
        'OSN Astronomi',
        'Lomba Karya Ilmiah Remaja LIPI 2019',
        'National Folklore Festival FEB Universitas Indonesia Choir Competition Silver Medalist'
      ]
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
      activities: [
        'Teaching & Mentoring',
        'Band',
        'Teach for Indonesia (Social Volunteer): Social Awareness Campaign at Lentera School Indonesia'
      ],
      courses: [
        { name: 'Artificial Intelligence', code: 'COMP6065001' },
        { name: 'Big Data Processing', code: 'COMP6579001' },
        { name: 'Computer Networks', code: 'CPEN6247001' },
        { name: 'Data Mining', code: 'COMP6140001' },
        { name: 'Database Design', code: 'COMP6481001' },
        { name: 'Database Technology', code: 'COMP6799001' },
        { name: 'Distributed Cloud Computing', code: 'COMP6710001' },
        { name: 'Geographical Information System', code: 'COMP6590001' },
        { name: 'Scientific Computing', code: 'MATH183001' }
      ]
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
      volunteering: [
        'Social Volunteer, English Teacher collaborating with myfundaction',
        'Teaching Volunteer about AI and Digital Marketing by Bina Nusantara Computer Club in Massive Online Open Course format'
      ],
      courses: [
        { name: 'Cases on Forensic Accounting and Corporate Governance', code: 'ACCT8008044' },
        { name: 'Enterprise Network', code: 'CPEN8006041' },
        { name: 'Fundamental of Cybersecurity', code: 'COMP8046041' },
        { name: 'IT Risk Management and Audit', code: 'COMP8042041' },
        { name: 'Network and Cyber Security', code: 'CPEN8005041' },
        { name: 'Internet of Things (IoT)', code: 'COMP8041041' }
      ]
    },
  ],

  workExperiences: [
    {
      name: "Data Scientist Intern at Toyota Astra Financial Services (TAFS) - MSIB Kampus Merdeka",
      desc: "As an awardee of the MSIB Kampus Merdeka Batch 6, I was part of PT. Astra International Tbk. in the TAFS subsidiary for approximately 5 months. My project revolved around the HR system and the development of data science & analytics for the company's internal operations.",
      image: "/msib.jpg",
      techstack: ["Python", "Jupyter Notebook", "Microsoft Power BI", "Machine Learning", "Data Analytics", "DAX", "Microsoft Excel"],
      link: "https://www.linkedin.com/posts/aldenaputra_astracareer-astrakampusmerdeka-msib6-activity-7163822170203258881-tVzq?utm_source=share&utm_medium=member_desktop",
    },
    {
      name: "Reporting Analyst Intern at Toyota Astra Financial Services (TAFS) - Independent",
      desc: "I continued my internship at TAFS as a reporting analyst for approximately 2 months. My responsibilities were in the final stage of data engineering & collection, which involved reporting using the Microsoft Power BI platform and DAX. During this extension, I also deepened my understanding of data governance, data security access, semantic modeling, and data reconciliation.",
      image: "/RATAFS.png",
      techstack: ["Microsoft Power BI", "Reporting & Analysis", "Data Analytics", "DAX", "Data Reconciliation"],
      link: "https://www.linkedin.com/in/aldenaputra",
    },
  ],

  socialLinks: {
    github: "https://github.com/aldenaputra",
    linkedin: "https://www.linkedin.com/in/aldenaputra/",
  }
};