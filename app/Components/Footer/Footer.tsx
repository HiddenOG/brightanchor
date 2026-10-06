import React from 'react'
import Image from 'next/image'
import arrowBtn from "@/public/arrow-icon.svg";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className='px-[8%] lg:px-[12%] pt-10 border-t border-gray-500'>
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="footer-banner w-full">
                        <div className="title hero-title">
                            <h1 className="text-[2.5rem] Unbounded mt-5 text-center">
                                Recovery Holds Better Together <br /> Join Our
                                <span> Newsletter</span>
                            </h1>
                        </div>
                        <div className="input-details mt-10 ml-0 lg:ml-20 flex
                        justify-center items-center relative">
                            <input type="email" placeholder='Enter Your Email'
                            className='w-[80%] lg:w-[50%] outline-none border
                            border-gray-300 rounded-full py-5 px-4' />
                            <button className='footer-btn hidden md:flex absolute
                            right-48 btns mt-2 md:mt-0 font-semibold Unbounded
                            bg-white text-black items-center gap-2 px-5 py-3
                            rounded-full hover:text-white transition-all duration-500
                            cursor-pointer'>Subscribe <Image src={arrowBtn}
                            alt="arrowBtn"/></button>
                        </div>
                    </div>   
                </div>
                <div className="footer mt-15 pb-10 gap-15 grid grid-cols-1
                md:grid-cols-2 lg:grid-cols-4">
                    <div className="footer-content">
                        <a href="/" className="text-4xl font-bold Merienda text-white">
                        Bright<span className='text-[var(--prim-color)]'>Anchor</span>
                        </a>
                        <p className='mt-5 text-gray-400'>
                            A safe, comfortable sober living home for men and
                            women. Stability with optimism, one steady week at
                            a time.
                        </p>
                        <div className='footer-social-icon mt-6 flex gap-3'>
                            <i className="bi bi-facebook rounded-full text-xl border
                            border-gray-300 p-4 py-3"></i>
                            <i className="bi bi-linkedin rounded-full text-xl border
                            border-gray-300 p-4 py-3"></i>
                            <i className="bi bi-instagram rounded-full text-xl border
                            border-gray-300 p-4 py-3"></i>
                            <i className="bi bi-twitter-x rounded-full text-xl border
                            border-gray-300 p-4 py-3"></i>
                        </div>
                    </div>
                    <div className="footer-content flex flex-col">
                        <h2 className="mb-5 text-2xl">Page</h2>
                        <Link href="/UI-Components/Pages/About" className="mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all duration-300">About Us</Link>
                        <Link href="/UI-Components/Service" className="mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all 
                        duration-300">Programs</Link>
                        <Link href="/UI-Components/Pages/About" className="mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all 
                        duration-300">Why Choose Us</Link>
                        <Link href="/UI-Components/Blogs" className="mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all 
                        duration-300">News and Stories</Link>
                    </div>
                    <div className="footer-content flex flex-col">
                        <h2 className="mb-5 text-2xl">Link</h2>
                        <Link href="/UI-Components/Projects" className="mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all duration-300">Our Homes</Link>
                        <Link href="/UI-Components/Pages/Contact" className="mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all 
                        duration-300">Admissions</Link>
                        <Link href="/UI-Components/Service/serviceDetails?id=1" className="mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all 
                        duration-300">House Rules</Link>
                        <Link href="/UI-Components/Pages/Contact" className="mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all 
                        duration-300">Contact Us</Link>
                    </div>
                    <div className="footer-content flex flex-col">
                        <h2 className='mb-5 text-2xl'>Contact</h2>
                        <div className="footer-section flex items-center gap-4 mb-3">
                            <div className="footer-icons">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="footer-text">
                                <span className="text-gray-400">Address</span>
                                <p className="">10973 Swang Link Drive, Houston TX 77043</p>
                            </div>
                        </div>
                        <div className="footer-section flex items-center gap-4 mb-3">
                            <div className="footer-icons">
                                <i className="bi bi-telephone-fill"></i>
                            </div>
                            <div className="footer-text">
                                <span className="text-gray-400">Phone</span>
                                <p>720-933-9451</p>
                            </div>
                        </div>
                        <div className="footer-section flex items-center gap-4 mb-3">
                            <div className="footer-icons">
                                <i className="bi bi-envelope-fill"></i>
                            </div>
                            <div className="footer-text">
                                <span className="text-gray-400">Email</span>
                                <p>brightanchor30@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-500 py-5">
                    <p className="text-center text-xl text-gray-400">© 2026 All rights reserved by Bright Anchor LLC</p>
                </div>
            </footer>
        </>
    )
}