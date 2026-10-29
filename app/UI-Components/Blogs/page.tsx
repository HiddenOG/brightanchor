import Image from "next/image";
import Link from "next/link";

import Blogs from "@/app/JsonData/Blogs.json";

import arrowBtn from "@/public/arrow-icon.svg";
import bannerImg from "@/public/Section-banners.png";

const categories = ["House Life", "Structure", "Life Skills", "Family", "Work"];

export default function BlogsPage() {
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
                    <h1 className="text-[2rem] lg:text-[3.5rem] Merienda">Blogs</h1>
                    <p className="text-lg">
                        <Link href="/" className="hover:text-[var(--prim-color)] transition-all duration-300">Home</Link> / Blogs
                    </p>
                </div>
            </div>

            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/*Posts*/}
                    <div className="lg:col-span-2 flex flex-col gap-10">
                        {Blogs.map((post) => (
                            <div key={post.id} className="blog-card sidebar-card border border-gray-700 rounded-2xl p-5">
                                <div className="relative rounded-2xl overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={900}
                                        height={500}
                                        className="blog-img w-full h-auto object-cover"
                                    />
                                    <span className="absolute bottom-4 right-4 bg-white text-black text-sm flex items-center gap-2 px-3 py-1 rounded-full">
                                        <i className="bi bi-calendar-event"></i>
                                        {post.date}
                                    </span>
                                </div>

                                <div className="flex items-center gap-5 mt-5 text-gray-400">
                                    <span className="flex items-center gap-2">
                                        <i className="bi bi-person-fill text-[var(--prim-color)]"></i>
                                        {post.author}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <i className="bi bi-folder-fill text-[var(--prim-color)]"></i>
                                        {post.category}
                                    </span>
                                </div>

                                <Link href={`/UI-Components/Blogs/blogDetails?id=${post.id}`}>
                                    <h2 className="blog-title Unbounded text-xl 3xl:text-2xl font-bold mt-3">{post.title}</h2>
                                </Link>
                                <p className="text-gray-400 mt-3">{post.excerpt}</p>

                                <Link
                                    href={`/UI-Components/Blogs/blogDetails?id=${post.id}`}
                                    className="btns bg-white text-black font-semibold Unbounded w-fit mt-5
                                    flex items-center gap-3 px-5 py-3 rounded-full whitespace-nowrap
                                    hover:text-white transition-all duration-500 cursor-pointer"
                                >
                                    Read More
                                    <Image src={arrowBtn} alt="arrowBtn" className="w-5" />
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/*Sidebar*/}
                    <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
                        {/*Category*/}
                        <div className="sidebar-card border border-gray-700 rounded-2xl p-5">
                            <h2 className="Unbounded text-xl 3xl:text-2xl font-bold mb-5">Category</h2>
                            <div className="flex flex-col gap-4">
                                {categories.map((name) => (
                                    <Link
                                        key={name}
                                        href="/UI-Components/Blogs"
                                        className="category-link flex items-center justify-between gap-3 border-b border-gray-700 pb-4 last:border-b-0 last:pb-0"
                                    >
                                        <span className="Unbounded">{name}</span>
                                        <span className="cat-plus bg-[var(--prim-light)] w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                                            <i className="bi bi-plus text-xl"></i>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/*Recent posts*/}
                        <div className="sidebar-card border border-gray-700 rounded-2xl p-5">
                            <h2 className="Unbounded text-xl 3xl:text-2xl font-bold mb-5">Recent post</h2>
                            <div className="flex flex-col gap-5">
                                {Blogs.slice(0, 3).map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/UI-Components/Blogs/blogDetails?id=${post.id}`}
                                        className="recent-post border border-gray-700 rounded-xl p-3 flex flex-col"
                                    >
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            width={400}
                                            height={250}
                                            className="w-full h-auto rounded-lg object-cover"
                                        />
                                        <span className="flex items-center gap-2 text-gray-400 text-sm mt-3">
                                            <i className="bi bi-person-fill text-[var(--prim-color)]"></i>
                                            {post.author}
                                        </span>
                                        <h3 className="blog-title Unbounded text-sm font-bold mt-2">{post.title}</h3>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/*Call card*/}
                        <div className="sidebar-card border border-gray-700 rounded-2xl p-5 flex flex-col items-center text-center">
                            <h2 className="Unbounded text-xl 3xl:text-2xl font-bold">Need Help? Call Us</h2>
                            <span className="bg-[var(--prim-color)] w-20 h-20 rounded-full flex items-center justify-center my-5">
                                <i className="bi bi-telephone text-3xl"></i>
                            </span>
                            <p className="text-gray-400">
                                Admissions are open 24 hours a day. Call us and we will talk through beds, costs and what the house expects.
                            </p>
                            <h3 className="Unbounded text-xl mt-4">720-933-9451</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
