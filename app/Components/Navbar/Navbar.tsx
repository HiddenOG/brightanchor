"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = {
    label: string;
    href: string;
    dropdown?: { label : string; href: string} [];
};

const navLinks: NavLink[] = [
    {label: "home" , href: "/" },
    {
        label: "Programs",
        href: "/UI-Components/Service",
        dropdown: [
            {label: "Programs" , href: "/UI-Components/Service" },
            {label: "Program Details" , href: "/UI-Components/Service/serviceDetails?id=1" },
        ],
    },
    {
        label: "Our Homes",
        href: "/UI-Components/Projects",
        dropdown: [
            {label: "Our Homes" , href: "/UI-Components/Projects" },
            {label: "House Details" , href: "/UI-Components/Projects/ProjectDetails?id=2" },
        ],
    },
    {
        label: "Blogs",
        href: "/UI-Components/Blogs",
        dropdown: [
            {label: "Blogs" , href: "/UI-Components/Blogs" },
            {label: "Blog Details" , href: "/UI-Components/Blogs/blogDetails?id=1" },
        ],
    },
    {
        label: "Pages",
        href: "/UI-Components/Pages/About",
        dropdown: [
            {label: "About" , href: "/UI-Components/Pages/About" },
        ],
    },
    {label: "Contact Us" , href: "/UI-Components/Pages/Contact" },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isFixed, setIsFixed] = useState(false);

    const toggleDropdown = (label: string) => {
        setActiveDropdown((prev) => (prev === label ? null : label));
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <div
            className={`
                w-full bg-white z-[99999] shadow-sm transition-all py-4 lg:py-2 duration-500
                ${isFixed ? "fixed top-0 left-0 z-[50] fixed-nav" : ""}
                `}
        >
            <div className="flex items-center justify-between px-[8%] lg:px-[12%] pb-2 lg:pb-0 text-gray-700">
                {/* Logo */}
                <Link href="/" className="text-3xl 3xl:text-4xl font-bold Merienda text-black">
                Bright<span className="text-[var(--prim-color)]">Anchor</span>
                </Link>

                {/*Desktop Nav*/}
                <nav className="hidden lg:flex space-x-6 menu-link relative">
                    {navLinks.map((link) =>
                        link.dropdown ? (
                            <div key={link.label} className="relative group z-[9999]">
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-base 3xl:text-lg font-semibold"
                                >
                                    {link.label} <i className="ri-arrow-down-s-line"></i>
                                </Link>
                                {/*Smooth Dropdown*/}
                                <div className="absolute left-0 top-full opacity-0 scale-95 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                                group-hover:pointer-events-auto transition-all duration-300 bg-white shadow-xl border border-gray-100 rounded-lg min-w-[150px]">
                                    {link.dropdown.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="block font-semibold px-3 py-2 rounded-md hover:bg-[var(--prim-color)] hover:text-white transition-all"
                                        >
                                        {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                className="text-base 3xl:text-lg font-semibold"
                                key={link.label}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                {/*Call Button*/}
                <button className="nav-button items-center cursor-pointer font-bold p-3 hidden lg:flex">
                    <i className="bi bi-telephone pe-3 text-4xl"></i>
                    <div className="flex flex-col items-start">
                        <p className="text-gray-500 font-medium"> 24/7 Admissions</p>
                        720-933-9451
                    </div>
                </button>

                {/* Mobile Nav Header */}
                <div className="lg:hidden flex items-center justify-between gap-4">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-2xl focus:outline-none"          
                    >
                        <div className="flex items-center gap-x-5">
                            <i className="ri-menu-line"></i>
                        </div>
                    </button>
                </div>
            </div>
            {/*Mobile Menu Smooth Transition*/}
            <div
                className={`lg:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden transition-all duration-500 ${mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`} 
            >
                <nav className="flex flex-col px-[8%] py-3 space-y-1">
                    {navLinks.map((link) =>
                        link.dropdown ? (
                            <div key={link.label} className="flex flex-col border border-gray-300 rounded text-black">
                                <button
                                    className="flex justify-between items-center w-full px-2 py-2 font-medium"
                                    onClick={() => toggleDropdown(link.label)}
                                >
                                    {link.label}{" "}
                                    <i
                                        className={`ri-arrow-down-s-line transition-transform duration-300 ${
                                            activeDropdown === link.label ? "rotate-180" : ""
                                        }`}
                                    ></i>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ${
                                        activeDropdown === link.label
                                            ? "max-h-60 mt-1 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="flex flex-col bg-[var(--prim-light)] p-2 gap-1">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="px-2 py-1 bg-white text-black rounded"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="block px-2 py-2 font-medium border border-gray-300 rounded text-black"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>
            </div>
        </div>
    )
}