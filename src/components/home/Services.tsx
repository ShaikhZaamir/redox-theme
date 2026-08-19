"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        image: "/ax-ma-service-01.png",
        title: (
            <>
                Search Engine
                <br />
                Optimization
            </>
        ),
    },
    {
        image: "/ax-ma-service-02.png",
        title: (
            <>
                Social
                <br />
                Marketing
            </>
        ),
    },
    {
        image: "/ax-ma-service-03.png",
        title: (
            <>
                Email
                <br />
                Marketing
            </>
        ),
    },
    {
        image: "/ax-ma-service-04.png",
        title: (
            <>
                Content
                <br />
                Marketing
            </>
        ),
    },
];

const description =
    "We are internal team of creative project managers search engine optimization.";

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);

    // Animation 1: Leading core
    const headingLine1Ref = useRef<HTMLDivElement>(null);

    // Animation 2: Industry + CTA
    const headingLine2Ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const line1 = headingLine1Ref.current;
        const line2 = headingLine2Ref.current;

        if (!section || !line1 || !line2) return;

        const ctx = gsap.context(() => {
            const elements = [line1, line2];

            // Initial hanging state
            gsap.set(elements, {
                rotateX: -90,
                rotateZ: -1.5,
                skewX: 2,
                scaleY: 0.96,
                y: -20,
                opacity: 0,
                transformOrigin: "50% 0%",
            });

            // Hanging → settled position
            gsap.to(elements, {
                rotateX: 0,
                rotateZ: 0,
                skewX: 0,
                scaleY: 1,
                y: 0,
                opacity: 1,
                duration: 2.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 60%",
                    toggleActions: "play reverse play reverse",
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#111111] px-4 py-24 text-white sm:px-6 lg:px-8"
        >
            {/* Section Heading */}
            <div className="mb-24">
                <div style={{ perspective: "1000px" }}>
                    {/* Animation 1 — Leading core */}
                    <div
                        ref={headingLine1Ref}
                        className="origin-top text-[clamp(4rem,6.8vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                    >
                        Leading core
                    </div>

                    {/* Animation 2 — Industry + CTA */}
                    <div
                        ref={headingLine2Ref}
                        className="origin-top flex items-center"
                    >
                        <div className="text-[clamp(4rem,6.8vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.065em]">
                            industry
                        </div>

                        {/* Explore All CTA */}
                        <a
                            href="#"
                            className="group/explore ml-6 inline-flex shrink-0 items-center"
                        >
                            {/* Explore All Capsule */}
                            <span
                                className="relative z-10 origin-left rounded-full border border-white px-7 py-2 text-[17px] font-medium transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/explore:-rotate-[10deg]"
                            >
                                Explore All
                            </span>

                            {/* Arrow Circle */}
                            <span
                                className="relative z-0 -ml-[2px] flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full border border-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/explore:-translate-x-[7px]"
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

            {/* Services */}
            <div className="flex w-full">
                {services.map((service, index) => (
                    <article
                        key={index}
                        className={`min-w-0 flex-1 ${index !== 0
                            ? "border-l border-white/10 pl-5"
                            : ""
                            } ${index !== services.length - 1
                                ? "pr-5"
                                : ""
                            }`}
                    >
                        {/* Service Header */}
                        <div className="flex items-start gap-5">
                            <img
                                src={service.image}
                                alt=""
                                className="h-[78px] w-[78px] shrink-0 rounded-[16px] object-cover"
                            />

                            <h3 className="text-[28px] font-normal leading-[1.08] tracking-[-0.035em]">
                                {service.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="mt-5 max-w-[300px] text-[18px] leading-[1.55] text-[#888888]">
                            {description}
                        </p>

                        {/* Explore */}
                        <a
                            href="#"
                            className="group/link mt-10 inline-block text-[18px]"
                        >
                            <span>Explore</span>

                            <span className="mt-0 block h-[1px] w-full origin-left bg-white transition-transform duration-500 group-hover/link:scale-x-0" />
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}


