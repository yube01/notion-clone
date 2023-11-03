import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
    subsets: ["latin"],
    weight:["400","600"]
})

export const Logo = ()=>{
    return(
        <div className="md:flex items-center gap-x-2 md:justify-between">
            <div className="flex gap-3"><Image src="/next.svg" height="40" width="40" alt="Logo"/>
            <p className={cn("font-semibold",font.className)}>Notion </p></div>
            <div className=" hidden md:flex md:items-center text-muted-foreground ">
                <Button variant="ghost" size="sm">
                Privacy Policy
                </Button>
                <Button variant="ghost" size="sm">
                Terms and Conditions
                </Button>
                
            </div>

        </div>
    )
}