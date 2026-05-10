import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full flex-1 px-6 flex flex-col md:px-20">
      <div className="flex-1 border-x dark:border-slate-800 flex flex-col gap-y-4">
        <div className="flex flex-col pt-16 gap-y-3 max-w-[25rem] px-4 mt-1">
          <h1 className="text-5xl font-extrabold dark:text-slate-200">Building Modern Web Experiences</h1>
          <p className="text-slate-500 dark:text-slate-400">Focused on developing scalable full-stack applications with attention to performance, usability, and clean code structure.</p>
         </div>
         <div className="w-full flex md:flex-row md:gap-x-4 md:gap-y-0 gap-y-4 flex-col md:pl-4 mt-2">
          <Button className="h-11 rounded-none">
            CONTACT ME
            <ArrowUpRight className="ml-2"/>
          </Button>
          <Button variant="outline" className="h-11 border-x-0 md:border-x rounded-none dark:bg-slate-900 shadow-none">
            DOWNLOAD CV
           </Button> 
         </div>
      </div>
    </section>
  )
}

export default HeroSection;