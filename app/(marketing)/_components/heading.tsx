"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
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
        <Button >
            Enter Notion
            <ArrowRight className="h-4 w-4 ml-2"/>
        </Button>
    </div>
  )
  }