
import Image from "next/image";
import Link from "next/link";
import arrowBtn from "@/public/arrow-icon.svg";
import chatIcon from "@/public/chat-icon.png";
import behain from "@/public/behain.png";

export default function SpaicalCare() {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                    <div className="flex flex-col w-full lg:w-1/2">
                        <div className="title hero-title w-full mb-10">
                            <span className="bg-[var(--prim-color2)] text-black Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full">Extra Support</span>
                            <h1 className="text-[2rem] Unbounded mt-5 font-bold">
                                More than a bed <br /> <span style={{ fontWeight: "400" }}>Support </span> that keeps going </h1>
                        </div>
                        <p className="text-gray-400">A safe room is the starting point, not the whole job. Residents work with a key worker on the things that decide whether this holds: a job, a doctor, a court date, a daughter who is not ready to talk yet, and somewhere steady to go next.</p>
                        <div className="flex items-center gap-5 mt-5">
                            <Link href="/UI-Components/Service" className="btns bg-white text-black flex items-center gap-3 px-5 py-3 rounded-full whitespace-nowrap
                            hover:text-white transition-all duration-500 cursor-pointer">
                                Read More
                                <Image src={arrowBtn} alt="arrowBtn" />
                            </Link>
                            <span className="cursor-pointer flex items-center gap-3">
                                <Image src={chatIcon} alt="chatIcon" />
                                <div>
                                    <h2>24/7 Admissions</h2>
                                    <h2>720-933-9451</h2>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col gap-5">           
                            <div className="bg-white hover:bg-[var(--prim-color2)] flex items-center gap-3 text-black p-3 transition-all duration-300 cursor-pointer rounded-lg">
                                <Image src={arrowBtn} alt="arrowBtn" />
                                <h2 className="Unbounded text-xl">One-to-one key worker sessions</h2>
                            </div>
                            <div className="bg-white hover:bg-[var(--prim-color2)] flex items-center gap-3 text-black p-3 transition-all duration-300 cursor-pointer rounded-lg">
                                <Image src={arrowBtn} alt="arrowBtn" />
                                <h2 className="Unbounded text-xl">Work, benefits, housing and court dates</h2>
                            </div>
                        </div>
                        <div className="behain mt-5 rounded-2xl overflow-hidden py-5 px-4 flex flex-col justify-center items-center gap-5 text-center">
                            <div className="behain-img">
                                <Image src={behain} alt="behain" />
                            </div>
                            <h2 className="Unbounded text-2xl">Building a recovery community</h2>
                            <p className="w-[90%]">Residents come and go, but the community stays. Alumni return for house meetings, mentor newer residents and show that the work holds up outside these walls.</p>
                            <Link href="/UI-Components/Service/serviceDetails?id=6" className="btns bg-white text-black flex items-center gap-2 px-5 py-3 rounded-full
                            hover:text-white transition-all duration-500 cursor-pointer">
                                Read More
                                <Image src={arrowBtn} alt="arrowBtn" />
                            </Link>
                        </div> 
                    </div>
                </div>      
            </div>
        </>
    )
}