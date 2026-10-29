import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Blogs from "@/app/JsonData/Blogs.json";

import bannerImg from "@/public/Section-banners.png";
import quoteImg from "@/public/blog-quote.png";

const categories = ["House Life", "Structure", "Life Skills", "Family", "Work"];

export default async function BlogDetails({
    searchParams,
}: {
    searchParams: Promise<{ id?: string }>;
}) {
    const { id } = await searchParams;
    const post = Blogs.find((item) => item.id === (id ?? "1"));

    if (!post) notFound();

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
                    <h1 className="text-[2rem] lg:text-[3.5rem] Merienda">Blog Details</h1>
                    <p className="text-lg">
                        <Link href="/" className="hover:text-[var(--prim-color)] transition-all duration-300">Home</Link> / Blog Details
                    </p>
                </div>
            </div>

            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/*Article*/}
                    <div className="lg:col-span-2 flex flex-col">
                        <h2 className="Unbounded text-2xl 3xl:text-3xl font-bold">{post.title}</h2>

                        <div className="flex flex-wrap items-center gap-5 mt-4 text-gray-400">
                            <span className="flex items-center gap-2">
                                <i className="bi bi-calendar-event text-[var(--prim-color)]"></i>
                                {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <i className="bi bi-person-fill text-[var(--prim-color)]"></i>
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <i className="bi bi-folder-fill text-[var(--prim-color)]"></i>
                                {post.category}
                            </span>
                        </div>

                        {post.intro.map((text, index) => (
                            <p key={index} className="text-gray-400 mt-4">{text}</p>
                        ))}

                        <Image
                            src={post.image}
                            alt={post.title}
                            width={1000}
                            height={600}
                            className="img-zoom w-full h-auto rounded-2xl object-cover mt-8"
                        />

                        <h3 className="Unbounded text-xl 3xl:text-2xl font-bold mt-8">{post.sectionTitle}</h3>
                        <p className="text-gray-400 mt-3">{post.sectionText}</p>

                        {/*Quote*/}
                        <div className="sidebar-card border border-gray-700 rounded-2xl p-6 mt-8 flex gap-4">
                            <Image src={quoteImg} alt="quote" className="w-10 h-10 shrink-0" />
                            <div className="flex flex-col">
                                <p className="text-gray-300">{post.quote.text}</p>
                                <h4 className="Unbounded font-bold mt-4">{post.quote.author}</h4>
                                <p className="text-gray-400">{post.quote.role}</p>
                            </div>
                        </div>

                        <p className="text-gray-400 mt-6">{post.afterQuote}</p>

                        <h3 className="Unbounded text-xl 3xl:text-2xl font-bold mt-8">{post.bulletsTitle}</h3>
                        <div className="flex flex-col gap-3 mt-4">
                            {post.bullets.map((point, index) => (
                                <p key={index} className="flex items-start gap-3 text-gray-400">
                                    <i className="ri-arrow-right-double-line text-[var(--prim-color)]"></i>
                                    {point}
                                </p>
                            ))}
                        </div>

                        <h3 className="Unbounded text-xl 3xl:text-2xl font-bold mt-8">{post.closingTitle}</h3>
                        {post.closing.map((text, index) => (
                            <p key={index} className="text-gray-400 mt-3">{text}</p>
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
                                {Blogs.filter((item) => item.id !== post.id).slice(0, 3).map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/UI-Components/Blogs/blogDetails?id=${item.id}`}
                                        className="recent-post border border-gray-700 rounded-xl p-3 flex flex-col"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={400}
                                            height={250}
                                            className="w-full h-auto rounded-lg object-cover"
                                        />
                                        <span className="flex items-center gap-2 text-gray-400 text-sm mt-3">
                                            <i className="bi bi-person-fill text-[var(--prim-color)]"></i>
                                            {item.author}
                                        </span>
                                        <h3 className="blog-title Unbounded text-sm font-bold mt-2">{item.title}</h3>
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
