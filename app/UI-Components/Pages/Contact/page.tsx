import Image from "next/image";
import Link from "next/link";

import EnquiryForm from "@/app/Components/EnquiryForm/EnquiryForm";

import arrowBtn from "@/public/arrow-icon.svg";
import bannerImg from "@/public/Section-banners.png";
import contactImg from "@/public/sub-contact.jpg";

export default function ContactPage() {
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
                    <h1 className="text-[2rem] lg:text-[3.5rem] Merienda">Contact</h1>
                    <p className="text-lg">
                        <Link href="/" className="hover:text-[var(--prim-color)] transition-all duration-300">Home</Link> / Contact
                    </p>
                </div>
            </div>

            {/*Info cards*/}
            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="contact-card border border-gray-700 rounded-2xl p-6 flex flex-col">
                        <span className="bg-[var(--prim-color2)] text-black w-12 h-12 rounded-full flex items-center justify-center">
                            <i className="bi bi-geo-alt-fill text-xl"></i>
                        </span>
                        <h2 className="Unbounded text-2xl font-bold mt-4">Address</h2>
                        <p className="text-gray-400 mt-2">
                            10973 Swang Link Drive<br />
                            Houston TX 77043
                        </p>
                    </div>

                    <div className="contact-card border border-gray-700 rounded-2xl p-6 flex flex-col">
                        <span className="bg-[var(--prim-color2)] text-black w-12 h-12 rounded-full flex items-center justify-center">
                            <i className="bi bi-envelope-fill text-xl"></i>
                        </span>
                        <h2 className="Unbounded text-2xl font-bold mt-4">Email</h2>
                        <p className="text-gray-400 mt-2">
                            brightanchor30@gmail.com<br />
                            Mon to Sun, replies within a day
                        </p>
                    </div>

                    <div className="contact-card border border-gray-700 rounded-2xl p-6 flex flex-col">
                        <span className="bg-[var(--prim-color2)] text-black w-12 h-12 rounded-full flex items-center justify-center">
                            <i className="bi bi-telephone-fill text-xl"></i>
                        </span>
                        <h2 className="Unbounded text-2xl font-bold mt-4">Phone</h2>
                        <p className="text-gray-400 mt-2">
                            720-933-9451<br />
                            Admissions line, open 24 hours
                        </p>
                    </div>
                </div>
            </div>

            {/*Enquiry form*/}
            <div className="px-[8%] lg:px-[12%] pb-15">
                <div className="w-full relative flex flex-col-reverse lg:flex-row justify-between items-center gap-2">
                    <div className="w-full lg:w-1/1">
                        <Image src={contactImg} alt="Contact" className="img-zoom w-full max-w-[810px] aspect-[21/20] object-cover rounded-2xl" />
                    </div>
                    <div className="sidebar-card w-full lg:w-1/2 flex flex-col lg:absolute top-22 right-0 bg-black/60 backdrop-blur-2xl border border-white/10 p-10 rounded-2xl">
                        <div className="title hero-title">
                            <span className="bg-[var(--prim-color2)] text-black font-semibold Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full">Contact Us</span>
                            <h1 className="text-[2rem] leading-tight 3xl:text-[2.5rem] 3xl:leading-normal Unbounded mt-5">
                                Ask us <span style={{ fontWeight: "400" }}> anything </span> </h1>
                        </div>
                        <EnquiryForm
                            inputClass="w-full bg-white/5 border border-white/10 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]"
                            buttonClass="btns bg-white text-black font-semibold Unbounded w-fit mt-5 flex items-center gap-3 px-5 py-3 rounded-full whitespace-nowrap hover:text-white transition-all duration-500 cursor-pointer disabled:opacity-60"
                            buttonLabel="Send Message"
                            arrowClass="w-5"
                        />
                    </div>
                </div>
            </div>

            {/*Map*/}
            <div className="px-[8%] lg:px-[12%] pb-15">
                <iframe
                    title="Where we are"
                    src="https://www.google.com/maps?q=10973+Swang+Link+Drive,+Houston,+TX+77043&output=embed"
                    className="w-full h-[450px] rounded-2xl border border-gray-700"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}
