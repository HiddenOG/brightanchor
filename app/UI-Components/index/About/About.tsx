import Image from "next/image"

import AboutImg from "@/public/about.png";
import heroShape1 from "@/public/about-element1.png";
import heroShape2 from "@/public/about-element2.png";
import heroShape3 from "@/public/dots-element.png";
import heroShape4 from "@/public/about-element3.png";


export default function About() {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-15 pb-0 lg:pb-15">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                    <div className="w-full lg:w-1/2">
                        <div className="title hero-title">
                            <span className="bg-[var(--prim-color2)] text-black font-semibold Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full">About</span>
                            <h1 className="text-[2rem] leading-tight 3xl:text-[2.5rem] 3xl:leading-normal Unbounded mt-5">
                                A Comfortable House Where <span> People </span> Steady Themselves</h1>
                        </div>
                        <p className="mt-5 text-gray-400">Bright Anchor is a sober living home for men and women: safe, comfortable and genuinely welcoming. Most residents arrive from treatment, a hospital bed or a situation that was never going to hold. What they get here is a bed in a house that feels like one, a week with a shape to it, and people in the next room who already know what the hard nights look like.</p>
                        <div className="flex flex-col mt-10">
                            <div className="flex flex-col gap-2 mb-10">
                                <div className="flex gap-5">
                                    <h2 className="Unbounded text-xl md:text-2xl 3xl:text-3xl">01</h2>
                                    <h2 className="Unbounded text-xl md:text-2xl 3xl:text-3xl">A Week With A Shape To It</h2>
                                </div>
                                <p className="ps-15 text-gray-400">Curfew at the same time for everyone. Chores on a rota. Testing without warning. None of it is there to catch you out, and all of it means the week holds its shape on the days your own willpower will not.</p>
                            </div>
                            <div className="flex flex-col gap-2 mb-10">
                                <div className="flex gap-5">
                                    <h2 className="Unbounded text-xl md:text-2xl 3xl:text-3xl">02</h2>
                                    <h2 className="Unbounded text-xl md:text-2xl 3xl:text-3xl">People Who Have Been There</h2>
                                </div>
                                <p className="ps-15 text-gray-400">House meetings on a set evening, shared meals most nights, and mentoring from residents six months or a year further along. Advice lands differently from someone who sat in your chair last spring.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 relative">
                        <Image src={AboutImg} alt="AboutImg" className="about-img" />
                        <Image src={heroShape4} alt="heroShape4" className="absolute bottom-0 left-3 lg:-left-10 -z-1" />
                        <Image src={heroShape1} alt="heroShape1" className="about-ele1 hidden lg:block absolute bottom-0 -left-20 " />
                        <Image src={heroShape2} alt="heroShape2" className="about-ele2 hidden md:block absolute top-0 -left-30 " />
                        <Image src={heroShape2} alt="heroShape2" className="about-ele2 hidden lg:block absolute bottom-5 right-0 " />
                        <Image src={heroShape1} alt="heroShape1" className="about-ele1 hidden md:block absolute top-0 -right-20 " />
                        <Image src={heroShape3} alt="heroShape3" className="hero-shape1 w-[250px] absolute top-10 left-25 -z-1" />
                    </div>
                </div>
            </div>
        </>
    )
}