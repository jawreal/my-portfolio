import { Badge } from "@/components/ui/badge";
import { type IconType } from 'react-icons';
import { FaCss3Alt } from 'react-icons/fa';
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
  SiGithub
} from 'react-icons/si';

interface IStacks {
  icon: IconType;
  text: string;
  bgColor: string;
}

const stacks: IStacks[] = [
  { icon: SiHtml5, text: "HTML", bgColor: "#E34F26" },
  { icon: FaCss3Alt, text: "CSS", bgColor: "#1572B6" },
  { icon: SiJavascript, text: "JavaScript", bgColor: "#F7DF1E" },
  { icon: SiTypescript, text: "TypeScript", bgColor: "#3178C6" },
  { icon: SiTailwindcss, text: "Tailwind CSS", bgColor: "#06B6D4" },
  { icon: SiReact, text: "React", bgColor: "#61DAFB" },
  { icon: SiNodedotjs, text: "Node.js", bgColor: "#339933" },
  { icon: SiExpress, text: "Express.js", bgColor: "#000000" },
  { icon: SiVite, text: "Vite", bgColor: "#646CFF" },
  { icon: SiSupabase, text: "Supabase", bgColor: "#3ECF8E" },
  { icon: SiPostgresql, text: "PostgreSQL", bgColor: "#4169E1" },
  { icon: SiMongodb, text: "MongoDB", bgColor: "#47A248" },
  { icon: SiShadcnui, text: "shadcn/ui", bgColor: "#000000" },
  { icon: SiReactquery, text: "TanStack", bgColor: "#FF4154" },
  { icon: SiGit, text: "Git", bgColor: "#F05032" },
  { icon: GiBearFace, text: "Zustand", bgColor: "#443E38" },
  { icon: SiGithub, text: "GitHub", bgColor: "#181717" }
];

const Skills = () => {
  return (
  <section className="w-full px-6 flex flex-col md:px-20 pb-20 gap-y-4" id="skills">
     <div className="w-full flex flex-col gap-y-2">
       <h1 className="text-4xl font-extrabold dark:text-slate-200">SKILLS & TOOLS</h1>
       <p className="text-slate-500 dark:text-slate-400">My stack & tools for building modern, robust web apps as a full-stack dev.
       </p>
     </div>
     <div className="flex flex-wrap flex-shrink-0 w-full gap-3">
       {
        stacks.map((stack: IStacks) => {
        const Icon = stack.icon;
        return (
          <Badge key={stack.text} className="flex items-center gap-2 py-2 px-3 rounded-sm rounded-lg bg-white border border-slate-300 dark:border-0 text-slate-950 shadow-none">
            <Icon size={18} color={stack.bgColor} />
            <span>{stack.text}</span>
          </Badge>
        );
      })} 
     </div>
  </section>
  )
}

export default Skills;