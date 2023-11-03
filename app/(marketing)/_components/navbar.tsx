"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { useScrollTop } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";



export const Navbar = () => {

  const scrolled = useScrollTop()
  
  return (
    <div className={cn("z-50 bg-background fixed top-0 dark:bg-[#1f1f1f] flex items-center p-6 w-full ", scrolled && " border-b shadow-sm ")}>
      <div className=" flex justify-between w-full ">
      <p className="">Notion</p>
      <ModeToggle/>
      </div>
    </div>
  )
}

