import { type IconType } from 'react-icons';
import { FaCss3Alt, FaFigma } from 'react-icons/fa';
import { GiBearFace, } from 'react-icons/gi';
import { 
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiVite,
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiShadcnui,
  SiReactquery,
  SiGit,
  SiGithub, 
  SiPostman, 
  SiCloudflare
} from 'react-icons/si';

interface IStacks {
  id: string;
  icon: IconType;
  text: string;
  color: string;
}

const stacks: Record<string, IStacks[]> = {
  frontend: [
    { id: "f1",  icon: SiHtml5,      text: "HTML",        color: "text-[#E34F26]" },
    { id: "f2",  icon: FaCss3Alt,    text: "CSS",         color: "text-[#1572B6]" },
    { id: "f3",  icon: SiJavascript, text: "JavaScript",  color: "text-[#F7DF1E]" },
    { id: "f4",  icon: SiTypescript, text: "TypeScript",  color: "text-[#3178C6]" },
    { id: "f5",  icon: SiTailwindcss,text: "Tailwind CSS",color: "text-[#06B6D4]" },
    { id: "f6",  icon: SiReact,      text: "React",       color: "text-[#61DAFB]" },
    { id: "f7",  icon: SiVite,       text: "Vite",        color: "text-[#646CFF]" },
    { id: "f8",  icon: SiShadcnui,   text: "shadcn/ui",   color: "text-[#000000] dark:text-slate-200" },
    { id: "f9",  icon: SiReactquery, text: "TanStack",    color: "text-[#FF4154]" },
    { id: "f10", icon: GiBearFace,   text: "Zustand",     color: "text-[#443E38]" },
    { id: "f11", icon: SiCloudflare, text: "Cloudflare",  color: "text-[#F48120]" },
  ],
  backend: [
    { id: "b1", icon: SiNodedotjs,  text: "Node.js",    color: "text-[#339933]" },
    { id: "b2", icon: SiExpress,    text: "Express.js", color: "text-[#000000] dark:text-slate-200" },
    { id: "b3", icon: SiSupabase,   text: "Supabase",   color: "text-[#3ECF8E]" },
    { id: "b4", icon: SiPostgresql, text: "PostgreSQL", color: "text-[#4169E1]" },
    { id: "b5", icon: SiMongodb,    text: "MongoDB",    color: "text-[#47A248]" },
  ],
  tools: [
    { id: "t1", icon: SiGit,     text: "Git",     color: "text-[#F05032]" },
    { id: "t2", icon: SiGithub,  text: "GitHub",  color: "text-[#000000] dark:text-slate-200" },
    { id: "t3", icon: SiPostman, text: "Postman", color: "text-[#FF6C37]" },
    { id: "t4", icon: FaFigma,   text: "Figma",   color: "text-[#000000] dark:text-slate-200" },
  ],
} as const;


const combinedStacks: IStacks[] = [
  ...stacks.frontend, 
  ...stacks.backend, 
  ...stacks.tools, 
]

export { stacks, type IStacks, combinedStacks };