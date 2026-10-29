"use client";

import Image from "next/image";

import starImg from "@/public/star-text.png";

import Marque from "react-fast-marquee";


export default function Marquee() {
    return (
        <Marque speed={60} gradient={false} className="py-6 border-t border-b border-gray-500">
            <div className="flex items-center gap-3 mr-5">
                <Image src={starImg} alt="StarImg" className="invert" />
                <h1 className="Unbounded text-2xl 3xl:text-3xl">Structured Sober Living</h1>
            </div>
            <div className="flex items-center gap-3 mr-5">
                <Image src={starImg} alt="StarImg" className="invert" />
                <h1 className="Unbounded text-2xl 3xl:text-3xl">Safe And Welcoming</h1>
            </div>
            <div className="flex items-center gap-3 mr-5">
                <Image src={starImg} alt="StarImg" className="invert" />
                <h1 className="Unbounded text-2xl 3xl:text-3xl">Stability With Optimism</h1>
            </div>
            <div className="flex items-center gap-3 mr-5">
                <Image src={starImg} alt="StarImg" className="invert" />
                <h1 className="Unbounded text-2xl 3xl:text-3xl">Structured Sober Living</h1>
            </div>
            <div className="flex items-center gap-3 mr-5">
                <Image src={starImg} alt="StarImg" className="invert" />
                <h1 className="Unbounded text-2xl 3xl:text-3xl">Safe And Welcoming</h1>
            </div>
            <div className="flex items-center gap-3 mr-5">
                <Image src={starImg} alt="StarImg" className="invert" />
                <h1 className="Unbounded text-2xl 3xl:text-3xl">Stability With Optimism</h1>
            </div>
        </Marque>
    )
}