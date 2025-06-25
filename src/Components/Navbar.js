
import React from "react";
import {NavLink} from "react-router-dom";
import {Home} from "lucide-react"


export default function Navbar(){


    return(
        <nav className="flex justify-between py-3 px-6 text-lg">

            <NavLink to="/" className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:underline"
          }><Home/></NavLink>



            <div className="flex gap-4">
                <NavLink to="/projects" className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:underline"
          }>Projects</NavLink>
                <NavLink to="/about" className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:underline"
          }>About</NavLink>

            </div>



        </nav>

    )
}