import Image from "next/image";

import EnquiryForm from "@/app/Components/EnquiryForm/EnquiryForm";

import AboutImg from "@/public/about.png";

import apoentment from "@/public/apoentment.jpg"
import arrowBtn from "@/public/arrow-icon.svg";


export default function Appointment() {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] lg:py-15">
                <div className="w-full relative flex flex-col-reverse lg:flex-row justify-between items-center gap-2">
                    <div className="w-full lg:w-1/1">
                        <Image src={apoentment} alt="Appointment" className="rounded-2xl" />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col lg:absolute top-22 right-0 bg-white p-10 rounded-2xl">
                        <div className="title hero-title">
                            <span className="bg-[var(--prim-color2)] text-black font-semibold Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full">Admissions</span>
                            <h1 className="text-[2rem] leading-tight 3xl:text-[2.5rem] 3xl:leading-normal Unbounded text-black mt-5">
                                Book a <span style={{color: "#000" , fontWeight: "400"}}> House Tour </span> </h1>
                        </div>
                        <EnquiryForm
                            inputClass="w-full text-black bg-gray-200/60 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]"
                            buttonClass="btns btns-dark bg-[var(--prim-color)] text-white text-lg 3xl:text-xl mt-5 Unbounded w-full text-center flex items-center justify-center gap-3 px-5 py-3 rounded-full cursor-pointer disabled:opacity-60"
                            buttonLabel="Request a Tour"
                            subjectPlaceholder="Preferred move-in date"
                            messagePlaceholder="Tell us a little about your situation"
                            arrowClass="invert"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}