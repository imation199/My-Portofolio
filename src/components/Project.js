import React, {useState, useEffect} from "react"
import sanityClient from "../client.js";
export default function Project() {
    
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error)
     }, []);
    
    
    return (

        <div  className= "bg-green-100 min-h-screen p-12" >
            <section className= "container mx-auto">
                <h1 className= "text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className= "text-lg text-gray-600 flex justify-center mb-12">Welcome to my projects page!</h2>
                <section>
                   {projectData && projectData.map((project,index)=>(
                    <article className= " relative rounded-lg shadow-xl bg-white bg-16 p-8 my-5">
                        <h3 className= "text-gray-800 text-3xl font-bold mb-12 hover: text-red-700">
                           <a
                               href={project.link}
                               alt={project.title}
                               target= "_blank"
                               rel = "noopener noreferrer">
                               {project.title}
                            </a> 
                        </h3>
                        <div className= "text-gray-500 text-xs lg:flex lg:space-x-4 ">
                            <div > 
                                <strong className= "font-bold" >Finished on</strong>:{""}
                                {new Date(project.date).toLocaleDateString()}
                            </div>
                            <div >
                                <strong className= "font-bold">Company</strong>:{""}
                                {project.place}
                            </div>
                            <div >
                                <strong className= "font-bold"> Type</strong>:{""}
                                {project.projectType}
                            </div>
                        </div>
                        <p className= "my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                            <a href={project.link} 
                                rel ="noopener noreferrer" 
                                target="_blank" 
                                className="text-red-500 font-bold hover:underline hover:text-red-4000">
                                    View The Project{" "}
                        <span role="img" aria-label="right pointer">👉</span>
                        </a>
                    </article>
                    ))}
                </section>
            </section>
        </div>

    )
}