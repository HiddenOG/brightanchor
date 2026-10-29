import Image from "next/image";
import Link from "next/link";

import Projects from "@/app/JsonData/Projects.json";
import SpaicalCare from "@/app/UI-Components/index/Spaical-Care/SpaicalCare";

import arrowBtn from "@/public/arrow-icon.svg";
import bannerImg from "@/public/Section-banners.png";

export default function ProjectsPage() {
    return (
        <>
            {/*Page Banner*/}
            <div className="bg-white text-black px-[8%] lg:px-[12%] py-10 relative overflow-hidden">
                <Image
                    src={bannerImg}
                    alt="bannerImg"
                    className="banner-img hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto"
                />
                <div className="relative flex flex-col md:flex-row justify-between items-center gap-3">
                    <h1 className="text-[2rem] lg:text-[3.5rem] Merienda">Our Homes</h1>
                    <p className="text-lg">
                        <Link href="/" className="hover:text-[var(--prim-color)] transition-all duration-300">Home</Link> / Our Homes
                    </p>
                </div>
            </div>

            {/*Homes Grid*/}
            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Projects.map((project) => (
                        <Link
                            href={`/UI-Components/Projects/ProjectDetails?id=${project.id}`}
                            key={project.id}
                        >
                            <div className="project-card cursor-pointer flex flex-col mb-5">
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

            {/*Extra Support*/}
            <SpaicalCare />
        </>
    )
}
