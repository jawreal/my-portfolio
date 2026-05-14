import ProjectContainer from "@/components/ProjectContainer";
import { projectsData, type IProjectsData } from "@/lib/projectsData";

const Projects = () => {
  return (
  <section className="w-full px-6 flex flex-col md:px-20 py-20 gap-y-4" id="projects">
     <div className="flex flex-col gap-y-2">
       <h1 className="text-4xl font-extrabold dark:text-slate-200">MY PROJECTS</h1>
       <p className="text-slate-500 dark:text-slate-400">Explore my featured projects showcasing innovative design and development solutions
       </p>
     </div>
     <div className="flex justify-center">
       <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-4 max-w-3xl">
         {
          projectsData.map((project: IProjectsData, idx: number) => (
           <ProjectContainer {...project} projectNumber={idx + 1} />
           ))
         }
       </div>
     </div>
  </section>
  )
}

export default Projects;