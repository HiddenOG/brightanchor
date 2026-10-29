import React from "react";
import Image from "next/image";
import Link from "next/link";
import arrowBtn from "@/public/arrow-icon.svg";
import heroShape1 from "@/public/hero-shape-1.png";

export default function Header() {
    return (
        <>
            <div className="px-[8%] lg:px-[20%] py-15 relative">
                <Image src={heroShape1} alt="heroShape1" className="absolute top-0 right-0" />
                <Image src={heroShape1} alt="heroShape1" className="absolute top-0 right-0" />
                <Image src={heroShape1} alt="heroShape1" className="absolute top-0 right-0" />
                <Image src={heroShape1} alt="heroShape1" className="absolute top-3 left-0 -rotate-[90deg]" />
                <Image src={heroShape1} alt="heroShape1" className="absolute top-3 left-0 -rotate-[90deg]" />
                <Image src={heroShape1} alt="heroShape1" className="absolute top-3 left-0 -rotate-[90deg]" />
                <span className="bg-[va(--prim-color)] Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full">Safe, Welcoming Sober Living</span>
                <div className="hero-title w-[70%] my-5">
                    <h1 className="text-[3.5rem] leading-[4.5rem] 3xl:text-7xl 3xl:leading-25 Unbounded">A <span> safe </span> place to come home to, and the <span> room </span> to steady</h1>
                </div>

                <div className="flex items-center gap-5">
                    <button className="btns bg-white text-black gap-2 px-5 py-3 rounded-full
                    hover:text-white transition-all duration-500 cursor-pointer">
                        <Link
                            className="flex Unbounded items-center"
                            href="/UI-Components/Pages/Contact"
                        >
                        Book a Tour
                        <Image src={arrowBtn} alt="ArrowBtn" className="ms-3" />
                        </Link>
                    </button>
                    <span className="cursor-pointer play-btn">
                        <i className="bi bi-play-fill mr-2 text-2xl bg-[var(--prim-color)] px-3 py-2 rounded-full"></i>
                        Our Story
                    </span>
                </div>
            </div>
        </>
    )
}