"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";



export const Navbar = () => {

  const {isAuthenticated,isLoading} = useConvexAuth()
  const scrolled = useScrollTop()
  
  return (
    <div className={cn("z-50 bg-background fixed top-0 dark:bg-[#1f1f1f] flex items-center p-6 w-full ", scrolled && " border-b shadow-sm ")}>
      <div className=" flex justify-between w-full ">
      <p className="">Notion</p>
      {isLoading &&(
        <Spinner/>
      )}
      {
        !isAuthenticated && !isLoading &&(
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">
                Get Notion Free
              </Button>
            </SignInButton>
          </>

        )
      }
      {
        isAuthenticated && !isLoading &&(
          <>
            <Button variant="ghost" size="sm" asChild>
                <Link href="/documents">
                    Enter Notion
                </Link>
            </Button>
            <UserButton afterSignOutUrl="/"/>
          </>
        )
      }
      <ModeToggle/>
      </div>
    </div>
  )
}

