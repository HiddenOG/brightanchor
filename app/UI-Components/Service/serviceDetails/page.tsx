import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Services from "@/app/JsonData/Services.json";

import bannerImg from "@/public/Section-banners.png";

export default async function ServiceDetails({
    searchParams,
}: {
    searchParams: Promise<{ id?: string }>;
}) {
    const { id } = await searchParams;
    const service = Services.find((item) => item.id === (id ?? "1"));

    if (!service) notFound();

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
                    <h1 className="text-[2rem] lg:text-[3.5rem] Merienda">Program Details</h1>
                    <p className="text-lg">
                        <Link href="/" className="hover:text-[var(--prim-color)] transition-all duration-300">Home</Link> / Program Details
                    </p>
                </div>
            </div>

            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/*Main Content*/}
                    <div className="lg:col-span-2 flex flex-col">
                        <div className="flex flex-col md:flex-row gap-5">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={600}
                                height={400}
                                className="img-zoom w-full md:w-1/2 aspect-[16/9] rounded-2xl object-cover"
                            />
                            <div className="w-full md:w-1/2 flex flex-col">
                                <h2 className="Unbounded text-2xl 3xl:text-3xl font-bold">{service.title}</h2>
                                <p className="text-[var(--prim-color)] mt-3">{service.subtitle}</p>
                                {service.intro.map((text, index) => (
                                    <p key={index} className="text-gray-400 mt-3">{text}</p>
                                ))}
                            </div>
                        </div>

                        {/*Bullet list*/}
                        <h2 className="Unbounded text-2xl 3xl:text-3xl font-bold mt-10">{service.bulletsTitle}</h2>
                        <div className="flex flex-col gap-3 mt-5">
                            {service.bullets.map((point, index) => (
                                <p key={index} className="flex items-start gap-3 text-gray-400">
                                    <i className="ri-arrow-right-double-line text-[var(--prim-color2)]"></i>
                                    {point}
                                </p>
                            ))}
                        </div>

                        {/*Second section*/}
                        <h2 className="Unbounded text-2xl 3xl:text-3xl font-bold mt-10">{service.sectionTitle}</h2>
                        {service.section.map((text, index) => (
                            <p key={index} className="text-gray-400 mt-3">{text}</p>
                        ))}

                        {/*Focus blocks*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                            {service.focus.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <Image src={service.icon} alt={item.title} width={40} height={40} className="w-10 invert" />
                                    <h3 className="Unbounded text-lg font-bold mt-3">{item.title}</h3>
                                    <p className="text-gray-400 mt-2">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*Sidebar*/}
                    <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
                        <div className="sidebar-card border border-gray-700 rounded-2xl p-5">
                            <h2 className="Unbounded text-xl 3xl:text-2xl font-bold mb-5">Programs</h2>
                            <div className="flex flex-col gap-3">
                                {Services.map((item, index) => (
                                    <Link
                                        key={item.id}
                                        href={`/UI-Components/Service/serviceDetails?id=${item.id}`}
                                        className={`sidebar-link flex items-center justify-between gap-2 border border-gray-700 rounded-full px-4 py-2
                                        ${item.id === service.id ? "is-active" : ""}`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <i className="ri-arrow-right-double-line"></i>
                                            {item.title}
                                        </span>
                                        <span>(0{index + 1})</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-card border border-gray-700 rounded-2xl p-5 flex flex-col items-center text-center">
                            <h2 className="Unbounded text-xl 3xl:text-2xl font-bold">Need Help? Call Us</h2>
                            <span className="bg-[var(--prim-color)] w-20 h-20 rounded-full flex items-center justify-center my-5">
                                <i className="bi bi-telephone text-3xl"></i>
                            </span>
                            <p className="text-gray-400">
                                Admissions are open 24 hours a day. Call us and we will talk through beds, costs and what the house expects.
                            </p>
                            <h3 className="Unbounded text-xl mt-4">720-933-9451</h3>
                            <div className="footer-social-icon mt-5 flex gap-3">
                                <i className="bi bi-facebook rounded-full text-xl border border-gray-600 p-4 py-3"></i>
                                <i className="bi bi-linkedin rounded-full text-xl border border-gray-600 p-4 py-3"></i>
                                <i className="bi bi-instagram rounded-full text-xl border border-gray-600 p-4 py-3"></i>
                                <i className="bi bi-twitter-x rounded-full text-xl border border-gray-600 p-4 py-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
