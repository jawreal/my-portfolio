import ProjectContainer from "@/components/ProjectContainer";
import { projectsData, type IProjectsData } from "@/lib/projectsData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {
  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
  <section className="w-full px-6 flex flex-col md:px-20 py-20 gap-y-6" id="projects">
     <motion.div 
       initial={{ opacity: 0, x: 20 }}
       animate={projectInView  ? { opacity:
          1, x: 0 } : {}}
       transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
       className="flex flex-col gap-y-2">
       <h1 className="text-4xl font-extrabold dark:text-slate-200">MY PROJECTS</h1>
       <p className="text-slate-500 dark:text-slate-400 md:max-w-[25rem]">Explore my featured projects showcasing innovative design and development solutions
       </p>
     </motion.div>
     <div ref={projectRef} className="flex">
       <div
         className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-6 max-w-5xl">
         {
          projectsData.map((project: IProjectsData, idx: number) => (
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={projectInView  ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, ease: "easeOut", delay: idx* 0.3 }}>
             <ProjectContainer {...project} projectNumber={idx + 1} />
           </motion.div>
           ))
         }
       </div>
     </div>
  </section>
  )
}

export default Projects;