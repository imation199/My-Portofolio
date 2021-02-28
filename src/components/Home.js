import React from "react"
import image from "../G0328353.JPG";

export default function Home() {
    return (
        <div>
            <img src={image} alt="Sky Diving" className="absolute object-cover w-full h-full" />
            <section className="relative flex justyfi-center min-h-screen pt-12 lg: pt-64 px-8" >
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name"  > Aloha. I`m George. </h1>
            </section>
        </div>
    )
}