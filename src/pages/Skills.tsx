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
  SiGithub, 
  SiPostman
} from 'react-icons/si';

interface IStacks {
  icon: IconType;
  text: string;
  color: string;
}

const stacks: Record<string, IStacks[]> = {
  frontend: [
    { icon: SiHtml5, text: "HTML", color: "text-[#E34F26]" },
    { icon: FaCss3Alt, text: "CSS", color: "text-[#1572B6]" },
    { icon: SiJavascript, text: "JavaScript", color: "text-[#F7DF1E]" },
    { icon: SiTypescript, text: "TypeScript", color: "text-[#3178C6]" },
    { icon: SiTailwindcss, text: "Tailwind CSS", color: "text-[#06B6D4]" },
    { icon: SiReact, text: "React", color: "text-[#61DAFB]" },
    { icon: SiVite, text: "Vite", color: "text-[#646CFF]" },
    { icon: SiShadcnui, text: "shadcn/ui", color: "text-[#000000] dark:text-slate-200" },
    { icon: SiReactquery, text: "TanStack", color: "text-[#FF4154]" },
    { icon: GiBearFace, text: "Zustand", color: "text-[#443E38]" }
  ],
  backend: [
    { icon: SiNodedotjs, text: "Node.js", color: "text-[#339933]" },
    { icon: SiExpress, text: "Express.js", color: "text-[#000000] dark:text-slate-200" },
    { icon: SiSupabase, text: "Supabase", color: "text-[#3ECF8E]" },
    { icon: SiPostgresql, text: "PostgreSQL", color: "text-[#4169E1]" },
    { icon: SiMongodb, text: "MongoDB", color: "text-[#47A248]" }
  ],
  tools: [
    { icon: SiGit, text: "Git", color: "text-[#F05032]" },
    { icon: SiGithub, text: "GitHub", color: "text-[#000000] dark:text-slate-200" }, 
    { icon: SiPostman, text: "Postman", color: "text-[#FF6C37]" } 
  ]
} as const;

const Skills = () => {
  return (
  <section className="w-full px-6 flex flex-col md:px-20 py-20 gap-y-6 border-y" id="skills">
     <div className="w-full flex flex-col gap-y-2">
       <h1 className="text-4xl font-extrabold dark:text-slate-200">SKILLS & TOOLS</h1>
       <p className="text-slate-500 dark:text-slate-400 md:max-w-[24rem]">My stack & tools for building modern, robust web apps as a full-stack dev.
       </p>
     </div>
     <div className="flex w-full md:max-w-[35rem] flex-col gap-y-8">
     {
       Object.entries(stacks).map(([category, stackItems]) => (
       <div key={category} className="flex flex-col gap-y-3">
         <h5 className="text-sm text-slate-500 dark:text-slate-400 font-mono uppercase">
           {category}
        </h5>
        <div className="flex flex-wrap flex-shrink-0 w-full gap-3">
          {stackItems.map((stack: IStacks) => {
            const Icon = stack.icon;
            return (
            <Badge 
              key={stack.text} 
              className="flex items-center gap-2 py-2 px-3 rounded-none bg-transparent border border-slate-300 dark:border-slate-700 shadow-none font-medium dark:text-slate-200 text-slate-950"
            >
              <Icon size={18} className={stack.color} />
              <span>{stack.text}</span>
            </Badge>
            );
          })}
        </div>
      </div>
     ))}
    </div>
  </section>
  )
}

export default Skills;