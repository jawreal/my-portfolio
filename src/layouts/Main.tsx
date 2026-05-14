import Navbar from "@/layouts/Navbar";
import BacklashBg from "@/components/BacklashBg"; 
import HeroSection from "@/pages/HeroSection";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Contact from "@/pages/Contact";


const Main = () => {
  return (
  <div className="w-full flex flex-col items-center">
    <Navbar />  
    <main className="w-full flex flex-col min-h-screen border-b dark:border-slate-800 relative">
      <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-slate-950 dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(120,119,198,0.25),transparent_60%)] md:dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(120,119,198,0.25),transparent_60%)]"></div>
      <BacklashBg height="after:h-8"/>
      <HeroSection />
    </main>
    <About /> 
    <Projects />
    <Skills />
    <Contact />
  </div>
  )
}

export default Main;