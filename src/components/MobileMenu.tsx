import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import NavLinks from "@/layouts/NavLinks"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react";
import * as React from "react";

interface IProps {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = (props: IProps) => {
  return (
  <Drawer {...props} direction="top">
   <DrawerContent className="rounded-none h-full border-0">
     <div className="w-full flex items-center p-4">
       <h1 className="text-4xl ml-2 font-extrabold dark:text-slate-200">JR</h1> 
       <DrawerClose className="ml-auto">
         <Button variant="ghost">
           <X />
         </Button>
       </DrawerClose> 
     </div>
     <div className="ml-2 pt-4">
      <NavLinks {...props} />
     </div>
     </DrawerContent>
   </Drawer>
  )
}

export default MobileMenu;