import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
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
  const onCloseDrawer = React.useCallback(() => props.onOpenChange(false), [props]);
  
  return (
  <Drawer {...props} direction="top">
   <DrawerContent className="rounded-none h-full border-0">
     <DrawerHeader className="hidden">
       {/* Required to render but just hidden because it's not necessary here */}
       <DrawerTitle />
       <DrawerDescription />
     </DrawerHeader>
     <div className="w-full flex items-center p-4">
       <h1 className="text-4xl ml-2 font-extrabold dark:text-slate-200">JR</h1> 
       <Button variant="ghost" className="ml-auto" onClick={onCloseDrawer}>
         <X />
       </Button>
     </div>
     <div className="px-2 pt-4">
       <NavLinks {...props} />
     </div>
     </DrawerContent>
   </Drawer>
  )
}

export default MobileMenu;