import { useEffect, useState } from "react";
import {Sun, Moon} from "lucide-react"
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
         const storedTheme = localStorage.getItem("theme");
         if(storedTheme === "dark"){
            setIsDark(true)
             document.documentElement.classList.add('dark')
         } else{
             localStorage.setItem("theme", "light")
             setIsDark(false);
         }
    }, [])
    const toggleTheme = () => {
        if (isDark) {
             document.documentElement.classList.remove('dark')
              localStorage.setItem("theme", "light")
             setIsDark(false);
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
            setIsDark(true)
        }
    }
    return(
        <>
        <button
  onClick={toggleTheme}
  className={cn(
    "fixed bottom-24 right-4 z-50 p-2 rounded-full transition-colors duration-300",
    "sm:top-5 sm:right-1 sm:bottom-auto",
    "focus:outline-none"
  )}
>
            {isDark ? (<Sun className="h-6 w-6 text-yellow-300"/> 
        ):(
         <Moon className="h-6 w-6 text-blue-900"/>
         )
         }</button>
        </>
    )
}