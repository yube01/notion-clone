import { useEffect, useState } from "react"

export const useScrollTop =(thresshold =10)=>{
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll =()=>{
            if(window.scrollY > thresshold){
                setScrolled(true)
            }else{
                setScrolled(false)
            }


        }
        
        window.addEventListener("scroll",handleScroll)
        return ()=> window.removeEventListener("scroll",handleScroll)

    },[thresshold])

    return scrolled
}