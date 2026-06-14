import ImageBadge from "@/components/ImageBadge";
import { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { animationProps } from "@/lib/animationProps";

const About = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  
  return (
  <section className="w-full flex justify-center">
   <div className="w-full flex-1 px-6 flex flex-col md:px-20 border-y dark:border-slate-900 py-10 max-w-7xl" id="about" >
     <div className="flex-1 dark:border-slate-900 flex flex-col md:flex-row gap-y-4 md:gap-x-4">
       {/* Profile image */}
       <motion.div
         {...animationProps(0.8, imageInView)}
         className="h-full md:self-center order-2 md:ml-auto">
         <div className="rounded-md relative w-[calc(100%-2rem)] mx-auto md:w-72 md:h-72 z-10">
           <img src="https://res.cloudinary.com/dfr6tbwcf/image/upload/v1780466584/me2_ez7wl5.jpg" className="w-full h-72 object-cover border border-slate-500 dark:border-slate-700" />
           <ImageBadge position="top-1 left-0 transform -translate-x-4 -translate-y-4">
              <Fragment>
                <span className="h-1 w-1 rounded-full bg-purple-500"></span>
                <span>FULL-STACK</span>
              </Fragment>
            </ImageBadge>
            <ImageBadge position="bottom-1 right-0 transform translate-x-3 translate-y-3">
              <Fragment>
                <span className="h-1 w-1 rounded-full bg-purple-500"></span>
                <span>AVAILABLE</span>
              </Fragment>
            </ImageBadge>
          </div>
       </motion.div> 
       
       {/* About description */}
       <div ref={imageRef} className="w-full pt-2 md:max-w-sm xl:max-w-md mb-5">
          <motion.h5
           {...animationProps(0.6, imageInView)}
           className="font-mono text-slate-500 dark:text-slate-400 text-xs">ABOUT JORELL</motion.h5> 
          <motion.h1
           {...animationProps(0.8, imageInView)}
           className="text-3xl font-extrabold uppercase dark:text-slate-200 mt-2 mb-2 leading-9">The developer behind the code</motion.h1>
          <motion.div 
           {...animationProps(1, imageInView)}
           className="flex flex-col gap-y-3 [&_p]:text-slate-500  [&_p]:dark:text-slate-400">
           <p>
             I'm a fullstack developer from the Philippines, graduating with a BSIT degree in 2026. I build web applications with React, Node.js, TypeScript, and MongoDB—from concept to deployment.
            </p>
            <p>
              I specialize in building full-stack applications with modern JavaScript ecosystems, and I'm currently expanding into PostgreSQL with Drizzle ORM and implementing robust authentication systems. I work across the entire stack: designing APIs, managing databases, and creating responsive user interfaces.
            </p>
          </motion.div>
       </div>
     </div>
    </div>
  </section>
  )
}

export default About;