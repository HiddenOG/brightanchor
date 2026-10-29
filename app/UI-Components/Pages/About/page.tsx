import Image from "next/image";
import Link from "next/link";

import About from "@/app/UI-Components/index/About/About";
import Feature from "@/app/UI-Components/index/Feature/Feature";
import WhyChoseUs from "@/app/UI-Components/index/Why-Chose-Us/WhyChoseUs";
import SpaicalCare from "@/app/UI-Components/index/Spaical-Care/SpaicalCare";
import Testimonial from "@/app/UI-Components/index/Testimonial/Testimonial";

import bannerImg from "@/public/Section-banners.png";

export default function AboutPage() {
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
                    <h1 className="text-[2rem] lg:text-[3.5rem] Merienda">About</h1>
                    <p className="text-lg">
                        <Link href="/" className="hover:text-[var(--prim-color)] transition-all duration-300">Home</Link> / About
                    </p>
                </div>
            </div>

            <About />
            <Feature />
            <WhyChoseUs />
            <SpaicalCare />
            <Testimonial />
        </>
    )
}
