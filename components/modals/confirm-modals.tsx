"use client";

import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import React from "react";


interface ConfirmModalsProps {
    children: React.ReactNode;
    onConfirm:()=>void;
}


export const ConfirmModal = ({
    children,
    onConfirm

}:ConfirmModalsProps) => {

    const handleConfirm = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
        e.stopPropagation()
        onConfirm()


    }
  return (
    <AlertDialog>
        <AlertDialogTrigger onClick={(e)=>e.stopPropagation()} asChild>
            {children}
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Are you absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={(e)=>e.stopPropagation()}>
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleConfirm}>
                    Confirm
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

