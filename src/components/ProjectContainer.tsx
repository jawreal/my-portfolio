import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { type IProjectsData } from "@/lib/projectsData";
import { useMemo, useCallback, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
const Image = lazy(() => import("@/components/Image"));


interface IProps extends IProjectsData {
  projectNumber: number;
}

const ProjectContainer = ({ projectNumber, title, imgSrc, link }: IProps) => {
  const navigate = useNavigate();
  const formatNumber = useMemo(() => {
    // Add zero to a whole number (e.g., 01, 02, etc.)
    return projectNumber.toString().padStart(2, "0");
  }, [projectNumber]);
  
  const onNavigate = useCallback(() => {
     navigate(`/preview/${projectNumber}`)
  }, [navigate, projectNumber]);
  
  return (
  <Card className="rounded-none p-0 border shadow-none min-w-xl ">
    <CardContent className="p-0 flex flex-col">
      <div className="h-44 w-full relative border-b border-slate-100 dark:border-slate-900">
        <span className="h-10 w-10 font-extrabold bg-zinc-950/80 absolute top-3 left-3 border border-zinc-900 flex items-center text-sm justify-center text-slate-200">{formatNumber}</span>
         <Suspense fallback={<Skeleton className="w-full h-full" />}>
           <Image url={imgSrc} className="w-full h-full object-cover" />
         </Suspense>
      </div>
      <div className="flex flex-col gap-y-3 p-6">
         <h5 className="text-xl font-bold dark:text-slate-200">{title}</h5>
         <div className="w-full flex flex-col gap-y-3 [&_button]:h-10">
           <Button className="rounded-none" onClick={onNavigate}>
             View Project
           </Button>
           <a href={link ?? "#"} target="_blank" rel="noopener noreferrer" className="rounded-none shadow-none w-full h-10 ml-auto disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm border border-slate-300 dark:border-slate-800 dark:bg-slate-900 font-medium active:scale-95">
              Live Preview
           </a> 
          </div>
      </div>
    </CardContent>
  </Card>
  )
}


export default ProjectContainer;