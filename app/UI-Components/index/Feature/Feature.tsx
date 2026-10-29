
import Image from "next/image";
import Link from "next/link";

import Ficon1 from "@/public/f-icon1.png";
import Ficon2 from "@/public/f-icon2.png";
import Ficon3 from "@/public/f-icon3.png";
import feature1 from "@/public/feature1.jpg";
import feature2 from "@/public/feature2.jpg";
import feature3 from "@/public/feature3.jpg";
import arrowBtn from "@/public/arrow-icon.svg"



export default function Feature() {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="features rounded-2xl p-8">
                    <div className="w-full lg:w-1/2">
                        <div className="title hero-title w-full">
                            <span className="bg-[var(--prim-color2)] text-black font-semibold Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full">What We Offer</span>
                            <h1 className="text-[2rem] leading-tight 3xl:text-[2.5rem] 3xl:leading-normal Unbounded mt-5 font-bold">
                                Structured Living Real <span style={{ fontWeight: "400" }}> Lasting </span> Results </h1>
                        </div>
                    </div>
                    {/*Card 1*/}
                    <div className="feature-card border-t border-b border-gray-500
                    cursor-pointer py-4 flex flex-col md:flex-row justify-between 
                    items-start md:items-center gap-5 mt-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:flex-1">
                            <div className="flex items-center gap-5">
                                <div className="bg-[var(--prim-color2)] p-3 rounded-full">
                                    <Image src={Ficon3} alt="Ficon1" className="w-10"/>
                                </div>
                                <h2 className="Unbounded text-2xl 3xl:text-3xl">Sober Housing <br /> With Daily Structure</h2>
                            </div>
                            <div className="flex flex-col">
                                <p className="flex items-center text-gray-400"> <span className="text-3xl text-gray-400 mr-2">•</span>Curfew and nightly check-ins</p>
                                <p className="flex items-center text-gray-400"> <span className="text-3xl text-gray-400 mr-2">•</span>Drug and alcohol testing</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="hidden md:flex items-center gap-5">
                                    <Image src={feature1} alt="Ficon1" className="feature-image rounded-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <Link href="/UI-Components/Service/serviceDetails?id=1" className="btns mt-2 md:mt-0 font-semibold Unbounded bg-white text-black flex items-center gap-3 px-5 py-3 rounded-full whitespace-nowrap
                                hover:text-white transition-all duration-500 cursor-pointer">
                                    Read More
                                    <Image src={arrowBtn} alt="arrowBtn" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/*Card 2*/}
                    <div className="feature-card border-t border-b border-gray-500
                    cursor-pointer py-4 flex flex-col md:flex-row justify-between 
                    items-start md:items-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:flex-1">
                            <div className="flex items-center gap-5">
                                <div className="bg-[var(--prim-color2)] p-3 rounded-full">
                                    <Image src={Ficon1} alt="Ficon1" className="w-10"/>
                                </div>
                                <h2 className="Unbounded text-2xl 3xl:text-3xl">Peer Support <br /> Groups and Mentoring</h2>
                            </div>
                            <div className="flex flex-col">
                                <p className="flex items-center text-gray-400"> <span className="text-3xl text-gray-400 mr-2">•</span>Weekly house meeting</p>
                                <p className="flex items-center text-gray-400"> <span className="text-3xl text-gray-400 mr-2">•</span>Mentoring from residents further along</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="hidden md:flex items-center gap-5">
                                    <Image src={feature2} alt="Ficon1" className="feature-image rounded-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <Link href="/UI-Components/Service/serviceDetails?id=2" className="btns mt-2 md:mt-0 font-semibold Unbounded bg-white text-black flex items-center gap-3 px-5 py-3 rounded-full whitespace-nowrap
                                hover:text-white transition-all duration-500 cursor-pointer">
                                    Read More
                                    <Image src={arrowBtn} alt="arrowBtn" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/*card 3*/}
                    <div className="feature-card border-t border-b border-gray-500
                    cursor-pointer py-4 flex flex-col md:flex-row justify-between 
                    items-start md:items-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:flex-1">
                            <div className="flex items-center gap-5">
                                <div className="bg-[var(--prim-color2)] p-3 rounded-full">
                                    <Image src={Ficon2} alt="Ficon1" className="w-10"/>
                                </div>
                                <h2 className="Unbounded text-2xl 3xl:text-3xl">Life Skills <br /> Work and Family</h2>
                            </div>
                            <div className="flex flex-col">
                                <p className="flex items-center text-gray-400"> <span className="text-3xl text-gray-400 mr-2">•</span>CVs, interviews and work clothes</p>
                                <p className="flex items-center text-gray-400"> <span className="text-3xl text-gray-400 mr-2">•</span>Childcare and custody paperwork</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="hidden md:flex items-center gap-5">
                                    <Image src={feature3} alt="Ficon1" className="feature-image rounded-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <Link href="/UI-Components/Service/serviceDetails?id=4" className="btns mt-2 md:mt-0 font-semibold Unbounded bg-white text-black flex items-center gap-3 px-5 py-3 rounded-full whitespace-nowrap
                                hover:text-white transition-all duration-500 cursor-pointer">
                                    Read More
                                    <Image src={arrowBtn} alt="arrowBtn" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}