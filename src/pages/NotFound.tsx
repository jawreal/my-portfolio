import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { animationProps } from "@/lib/animationProps";

const NotFound = () => {
  const navigate = useNavigate();
  const onGoBackHome = () => {
    navigate("/", {
      replace: true
    })
  }
  
  return (
    <div className="w-full min-h-screen flex max-w-7xl">
       <section className="flex-1 px-6 flex flex-col md:px-20 border-t dark:border-slate-900 md:justify-center">
         <div className="flex-1 flex flex-col gap-y-4 border-x dark:border-slate-900 md:justify-center md:items-center md:text-center">
           <motion.div 
             {...animationProps(0.1, false, true)}
             className="flex flex-col pt-20 md:pt-0"> 
              <h1 className="text-6xl md:text-8xl font-ultra text-slate-200/80 dark:text-slate-900/85 z-1">404</h1>
              <h1 className="text-5xl md:text-6xl font-ultra dark:text-slate-200 leading-none">PAGE MISSING</h1>
           </motion.div>
           <motion.div 
             {...animationProps(0.2, false, true)} className="flex flex-col items-center gap-y-4">
             <p className="text-slate-500 dark:text-slate-400 max-w-xl">The page you're looking for might not exist or has been moved. Use the navigation button to go back home or try the links in the navbar above.</p> 
              <Button className="h-11 rounded-none mt-1 w-full max-w-md" onClick={onGoBackHome}>
                GO BACK HOME 
                <ArrowRight />
              </Button> 
            </motion.div>
         </div>
       </section>
    </div>
  )
}

export default NotFound;