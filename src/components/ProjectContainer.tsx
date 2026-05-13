import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { type IProjectsData } from "@/lib/projectsData";
import { useMemo, lazy, Suspense } from "react";
const Image = lazy(() => import("@/components/Image"));


interface IProps extends IProjectsData {
  projectNumber: number;
}

const ProjectContainer = ({ projectNumber, title, imgSrc }: IProps) => {
  const formatNumber = useMemo(() => {
    // Add zero to a whole number (e.g., 01, 02, etc.)
    return projectNumber.toString().padStart(2, "0");
  }, [projectNumber]);
  
  return (
  <Card className="rounded-none p-0 border shadow-none">
    <CardContent className="p-0 flex flex-col">
      <div className="h-44 w-full relative">
        <span className="h-10 w-10 font-extrabold bg-zinc-950/80 absolute top-3 left-3 border border-zinc-900 flex items-center text-sm justify-center text-slate-200">{formatNumber}</span>
         <Suspense fallback={<Skeleton className="w-full h-full" />}>
           <Image url={imgSrc} className="w-full h-full object-cover" />
         </Suspense>
      </div>
      <div className="flex flex-col gap-y-3 p-6">
         <h5 className="text-xl font-bold dark:text-slate-200">{title}</h5>
         <div className="w-full flex flex-col gap-y-3 [&_button]:h-10">
           <Button className="rounded-none">
             View Project
           </Button>
           <Button variant="outline" className="rounded-none dark:bg-slate-900 shadow-none">
              Live Preview
           </Button> 
          </div>
      </div>
    </CardContent>
  </Card>
  )
}


export default ProjectContainer;