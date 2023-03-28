import React from 'react'
import { Outlet, Link } from "react-router-dom";

import "./Header.css"
import dark from "../image/dark.png"

function Nav() {
    return (
        <header class="Header">
            <div class="HeaderContainer">
                <div className='logo'>

                <Link to="/">Sudhanshu</Link>

                </div>
                <div className='Navigator'>


                    <Link to="/">Home</Link>
                    <Link to="/Project">Project</Link>
                    <Link to="/About">About</Link>
                    <a class="" href='https://drive.google.com/file/d/1Cy39MoSvw3keOmCJJDDvDtNQUx0S8U-4/view?usp=sharing' target='_blank'>Resume</a>

            
                </div>
            </div>
        </header>
    )
}


export default Nav 
