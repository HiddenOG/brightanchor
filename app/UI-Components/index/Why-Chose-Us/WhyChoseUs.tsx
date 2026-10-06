"use client";

import Image from "next/image";

import choose1 from "@/public/choose1.jpg";
import choose2 from "@/public/choose2.jpg";
import choose3 from "@/public/choose3.jpg";

import CountUp from "react-countup";

export default function WhyChoseUs() {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/2">
                        <div className="title hero-title w-full mb-10">
                            <span className="bg-[var(--prim-color2)] text-black font-semibold Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full">Why Choose Us</span>
                            <h1 className="text-[2rem] leading-tight 3xl:text-[2.5rem] 3xl:leading-normal Unbounded mt-5 font-bold">
                                Built For The Work Of <span style={{ fontWeight: "400" }}> Starting </span> Over.</h1>
                        </div>
                        <Image src={choose1} alt="choose1" className="rounded-2xl w-full aspect-[5/3] object-cover object-bottom" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col w-full">
                                <Image src={choose2} alt="choose2" className="rounded-2xl mb-6 w-full aspect-[10/9] object-cover" />
                                <h2 className="Unbounded text-2xl 3xl:text-3xl mb-2">What The Structure Actually Does </h2>
                                <p className="text-gray-400">It removes the decisions that get made badly at eleven at night. Curfew, testing, and someone in the next room who notices when you go quiet.</p>
                            </div>
                            <div className="relative hidden md:block">
                                <Image src={choose3} alt="choose3" className="rounded-2xl w-full aspect-[4/7] object-cover" />
                                <span className="absolute top-[55%] left-[40%] -translate-x-1/2 -translate-y-1/2 cursor-pointer play-btn">
                                    <i className="bi bi-play-fill mr-2 text-2xl bg-[var(--prim-color)] px-3 py-2 rounded-full"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[var(--prim-color2)] rounded-md mt-20">
                    <div className="flex flex-col md:flex-row justify-between items-center px-5 lg:px-20 py-10 gap-5">
                        <h2 className="w-full Unbounded text-2xl 3xl:text-3xl text-black leading-10">Recovery Today <br /> Stability Tomorrow</h2>
                        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
                            <div className="flex flex-col text-black">
                                <span className="Unbounded text-3xl 3xl:text-4xl">
                                    <CountUp duration={5} end={480} />+
                                </span>
                                <p className="Unbounded">Residents Housed</p>
                            </div>
                            <div className="flex flex-col text-black">
                                <span className="Unbounded text-3xl 3xl:text-4xl">
                                    <CountUp duration={10} end={35} />+
                                </span>
                                <p className="Unbounded">Beds In The House</p>
                            </div>
                            <div className="flex flex-col text-black">
                                <span className="Unbounded text-3xl 3xl:text-4xl">
                                    <CountUp duration={10} end={245} />+
                                </span>
                                <p className="Unbounded">Alumni Still In Touch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        </>
    )
}