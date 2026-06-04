import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import useScrollNavigate from "@/hooks/useScrollNavigate";
import Stats from "@/components/Stats";
import { myStats, type MyStats } from "@/lib/myStats";
import { animationProps } from "@/lib/animationProps";

const HeroSection = () => {
  const navigate = useScrollNavigate() 
  const onNavigate = () => {
    navigate({
      id: "#contact"
    })
  };
  
  return (
    <section className="w-full flex-1 px-6 flex flex-col md:px-20 border-t dark:border-slate-900 relative">
      <motion.div 
        {...animationProps(0.3, false, true)}
        className="flex-1 border-x dark:border-slate-900 flex flex-col gap-y-4 pt-20 md:pt-16 pb-10 relative">
        <div className="flex flex-col gap-y-3 max-w-[30rem] mt-3">
          <div className="text-5xl md:text-7xl xl:text-7xl font-ultra leading-10 relative" >
             <p className="dark:text-slate-200 relative z-10">BUILDING ROBUST WEB SOLUTIONS</p>
             <p className="text-slate-200/90 dark:text-slate-800/75 transform translate-x-3 absolute top-0 z-1 translate-y-3" >BUILDING ROBUST WEB SOLUTIONS</p>
          </div>
          <p className="text-slate-500 dark:text-slate-400 xl:text-xl">Focused on developing scalable full-stack applications with attention to performance, usability, and clean code structure.</p>
         </div>
         <motion.div 
           {...animationProps(0.4, false, true)}
           className="w-full flex md:flex-row md:gap-x-4 md:gap-y-0 gap-y-4 flex-col mt-2">
          <Button className="h-11 rounded-none" onClick={onNavigate}>
            CONTACT ME
            <ArrowUpRight className="ml-2"/>
          </Button>
           <a href="/Jorell.CV.pdf" download="Jorell_CV.pdf" className="rounded-none shadow-none w-full md:w-auto h-11 md:px-4 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm border-y md:border-x border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 font-medium active:scale-95">
              DOWNLOAD CV
           </a> 
         </motion.div>
      </motion.div>
      <div className="w-full flex flex-col gap-y-5 md:gap-y-4 border-x dark:border-slate-900 pb-4">
         <hr className="border-slate-200 dark:border-slate-900" />
         <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
           {myStats.map((stat: MyStats, idx: number) => (
             <motion.div {...animationProps(idx * 0.4, false, true)}>
               <Stats key={idx} title={stat.title} description={stat.description}
                statNumber={idx + 1}
               />
             </motion.div>
           ))}
         </div>
      </div>
    </section>
  )
}

export default HeroSection;