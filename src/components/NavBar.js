import React from "react"
import {NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"
export default function NavBAr() {
    return (
        <header className="bg-red-600" >
            <div className="container mx-auto flex justify-between" >
                <nav className="lg:flex" > 
                    <NavLink 
                        to="/" 
                        exact
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-white-500 text-4xl font-bold cursive tracking-widest" >
                        George
                    </NavLink>
                    <NavLink 
                        to ="/post"
                        activeClassName="text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-4 mr-6  rounded text-red-200 hover:text-white-500">
                        Blog Post 
                    </NavLink>
                    <NavLink 
                        to ="/project"
                        activeClassName="text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-4 mr-6  rounded text-red-200 hover:text-white-500">
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about"
                        activeClassName="text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-4 mr-6  rounded text-red-200 hover:text-white-500"
                    >
                        About Me! 
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6" >
                    <SocialIcon url="https://github.com/imation199"
                     className="mr-4" 
                     target="_blank" 
                     bgColor="#000"
                     fgColor="#fff" 
                     style={{height : 35, width : 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/limbageorge/" 
                     className="mr-4" 
                     target="_blank" 
                     fgColor="#fff" 
                     style={{height : 35, width : 35 }} />
                    

                </div>
            </div>
        </header>
    )}