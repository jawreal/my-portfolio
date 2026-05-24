import { stacks } from "@/lib/techStacks";

interface IProjectsData {
  id: number;
  title: string; 
  imgSrc: string;
  type: string;
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
    type: "Internship Project - Web Based System for PNP Logistics Department", 
    date: "January - March (2026)", 
    features: [
      "Minimalist and modern user interface design.", 
      "Fully responsive layouts optimized for all devices.", 
      "Supports registration of both long and short firearms with complete record details stored in the database.", 
      "Each registered firearm is assigned a unique QR code. Scanning is restricted to within the system, preventing unauthorized external access.",
      "Every action performed within the system is automatically logged and can be reviewed on the dedicated audit page, ensuring full accountability."
    ]
  }, 
  {
    id: 2,
    title: "CDSGA Thesis Archive with AI Chatbot Assistance", 
    imgSrc: "/archive_landing.png", 
    stacks: projectStacks.thesisArchive, 
  }, 
  {
    id: 3, 
    title: "Kaypian Barangay Management System", 
    imgSrc: "/brgy_landing.png", 
    stacks: projectStacks.brgyKaypian,
  }, 
  {
    id: 4, 
    title: "Neuro-Quiz - AI Generated Interactive Quiz",
    imgSrc: "/pnp_landing.jpg", 
    stacks: projectStacks.quizGen, 
  }, 
]


export { projectsData, type IProjectsData };