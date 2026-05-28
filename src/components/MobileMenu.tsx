import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import NavLinks from "@/layouts/NavLinks";
import Initials from "@/components/Initials";
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
       <div className="ml-2">
         <Initials isVisible={true} />
       </div> 
       <Button variant="ghost" className="ml-auto" onClick={onCloseDrawer}>
         <X />
       </Button>
     </div>
     <div className="px-2 pt-5">
       <NavLinks {...props} />
     </div>
     </DrawerContent>
   </Drawer>
  )
}

export default MobileMenu;