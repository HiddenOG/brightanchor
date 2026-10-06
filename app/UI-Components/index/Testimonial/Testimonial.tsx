"use client";
import Image from "next/image"

import { Swiper , SwiperSlide } from "swiper/react";
import { Autoplay , Navigation } from "swiper/modules";
import "swiper/css";

import arrowBtn from "@/public/arrow-icon.svg";
import { useRef } from "react";


export default function Testimonial() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="testimonial relative bg-[var(--prim-color2)] rounded-2xl text-black">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 1500
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}

                        modules={[Autoplay , Navigation]}
                    >
                        <SwiperSlide>
                            <div className="flex flex-col gap-3 px-10 lg:px-50 py-15">
                                <span className="text-xl">Resident Stories</span>
                                <h2 className="Unbounded text-3xl lg:text-6xl">What Residents <br /> Say About Us</h2>
                                <p className="w-[100%] lg:w-[90%] text-xl my-2">
                                    I came here straight out of treatment with no idea how to fill a day. The structure did
                                    that for me: a curfew, a chore rota, and people who noticed when I went quiet.
                                    Six months on I have a job, and I still turn up to the Tuesday house meeting.
                                </p>
                                <h5 className="text-xl font-bold">-- Resident, name withheld</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-3 px-10 lg:px-50 py-15">
                                <span className="text-xl">Resident Stories</span>
                                <h2 className="Unbounded text-3xl lg:text-6xl">What Residents <br /> Say About Us</h2>
                                <p className="w-[100%] lg:w-[90%] text-xl my-2">
                                    What helped most was living with people who had been where I was. Nobody lectured me.
                                    They just showed me what the next right thing looked like, over and over, until
                                    I could do it without being asked.
                                </p>
                                <h5 className="text-xl font-bold">-- Resident, name withheld</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-3 px-10 lg:px-50 py-15">
                                <span className="text-xl">Resident Stories</span>
                                <h2 className="Unbounded text-3xl lg:text-6xl">What Residents <br /> Say About Us</h2>
                                <p className="w-[100%] lg:w-[90%] text-xl my-2">
                                    The testing and the check-ins felt heavy in my first week. By the second month they were
                                    the reason I could sleep. Knowing someone would notice took the decision out of
                                    my hands on the hard nights.
                                </p>
                                <h5 className="text-xl font-bold">-- Former resident, name withheld</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-3 px-10 lg:px-50 py-15">
                                <span className="text-xl">Resident Stories</span>
                                <h2 className="Unbounded text-3xl lg:text-6xl">What Residents <br /> Say About Us</h2>
                                <p className="w-[100%] lg:w-[90%] text-xl my-2">
                                    I rebuilt things here that I thought were gone for good. My kids visit now. Staff helped
                                    me get the paperwork straight and kept at me about the job search when I wanted
                                    to let it slide.
                                </p>
                                <h5 className="text-xl font-bold">-- Former resident, name withheld</h5>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div
                        ref={prevRef}
                        className="swiper-btn arrow-left border border-black z-50 absolute 
                        top-[80%] lg:top-[50%] left-10 px-3 py-4 rounded-full">
                        <Image src={arrowBtn} alt="arrowBtn" className="rotate-180" />
                    </div>
                    <div
                        ref={nextRef}
                        className="swiper-btn arrow-right border border-black z-50 absolute 
                        top-[80%] lg:top-[50%] right-10 px-3 py-4 rounded-full">
                        <Image src={arrowBtn} alt="arrowBtn" />
                    </div>
                </div>
            </div>
        </>
    )
}