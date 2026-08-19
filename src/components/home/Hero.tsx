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

const socialLinks = [
    "Facebook",
    "Dribbble",
    "Behance",
    "Twitter",
    "Linkedin",
];

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const heroHeadingRef = useRef<HTMLHeadingElement>(null);

    const growthRef = useRef<HTMLParagraphElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    const socialRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const hero = heroRef.current;
        const heading = heroHeadingRef.current;
        const growth = growthRef.current;
        const description = descriptionRef.current;
        const social = socialRef.current;
        const cta = ctaRef.current;

        if (
            !hero ||
            !heading ||
            !growth ||
            !description ||
            !social ||
            !cta
        ) {
            return;
        }

        const ctx = gsap.context(() => {
            const timeline = gsap.timeline();

            // Center-out page reveal
            timeline.fromTo(
                hero,
                {
                    clipPath: "circle(0% at 50% 50%)",
                },
                {
                    clipPath: "circle(100% at 50% 50%)",
                    duration: 2.0,
                    ease: "power3.out",
                }
            );

            // Hero heading entrance
            timeline.fromTo(
                heading,
                {
                    y: 25,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power3.out",
                },
                0
            );

            // Growth text entrance
            timeline.fromTo(
                growth,
                {
                    y: 25,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power3.out",
                },
                0
            );

            // Description entrance
            // CTA is intentionally NOT included here.
            timeline.fromTo(
                description,
                {
                    y: 25,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power3.out",
                },
                0
            );

            // Social links + CTA are hidden initially.
            gsap.set([social, cta], {
                y: 80,
                opacity: 0,
            });

            // Reveal them once the user starts scrolling downward.
            ScrollTrigger.create({
                trigger: hero,
                start: "top top",
                onUpdate: (self) => {
                    if (self.direction === 1 && self.progress > 0) {
                        gsap.to([social, cta], {
                            y: 0,
                            opacity: 1,
                            duration: 1.1,
                            ease: "power3.out",
                            overwrite: true,
                        });
                    }
                },
            });
        }, hero);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="min-h-screen bg-[#111111] px-4 py-5 text-white"
        >
            {/* Top Navigation */}
            <header className="grid grid-cols-3 items-start">
                {/* Logo */}
                <div className="flex items-start pt-3">
                    <img
                        src="/white-logo.png"
                        alt="Redox Agency"
                        className="w-[120px] object-contain sm:w-[135px]"
                    />
                </div>

                {/* Award Text */}
                <div className="flex justify-center pt-1">
                    <p className="w-full max-w-[260px] text-sm leading-[1.15] sm:text-base lg:text-[18px]">
                        Award winning marketing
                        <br />
                        agency — 1994®
                    </p>
                </div>

                {/* Navigation */}
                <nav className="flex justify-end">
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

            {/* Main Hero Heading */}
            <div className="mt-2">
                <h1
                    ref={heroHeadingRef}
                    className="max-w-[1050px] text-[clamp(3.5rem,7.3vw,8rem)] font-normal leading-[0.9] tracking-[-0.065em]"
                >
                    AI-driven marketing
                    <br />

                    <span className="inline-flex items-center gap-6">
                        {/* Hero Shape */}
                        <img
                            src="/ax-ma-hero-shape.png"
                            alt=""
                            className="h-[clamp(3.5rem,5vw,5.5rem)] w-auto shrink-0 object-contain"
                        />

                        <span>agency, based in</span>
                    </span>

                    <br />

                    <span className="relative inline-block text-[#3d3d3d]">
                        Jordan

                        <span className="absolute bottom-[-8px] left-0 h-[6px] w-full bg-[#3d3d3d]" />
                    </span>

                    {/* Hero Arrow */}
                    <img
                        src="/rd-ma-hero-white-arrow.png"
                        alt=""
                        className="ml-4 inline-block h-[clamp(3rem,4.5vw,5rem)] w-auto align-baseline object-contain"
                    />
                </h1>
            </div>

            {/* Bottom Content */}
            <div className="mt-10 flex items-start gap-8">
                {/* Social Links */}
                <div
                    ref={socialRef}
                    className="flex w-1/3 self-end"
                >
                    <div className="flex max-w-[330px] flex-wrap gap-x-6 gap-y-3 text-[18px]">
                        {socialLinks.map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="group/social relative inline-block text-white"
                            >
                                {social}

                                {/* Custom underline */}
                                <span
                                    className="absolute bottom-[0px] left-0 h-[1.5px] w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-hover/social:scale-x-0"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Growth Text */}
                <div
                    ref={growthRef}
                    className="flex w-1/3 justify-center"
                >
                    <p className="max-w-[150px] text-[18px] leading-[1.3]">
                        From 1994–2025
                        <br />
                        we're growing
                        <br />
                        fast
                    </p>
                </div>

                {/* Description + CTA */}
                <div
                    ref={descriptionRef}
                    className="w-1/3"
                >
                    <div className="max-w-90">
                        {/* Description */}
                        <p className="text-[18px] leading-[1.3]">
                            We help brands and company in marketing solution. As a
                            cause-led digital marketing and brand agency, we harness the
                            power of technology and creativity to drive positive feedback.
                        </p>

                        {/* CTA */}
                        <div
                            ref={ctaRef}
                            className="mt-12 h-10"
                        >
                            <a
                                href="#"
                                className="group/cta inline-flex items-center"
                            >
                                {/* Get Started Capsule */}
                                <span
                                    className="relative z-10 origin-left rounded-full border border-white px-8 py-1.5 text-[17px] font-medium transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-rotate-[10deg]"
                                >
                                    Get Started
                                </span>

                                {/* Arrow Circle */}
                                <span
                                    className="relative z-0 -ml-[2px] flex h-8.5 w-[47px] shrink-0 items-center justify-center rounded-full border border-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-translate-x-[7px]"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M4 16L16 4"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M9 4H16V11"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}