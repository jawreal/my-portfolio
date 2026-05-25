interface IProjectsData {
  id: number;
  title: string; 
  description: string;
  imgSrc: string;
  type: string;
  date: string;
  stacks: string[];
  features: string[];
}

const projectStacks: Record<string, string[]> = {
  pnpFirearm: [
    "f7",  // Vite
    "f6",  // React
    "f4",  // TypeScript
    "f5",  // Tailwind CSS
    "b1",  // Node.js
    "b2",  // Express.js
    "b5",  // MongoDB
    "f8",  // shadcn/ui
    "f11", // Cloudflare
    "f9",  // TanStack
    "f10", // Zustand
  ],
  thesisArchive: [
    "f7", // Vite
    "f6", // React
    "f4", // TypeScript
    "f5", // Tailwind CSS
    "b1", // Node.js
    "b2", // Express.js
    "b5", // MongoDB
    "b3", // Supabase
    "f8", // shadcn/ui
  ],
  brgyKaypian: [
    "f7", // Vite
    "f6", // React
    "f4", // TypeScript
    "f5", // Tailwind CSS
    "b1", // Node.js
    "b2", // Express.js
    "b5", // MongoDB
    "b3", // Supabase
    "f8", // shadcn/ui
  ],
  quizGen: [
    "f7",  // Vite
    "f6",  // React
    "f4",  // TypeScript
    "f5",  // Tailwind CSS
    "b1",  // Node.js
    "b2",  // Express.js
    "b5",  // MongoDB
    "f8",  // shadcn/ui
    "f10", // Zustand
  ],
} as const;

const projectsData: IProjectsData[] = [
  {
    id: 1, 
    title: "CSJDM-PNP Logistic Dept - Firearm Tracker",
    imgSrc: "/pnp_landing.jpg", 
    stacks: projectStacks.pnpFirearm,
    description: "A web-based firearm records management system developed for the Logistics Department of the Philippine National Police — City of San Jose del Monte, Bulacan. The system provides secure registration, tracking, and auditing of both long and short firearms assigned within the unit.", 
    type: "Internship Project - Web-Based System for PNP Logistics Department", 
    date: "January - March 2026", 
    features: [
      "Minimalist and modern user interface design.",
      "Fully responsive layouts optimized for all devices.",
      "Complete registration system for both long and short firearms with detailed record storage in the database.",
      "Unique QR code generation for each registered firearm with system-restricted scanning to prevent unauthorized external access.",
      "Comprehensive audit logging system that automatically tracks and records every action for full accountability and review."
    ]
  }, 
  {
    id: 2,
    title: "CDSGA Thesis Archive with AI Chatbot Assistance", 
    imgSrc: "/archive_landing.png", 
    stacks: projectStacks.thesisArchive, 
    description: "Thesis Vault is designed to meet the research and online thesis archiving needs of students and researchers from Colegio de San Gabriel Arcangel (CDSGA). It leverages AI-powered tools to enable smarter organization, faster retrieval, and advanced semantic search for academic abstracts and theses.", 
    type: "Capstone Project", 
    date: "July - November 2025", 
    features: [
      "Minimalist and modern user interface focused on usability and accessibility.",
      "Mobile-first responsive design optimized for desktop, tablet, and mobile devices.",
      "AI-powered chatbot assistant for semantic search and intelligent content discovery.",
      "Secure role-based access control (RBAC) supporting three distinct user roles.",
      "Seamless infinite scrolling experience inspired by modern social platforms.",
      "Comprehensive admin dashboard featuring analytics, user insights, and platform statistics."
    ]
  }, 
  {
    id: 3, 
    title: "Kaypian Barangay Management System", 
    imgSrc: "/brgy_landing.png", 
    stacks: projectStacks.brgyKaypian,
    description: "A comprehensive barangay management system for Kaypian in the City of San Jose Del Monte, Bulacan. The system manages borrowed items, community member registration, and online event requests.", 
    type: "Capstone Project - Client Commission", 
    date: "September - November 2025", 
    features: [
      "Minimalist and modern user interface focused on usability and accessibility.",
      "Mobile-first responsive design optimized for desktop, tablet, and mobile devices.",
      "One-time password (OTP) authentication for admin users.",
      "Secure role-based access control (RBAC) supporting two distinct user roles.",
      "Automated email notification system for requests and updates.",
      "Item borrowing system with date tracking and management.",
      "Real-time data statistics displayed on the admin dashboard.",
      "Two-person collaborative project."
    ]
  }, 
  {
    id: 4, 
    title: "Neuro-Quiz - AI-Generated Interactive Quiz",
    imgSrc: "/quiz_landing.png", 
    stacks: projectStacks.quizGen,
    description: "An AI-powered platform that enables users to create interactive quizzes based on custom prompts. The system generates dynamic quiz content tailored to user specifications.", 
    type: "Personal Project", 
    date: "November 2025 - January 2026", 
    features: [
      "Minimalist and modern user interface focused on usability and accessibility.",
      "Mobile-first responsive design optimized for desktop, tablet, and mobile devices.",
      "AI integration for dynamic quiz generation.",
      "Interactive quiz format similar to Google Forms with customizable questions.",
      "Daily rate limiting of 3 quizzes per user account to manage system resources.",
      "Quiz history tracking for all user-created quizzes.",
      "Automatic scoring with detailed evaluation of correct and incorrect answers."
    ]
  }
]

export { projectsData, type IProjectsData };