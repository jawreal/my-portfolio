import HeroSection from "@/pages/HeroSection";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Contact from "@/pages/Contact";
import { Fragment } from "react";

const Main = () => {
  return (
  <Fragment>
    <div className="w-full flex flex-col items-center">
       <main className="w-full">
          <HeroSection />
       </main> 
       <About /> 
       <Projects />
       <Skills /> 
       <Contact />
    </div>
  </Fragment>
  )
}

export default Main;