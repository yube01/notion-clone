"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const{isAuthenticated,isLoading} = useConvexAuth()
  return (
    <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas, Documents and Plans 
            <span className="underline ml-3">
                Notion
            </span>
        </h1>
        <h3 className="font-medium text-base sm:text-xl md:text-2xl">
            Notion is the connected places where <br />
            better, faster works happens
        </h3>
        {
            isLoading &&(
                <div className="w-full flex justify-center items-center ">
                    <Spinner size="lg"/>
                </div>
            )
        }
        {isAuthenticated && !isLoading &&(
            <>
             <Button asChild>
                <Link href="/documents">
                Enter Notion
            <ArrowRight className="h-4 w-4 ml-2"/>
                </Link>
           
        </Button>
            </>
        )}
        {
        !isAuthenticated && !isLoading &&(
          <>
         
            <SignInButton mode="modal">
              <Button size="sm" asChild>
                Get Notion Free
              </Button>
            </SignInButton>
          </>

        )
      }
        
    </div>
  )
  }