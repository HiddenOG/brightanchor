"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
    Reveals sections as they scroll into view.

    Targets existing class names rather than asking every page to add markup,
    so any new section built with the usual card/title classes animates for free.
*/
const TARGETS = [
    ".title",
    ".hero-card",
    ".feature-card",
    ".service-card",
    ".project-card",
    ".blog-card",
    ".contact-card",
    ".sidebar-card",
    ".features",
    ".testimonial",
    ".about-img",
    ".reveal-me",
];

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;

        const elements = document.querySelectorAll<HTMLElement>(TARGETS.join(", "));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        elements.forEach((el) => {
            // Anything already on screen stays put, so nothing flashes on first paint.
            if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

            el.classList.add("reveal");

            // Stagger siblings so grids come in one after another.
            const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
            const index = siblings.indexOf(el);
            if (index > 0) el.style.transitionDelay = `${Math.min(index, 4) * 90}ms`;

            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [pathname]);

    return null;
}
