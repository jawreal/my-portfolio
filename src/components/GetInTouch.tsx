import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

const GetInTouch = () => {
  return (
  <form className="w-full flex flex-col [&_label]:font-bold [&_label]:text-sm [&_label]:dark:text-slate-200 gap-y-6"> 
     <div className="flex flex-col gap-y-3">
       <Label htmlFor="fullName">FULLNAME</Label>
       <Input id="fullName" placeholder="your name (e.g., John Doe)" 
         className="shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2" />
     </div>
     <div className="flex flex-col gap-y-3">
       <Label htmlFor="emailAddress">EMAIL ADDRESS</Label>
       <Input id="emailAddress" placeholder="your email (e.g., john.doe@mail.com)" className="shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2" />
     </div>
     <div className="flex flex-col gap-y-3">
       <Label htmlFor="message">MESSAGE</Label>
       <Textarea id="message" placeholder="your message (e.g., We're excited to explore how you can contribute to our team. Let's connect. )" rows={4} className="shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2" />
     </div>
     <Button className="h-11 rounded-none mt-1">
       SEND MESSAGE
       <ArrowRight />
     </Button>
     <div className="flex flex-col gap-y-3">
       <h5 className="font-extrabold dark:text-slate-200">MY EMAIL</h5>
       <span className="text-slate-500 dark:text-slate-400">jorellrelleve@gmail.com</span>
     </div>
     <div className="flex flex-col gap-y-3">
       <h5 className="font-extrabold dark:text-slate-200">SOCIAL PROFILES</h5>
       <div className="w-full flex justify-start gap-x-2">
         <Button variant="outline" className="h-11 rounded-none mt-1 rounded-none">
            <FaLinkedin />
            LinkedIn
         </Button>
         <Button variant="outline" className="h-11 rounded-none mt-1 rounded-none">
            <SiGithub />
            GitHub
         </Button>
       </div>
     </div>
  </form>
  )
}

export default GetInTouch;