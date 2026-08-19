"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Service", href: "/service" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
];

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    const studioRef = useRef<HTMLElement>(null);
    const studioLabelRef = useRef<HTMLDivElement>(null);
    const studioHeadingRef = useRef<HTMLHeadingElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);

    const capabilitiesRef = useRef<HTMLDivElement>(null);
    const descriptionTopRef = useRef<HTMLParagraphElement>(null);
    const descriptionBottomRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const hero = heroRef.current;
        const nav = navRef.current;
        const heading = headingRef.current;

        const studio = studioRef.current;
        const studioLabel = studioLabelRef.current;
        const studioHeading = studioHeadingRef.current;
        const divider = dividerRef.current;
        const capabilities = capabilitiesRef.current;
        const descriptionTop = descriptionTopRef.current;
        const descriptionBottom = descriptionBottomRef.current;
        const cta = ctaRef.current;

        if (
            !hero ||
            !nav ||
            !heading ||
            !studio ||
            !studioLabel ||
            !studioHeading ||
            !divider ||
            !capabilities ||
            !descriptionTop ||
            !descriptionBottom ||
            !cta
        ) {
            return;
        }

        const ctx = gsap.context(() => {
            // =========================================================
            // HERO ANIMATION
            // =========================================================

            const timeline = gsap.timeline();

            // Hero reveal
            timeline.fromTo(
                hero,
                {
                    clipPath: "circle(0% at 50% 50%)",
                },
                {
                    clipPath: "circle(100% at 50% 50%)",
                    duration: 2,
                    ease: "power3.out",
                }
            );

            // Navigation + hero heading
            timeline.fromTo(
                [nav, heading],
                {
                    y: 25,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                },
                0
            );

            // =========================================================
            // ABOUT STUDIO INDIVIDUAL SCROLL ANIMATIONS
            // =========================================================

            const studioItems = [
                studioLabel,
                studioHeading,
                divider,
                capabilities,
                descriptionTop,
                descriptionBottom,
                cta,
            ];

            studioItems.forEach((element) => {
                gsap.fromTo(
                    element,
                    {
                        y: 55,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            once: true,
                        },
                    }
                );
            });
        }, hero);

        return () => ctx.revert();
    }, []);

    return (
        <main className="bg-[#111111] text-white">
            {/* =========================================================
                ABOUT HERO
            ========================================================= */}
            <section
                ref={heroRef}
                className="relative overflow-hidden border-t border-white/10 bg-[#111111] px-4 py-5 sm:px-6 lg:px-8"
            >
                {/* Top Navigation */}
                <header className="flex items-start justify-between">
                    {/* Logo */}
                    <div className="flex items-start pt-3">
                        <img
                            src="/white-logo.png"
                            alt="Redox Agency"
                            className="w-[120px] object-contain sm:w-[135px]"
                        />
                    </div>

                    {/* Navigation */}
                    <nav
                        ref={navRef}
                        className="flex justify-end"
                    >
                        <div className="group/nav flex flex-col text-[18px] leading-[1.05]">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-white transition-opacity duration-300 group-hover/nav:opacity-30 hover:!opacity-100"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </header>

                {/* Since 2012 */}
                <div className="flex min-h-[calc(62vh-80px)] items-center justify-center">
                    <h1
                        ref={headingRef}
                        className="whitespace-nowrap text-[19vw] font-normal leading-[0.8] tracking-[-0.075em]"
                    >
                        SINCE 2012
                    </h1>
                </div>
            </section>

            {/* =========================================================
                ABOUT STUDIO
            ========================================================= */}
            <section
                ref={studioRef}
                className="border-t border-white/10 bg-[#111111] px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pb-28"
            >
                {/* Main Studio Heading */}
                <div className="flex items-start">
                    {/* Label */}
                    <div
                        ref={studioLabelRef}
                        className="w-[25%] shrink-0"
                    >
                        <span className="text-[14px] font-normal uppercase leading-none sm:text-[15px]">
                            About Studio
                        </span>
                    </div>

                    {/* Statement */}
                    <div className="w-[75%]">
                        <h2
                            ref={studioHeadingRef}
                            className="max-w-[1250px] text-[clamp(3rem,6.1vw,7rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                        >
                            Crafting digital products with a unique — vision of making
                            user experience better.
                        </h2>
                    </div>
                </div>

                {/* Divider */}
                <div
                    ref={dividerRef}
                    className="mt-16 border-t border-white/10 sm:mt-20 lg:mt-24"
                />

                {/* Studio Content */}
                <div className="mt-7 flex items-start sm:mt-8">
                    {/* Empty space matching ABOUT STUDIO column */}
                    <div className="w-[25%] shrink-0" />

                    {/* Main content area */}
                    <div className="flex w-[75%] items-start">
                        {/* Capabilities */}
                        <div
                            ref={capabilitiesRef}
                            className="w-[40%] shrink-0"
                        >
                            <ul className="space-y-1 text-[30px] leading-[1.15]">
                                <li>▪ Art Direction</li>
                                <li>▪ Capability</li>
                                <li>▪ Sustainability</li>
                            </ul>
                        </div>

                        {/* Description */}
                        <div className="w-[60%]">
                            <div className="max-w-[700px]">
                                {/* Top Description */}
                                <p
                                    ref={descriptionTopRef}
                                    className="text-[24px] leading-[1.35] text-[#a6a6a6]"
                                >
                                    Redox is the first and only creative agency for your
                                    real exploration. It’s one private place to save
                                    everything you can realize about digital beautifully
                                    design.
                                </p>

                                {/* Bottom Description */}
                                <p
                                    ref={descriptionBottomRef}
                                    className="mt-10 text-[24px] leading-[1.35] text-[#a6a6a6]"
                                >
                                    As a global creative agency, we understand the
                                    importance of staying ahead of the game. That’s why
                                    we partner with some of the world’s best talent to
                                    bring fresh ideas
                                </p>

                                {/* Explore Services */}
                                <div
                                    ref={ctaRef}
                                    className="mt-10 lg:mt-12"
                                >
                                    <Link
                                        href="/service"
                                        className="group inline-flex items-center rounded-full bg-white px-9 py-5 text-[16px] font-medium text-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
                                    >
                                        Explore Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}