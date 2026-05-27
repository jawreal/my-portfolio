import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { projectsData, type IProjectsData } from "@/lib/projectsData";
import { combinedStacks, type IStacks } from "@/lib/techStacks";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { animationProps } from "@/lib/animationProps";
import { ArrowUpRight } from "lucide-react";
import { useLocation } from "react-router-dom";

interface IParams {
  [key: string]: string | undefined;
}

const PreviewProject = () => {
  const { pathname } = useLocation();
  const [projectStacks, setProjectStacks] = useState<IStacks[]>([]);
  const [project, setProject] = useState<IProjectsData | null>(null);
  const { id } = useParams<IParams>();
  const { ref: previewRef, inView: previewInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  }); 
  
  useEffect(() => {
    if(id){
      const parsedId = Number(id)
      if(isNaN(parsedId)){
        console.log("Invalid ID")
        return;
      };
      
      /* Filter project based on ID */
      const filteredProject = projectsData.find(item => item.id === parsedId);
      if(filteredProject){
        /* Set project if it exists */ 
        setProject(filteredProject);
        console.log("Filtered projects:", filteredProject) 
        
       const filteredStacks = combinedStacks.filter(stack => filteredProject?.stacks?.includes(stack.id));
       /* Set project stacks if it doesn't exist */
       setProjectStacks(filteredStacks)
       console.log("Filtered stacks:", filteredStacks)
      }
    
    }
  }, [id]);
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return (
  <div id="preview" className="w-full flex flex-col py-10 px-6 md:px-20 gap-y-6 border-t dark:border-slate-900 relative">
    {/* Project ID number */}
    {project?.id && <h1 className="absolute top-12 md:top-14 right-2 md:right-20 text-9xl font-ultra text-slate-200/80 dark:text-slate-900/75 z-[-1]">{"0" + project.id}</h1>}
  
    {/* Project title and description */}
    <motion.div 
      {...animationProps(0.1, false, true)}
      className="flex flex-col gap-y-4">
      <h1 className="text-3xl md:text-5xl font-ultra dark:text-slate-200 leading-none">{(project?.title ?? "No title found")?.toUpperCase()}</h1>
      <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{project?.description ?? "No description found"}</p>
    </motion.div>
    
    {/* Project type */} 
    <motion.div 
      {...animationProps(0.2, false, true)}
      className="w-full flex flex-col gap-y-2">
       <span className="font-extrabold dark:text-slate-200 text-sm">PROJECT TYPE</span> 
       <p className="text-slate-500 dark:text-slate-400">{project?. type ?? "No project type found"}</p>
    </motion.div>
    
    {/* Project date */} 
    <motion.div 
      {...animationProps(0.3, false, true)}
      className="w-full flex flex-col gap-y-2">
       <span className="font-extrabold dark:text-slate-200 text-sm">PROJECT DATE </span> 
       <p className="text-slate-500 dark:text-slate-400">{project?.date ?? "No project date found"}</p>
    </motion.div> 
    
    {/* Features */}
    <div className="w-full flex flex-col gap-y-3">
       <motion.div 
          {...animationProps(0.4, false, true)}>
         <span className="font-extrabold dark:text-slate-200 text-sm">FEATURES</span> 
       </motion.div>
       <ul className="w-full flex flex-col gap-y-2 max-w-2xl">
       {project?.features?.map((feature: string, idx: number) => (
       <li key={idx}>
         <motion.div 
           {...animationProps(idx * 0.2, false, true)}
           className="flex gap-x-4">
           <span className="w-2 h-2 bg-slate-950 dark:bg-slate-200 rounded-full self-start transform translate-y-2 flex-shrink-0"></span>
           <p className="text-slate-500 dark:text-slate-400">{feature}</p>
         </motion.div>
       </li>
       ))}
       </ul>
    </div>
    
    {/* Project image */}
    <motion.div 
      {...animationProps(0.5, previewInView, true)}
      className="w-full h-44 md:h-auto border">
       <img src={`${project?.imgSrc}`} className="w-full h-full object-cover" />
     </motion.div>
     
    {/* Tech stacks */}
    <div className="w-full flex flex-col gap-y-3 max-w-2xl">
      <span className="font-extrabold dark:text-slate-200 text-sm">TECH STACKS</span> 
        <div ref={previewRef} className="flex flex-wrap flex-shrink-0 w-full gap-3">
          {projectStacks?.map((stack: IStacks, idx: number) => {
            const Icon = stack.icon;
            return (
            <motion.div 
              {...animationProps(idx * 0.2, previewInView)}
              key={idx}>
              <Badge 
                className="flex items-center gap-2 py-2 px-3 rounded-none bg-transparent border border-slate-300 dark:border-slate-800 shadow-none font-medium dark:text-slate-200 text-slate-950">
                 <Icon size={14} className={stack.color} />
                <span>{stack.text}</span>
              </Badge>
            </motion.div>
            );
          })}
        </div>
    </div>
     
    {/* Live preview button  */}
    <div className="w-full flex flex-col md:flex-row gap-y-3 m:gap-x-3">
      <a href={project?.link ?? "#"} target="_blank" rel="noopener noreferrer" className="rounded-none shadow-none w-full md:w-auto h-10 ml-auto bg-zinc-950 dark:bg-slate-50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-slate-50 dark:text-slate-950 active:scale-95">
          Live Preview
          <ArrowUpRight className="ml-2"/>
       </a>            
    </div>
  </div>
  );
}

export default PreviewProject;