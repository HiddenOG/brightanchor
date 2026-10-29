import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Projects from "@/app/JsonData/Projects.json";

import bannerImg from "@/public/Section-banners.png";

export default async function ProjectDetails({
    searchParams,
}: {
    searchParams: Promise<{ id?: string }>;
}) {
    const { id } = await searchParams;
    const home = Projects.find((item) => item.id === (id ?? "1"));

    if (!home) notFound();

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
                    <h1 className="text-[2rem] lg:text-[3.5rem] Merienda">Home Details</h1>
                    <p className="text-lg">
                        <Link href="/" className="hover:text-[var(--prim-color)] transition-all duration-300">Home</Link> / Home Details
                    </p>
                </div>
            </div>

            <div className="px-[8%] lg:px-[12%] py-15">
                {/*Intro*/}
                <div className="flex flex-col lg:flex-row gap-8">
                    <Image
                        src={home.image}
                        alt={home.title}
                        width={900}
                        height={700}
                        className="img-zoom w-full lg:w-1/2 h-auto rounded-2xl object-cover"
                    />
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <div>
                            <span className="text-xl px-3 py-2 rounded-full bg-gray-700/50 Merienda font-normal">
                                {home.tag}
                            </span>
                        </div>
                        <h2 className="Unbounded text-2xl 3xl:text-3xl font-bold mt-5">{home.title}</h2>
                        <p className="text-gray-400 mt-4">{home.desc}</p>
                        <p className="text-gray-400 mt-3">{home.desc2}</p>
                        <p className="text-gray-400 mt-3">{home.desc3}</p>
                    </div>
                </div>

                {/*Info bar*/}
                <div className="sidebar-card border border-gray-700 rounded-2xl mt-10 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <h3 className="Unbounded text-xl">Location</h3>
                        <p className="text-gray-400 mt-2">{home.info.location}</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="Unbounded text-xl">Residents</h3>
                        <p className="text-gray-400 mt-2">{home.info.residents}</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="Unbounded text-xl">Rooms</h3>
                        <p className="text-gray-400 mt-2">{home.info.rooms}</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="Unbounded text-xl">Availability</h3>
                        <p className="text-gray-400 mt-2">{home.info.opened}</p>
                    </div>
                </div>

                {/*Two blocks*/}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-15">
                    {home.blocks.map((block, index) => (
                        <div key={index} className="flex flex-col">
                            <Image
                                src={block.image}
                                alt={block.title}
                                width={700}
                                height={450}
                                className="img-zoom w-full h-auto rounded-2xl object-cover"
                            />
                            <h2 className="Unbounded text-2xl 3xl:text-3xl font-bold mt-5">{block.title}</h2>
                            <p className="text-gray-400 mt-3">{block.text}</p>
                            <div className="flex flex-col gap-3 mt-4">
                                {block.bullets.map((point, i) => (
                                    <p key={i} className="flex items-start gap-3 text-gray-400">
                                        <i className="ri-arrow-right-double-line text-[var(--prim-color2)]"></i>
                                        {point}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/*Closing*/}
                <h2 className="Unbounded text-2xl 3xl:text-3xl font-bold mt-15">{home.closingTitle}</h2>
                {home.closing.map((text, index) => (
                    <p key={index} className="text-gray-400 mt-3">{text}</p>
                ))}
            </div>
        </>
    )
}
