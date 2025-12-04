"use client"
import * as React from "react"
import { MoonIcon, Sun} from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeButtonToggle() {
    const { theme,setTheme } = useTheme()
    return (

                <div onClick={()=> setTheme(theme == "dark"  ? "light" : "dark")} className={"dark:text-neutral-700  cursor-pointer flex"} >
                    <Sun size={25} className=" rotate-0 scale-100 transition-all ease-in duration-1000 dark:scale-0 dark:-rotate-90" />
                    <MoonIcon size={25} className="absolute transition-all ease-in duration-1000  scale-0 rotate-90  dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </div>

    )
}
