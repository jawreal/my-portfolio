import BacklashBg from "@/components/BacklashBg";
import ImageBadge from "@/components/ImageBadge";
import { Fragment } from "react";

const About = () => {
  return (
  <section className="w-full flex-1 px-6 flex flex-col md:px-20 border-b" id="about" >
     <BacklashBg height="after:h-60 z-[-1] md:hidden"/>
     <div className="flex-1 border-x dark:border-slate-800 flex flex-col md:flex-row gap-y-4 px-4 md:gap-x-4">
       <div className="h-full mt-5 md:self-center md:order-2 md:ml-auto">
         <div className="rounded-md relative w-full md:w-72 md:h-72">
           <img src="./me2.jpg" className="w-full h-full object-cover rounded-md border-2 border-slate-500 dark:border-slate-700" />
           <ImageBadge position="top-1 left-0 transform -translate-x-3 -translate-y-4">
              <Fragment>
                <span className="h-1 w-1 rounded-full bg-purple-500"></span>
                <span>FULL-STACK</span>
              </Fragment>
            </ImageBadge>
            <ImageBadge position="bottom-1 right-0 transform translate-x-3 translate-y-4">
              <Fragment>
                <span className="h-1 w-1 rounded-full bg-purple-500"></span>
                <span>AVAILABLE</span>
              </Fragment>
            </ImageBadge>
          </div>
       </div> 
       <div className="w-full pt-2 md:max-w-[25rem] mb-5">
         <h5 className="font-mono text-slate-500 dark:text-slate-400">ABOUT JORELL</h5> 
          <h1 className="text-4xl md:text-5xl font-extrabold dark:text-slate-200 mt-2 mb-4">The Developer Behind the Code</h1>
          <div className="text-slate-500 dark:text-slate-400 flex flex-col gap-y-3">
           <p>
            I enjoy transforming ideas into practical and meaningful digital experiences. What started as curiosity about how websites work eventually became a passion for building applications that solve real problems and improve user experience.
            </p>
            <p>
             I value clean architecture, continuous learning, and collaboration—whether working independently or with a team, I enjoy tackling challenges, exploring new technologies, and refining solutions through thoughtful development. 
            </p>
          </div>
       </div>
     </div>
  </section>
  )
}

export default About;