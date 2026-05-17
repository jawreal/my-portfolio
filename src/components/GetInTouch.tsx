import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { motion } from "framer-motion";
import { animationProps } from "@/lib/animationProps";

interface IProps {
  isInview: boolean;
}

const GetInTouch = ({ isInview }: IProps) => {
  return (
    <form className="w-full flex flex-col [&_label]:font-bold [&_label]:text-sm [&_label]:dark:text-slate-200 gap-y-6">
      <motion.div {...animationProps(0.1, isInview)} className="flex flex-col gap-y-3">
        <Label htmlFor="fullName">FULLNAME</Label>
        <Input 
          id="fullName" 
          placeholder="your name (e.g., John Doe)" 
          className="shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2" 
        />
      </motion.div>

      <motion.div {...animationProps(0.2, isInview)} className="flex flex-col gap-y-3">
        <Label htmlFor="emailAddress">EMAIL ADDRESS</Label>
        <Input 
          id="emailAddress" 
          placeholder="your email (e.g., john.doe@mail.com)" 
          className="shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2" 
        />
      </motion.div>

      <motion.div {...animationProps(0.3, isInview)} className="flex flex-col gap-y-3">
        <Label htmlFor="message">MESSAGE</Label>
        <Textarea 
          id="message" 
          placeholder="your message (e.g., We're excited to explore how you can contribute to our team. Let's connect. )" 
          rows={4} 
          className="shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2" 
        />
      </motion.div>

      <motion.div {...animationProps(0.4, isInview)} className="w-full">
        <Button className="h-11 rounded-none mt-1 w-full">
          SEND MESSAGE
          <ArrowRight />
        </Button>
      </motion.div>

      <motion.div {...animationProps(0.5, isInview)} className="flex flex-col gap-y-3">
        <h5 className="font-extrabold dark:text-slate-200">MY EMAIL</h5>
        <span className="text-slate-500 dark:text-slate-400">me@gmail.com</span>
      </motion.div>

      <motion.div {...animationProps(0.6, isInview)} className="flex flex-col gap-y-3">
        <h5 className="font-extrabold dark:text-slate-200">SOCIAL PROFILES</h5>
        <div className="w-full flex justify-start gap-x-2">
          <Button variant="outline" className="h-11 rounded-none mt-1">
            <FaLinkedin />
            LinkedIn
          </Button>
          <Button variant="outline" className="h-11 rounded-none mt-1">
            <SiGithub />
            GitHub
          </Button>
        </div>
      </motion.div>
    </form>
  );
}

export default GetInTouch;