import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import useScrollNavigate from "@/hooks/useScrollNavigate";

const HeroSection = () => {
  const navigate = useScrollNavigate() 
  const onNavigate = () => {
    navigate({
      id: "#contact"
    })
  };
  
  return (
    <section className="w-full flex-1 px-6 flex flex-col md:px-20 border-t dark:border-slate-900">
      <motion.div 
         initial={{ opacity: 0, y: 15 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        className="flex-1 border-x dark:border-slate-900 flex flex-col gap-y-4">
        <div className="flex flex-col pt-16 md:pt-10 gap-y-3 max-w-[30rem] mt-1">
          <h1 className="text-5xl md:text-7xl font-ultra dark:text-slate-200" >BUILDING ROBUST WEB SOLUTIONS</h1>
          <p className="text-slate-500 dark:text-slate-400">Focused on developing scalable full-stack applications with attention to performance, usability, and clean code structure.</p>
         </div>
         <motion.div 
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
           className="w-full flex md:flex-row md:gap-x-4 md:gap-y-0 gap-y-4 flex-col md:pl-4 mt-2">
          <Button className="h-11 rounded-none" onClick={onNavigate}>
            CONTACT ME
            <ArrowUpRight className="ml-2"/>
          </Button>
          <Button variant="outline" className="h-11 border-x-0 md:border-x rounded-none dark:bg-slate-900 shadow-none">
            DOWNLOAD CV
           </Button> 
         </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection;