import { type ReactNode } from "react";
import SystemTheme from "@/components/SystemTheme";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface IProps {
  children: ReactNode;
}

// Only display in bigger devices 
const ThemeSettings = ({ children }: IProps) => {
  return (
  <Popover>
    <PopoverTrigger asChild>
      {children}
    </PopoverTrigger>
    <PopoverContent className="rounded-none mr-3 min-w-[23rem]">
      <SystemTheme />
    </PopoverContent>
  </Popover>
  )
}

export default ThemeSettings