import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { animationProps } from "@/lib/animationProps";
import { stacks, type IStacks } from "@/lib/techStacks";

const Skills = () => {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
  <section className="w-full px-6 flex flex-col md:px-20 py-20 gap-y-6 border-y dark:border-slate-900" id="skills">
     <motion.div 
       {...animationProps(0.4, skillsInView)}
       className="w-full flex flex-col gap-y-2">
       <h1 className="text-4xl font-extrabold dark:text-slate-200">SKILLS & TOOLS</h1>
       <p className="text-slate-500 dark:text-slate-400 md:max-w-[24rem]">My stack & tools for building modern, robust web apps as a full-stack dev.
       </p>
     </motion.div>
     <div ref={skillsRef} className="flex w-full flex-col gap-y-8 md:max-w-xl">
     {
       Object.entries(stacks).map(([category, stackItems], parentIndex: number) => (
       <div key={category} className="flex flex-col gap-y-3">
         <motion.h5 
           {...animationProps(parentIndex * 0.3, skillsInView)}
           className="text-sm text-slate-500 dark:text-slate-400 font-mono uppercase">
           {category}
        </motion.h5>
        <div className="flex flex-wrap flex-shrink-0 w-full gap-3">
          {stackItems.map((stack: IStacks, childIndex: number) => {
            const Icon = stack.icon;
            return (
            <motion.div 
              {...animationProps(childIndex * 0.2, skillsInView)}
              key={childIndex}>
              <Badge 
                className="flex items-center gap-2 py-2 px-3 rounded-none bg-transparent border border-slate-300 dark:border-slate-800 shadow-none font-medium dark:text-slate-200 text-slate-950">
                 <Icon size={18} className={stack.color} />
                <span>{stack.text}</span>
              </Badge>
            </motion.div>
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