"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

const DocumentsPage = () => {
  const {user} = useUser()

  const create = useMutation(api.documents.create);


  const onCreate =()=>{
    const promise  = create({ title:"Untitled" })

    toast.promise(promise,{
      loading:"Creating a new note...",
      success:"New note created",
      error:"Failed to create new note"
    })

  }



  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty.png"
      alt="image"
      height="300"
      width="300"
      className="dark:hidden"
      />
      <Image src="/empty-dark.png"
      alt="image"
      height="300"
      width="300"
      className="hidden dark:block"
      />
    <h2 className="text-lg font-medium">
      Welcome to {user?.firstName}&apos;s Notion
    </h2>
    <Button onClick={onCreate}>
      <PlusCircle className="mr-2 h-4 w-4"/>
      Create a note
    </Button>
      

      </div>
  )
}
export default DocumentsPage