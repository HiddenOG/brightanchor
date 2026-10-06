import Image from "next/image";
import Link from "next/link";

import Services from "@/app/JsonData/Services.json";
import Appointment from "@/app/UI-Components/index/Appointment/Appointment";

import arrowBtn from "@/public/arrow-icon.svg";
import bannerImg from "@/public/Section-banners.png";

export default function Service() {
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
                    <h1 className="text-[2.5rem] lg:text-[3.5rem] Merienda">Programs</h1>
                    <p className="text-lg">
                        <Link href="/" className="hover:text-[var(--prim-color)] transition-all duration-300">Home</Link> / Programs
                    </p>
                </div>
            </div>

            {/*Service Cards*/}
            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Services.map((service) => (
                        <div
                            key={service.id}
                            className="service-card border border-gray-700 rounded-2xl p-5 flex flex-col cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <span className="service-icon p-3 rounded-full flex items-center justify-center">
                                    <Image src={service.icon} alt={service.title} width={30} height={30} className="w-7" />
                                </span>
                                <h2 className="Unbounded text-xl 3xl:text-2xl font-bold">{service.title}</h2>
                            </div>

                            <p className="text-gray-400 mt-4">{service.desc}</p>

                            <div className="service-image relative rounded-xl overflow-hidden mt-5">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={600}
                                    height={400}
                                    className="service-img w-full aspect-[5/3] object-cover"
                                />
                                <Link
                                    href={`/UI-Components/Service/serviceDetails?id=${service.id}`}
                                    className="service-btn absolute bottom-4 left-1/2 -translate-x-1/2 bg-[var(--prim-color2)] text-black font-semibold
                                    hover:text-white
                                    flex items-center gap-2 px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300"
                                >
                                    Read More
                                    <Image src={arrowBtn} alt="arrowBtn" className="w-5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*Appointment*/}
            <Appointment />
        </>
    )
}
