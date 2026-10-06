"use client";

import Image from "next/image";
import arrowBtn from "@/public/arrow-icon.svg";

import Projects from "@/app/JsonData/Projects.json";
import Link from 'next/link';

export default function Project() {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="w-full justify-center items-center">
                    <div className="title hero-title text-center w-full mb-10">
                        <span className="bg-[var(--prim-color2)] text-black font-semibold Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full">Our Homes</span>
                        <h1 className="text-[2rem] leading-tight 3xl:text-[2.5rem] 3xl:leading-normal Unbounded mt-5 font-bold">
                            Safe Houses Built For <br /> Steady <span style={{ fontWeight: "400" }}> Recovery. </span> </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
                    {Projects.slice(0, 6).map((project, index) => (
                        <Link
                            href={`/UI-Components/Projects/ProjectDetails?id=${project.id}`} key={index}>
                            <div className="project-card cursor-pointer flex flex-col mb-5" key={index}>
                                <div className="project-image relative rounded-2xl overflow-hidden w-full">
                                    <Image 
                                        src={project.image}
                                        alt={project.title}
                                        width={900}
                                        height={800}
                                        className="w-full h-full" 
                                    />
                                    <Image src={arrowBtn} alt="arrowBtn" className="project-icon" />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <div>
                                        <span className="text-xl px-3 py-2 rounded-full bg-gray-700/50 Merienda font-normal">
                                            {project.tag}
                                        </span>
                                        <h2 className="Unbounded text-2xl mt-3">{project.title}</h2>
                                    </div>
                                </div>
                            </div>          
                        </Link>
                    ))}
                </div>
            </div>
            
        </>
    )
}