import BacklashBg from "@/components/BacklashBg";

const About = () => {
  return (
  <section className="w-full flex-1 px-6 flex flex-col md:px-20" id="about" >
     <div className="flex-1 border-x dark:border-slate-800 flex flex-col gap-y-4 px-4">
       <div className="w-full pt-5 md:max-w-[25rem]">
         <h5 className="font-mono text-slate-500 dark:text-slate-400">ABOUT JORELL,</h5> 
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
       <div className="h-full mt-5 md:mt-1">
         <BacklashBg height="after:h-64 after:border-t"> 
         </BacklashBg>
         <div className="rounded-md relative z-10 w-full md:w-72 md:h-72 transform -translate-y-3 md:-translate-y-6 ml-auto">
           <img src="./myself.jpg" className="w-full h-full object-cover rounded-md" /> 
          </div>
       </div>
     </div>
  </section>
  )
}

export default About;