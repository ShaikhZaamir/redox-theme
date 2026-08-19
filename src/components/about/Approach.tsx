"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        title: (
            <>
                Problem
                <br />
                discovery
            </>
        ),
        items: [
            "Usability Studies",
            "User Interviews",
            "Stakeholder Interviews",
            "Competitive Research",
            "Insights Report",
            "User Journey",
        ],
    },
    {
        title: (
            <>
                Design
                <br />
                system ready
            </>
        ),
        items: [
            "Thinking Workshops",
            "Sitemaps",
            "Concepts",
            "Designs",
            "Prototypes",
            "Usability Studies",
        ],
    },
    {
        title: (
            <>
                Design
                <br />
                implementation
            </>
        ),
        items: [
            "Design",
            "Use Cases",
            "User Flows",
            "Various User Types",
            "Annotations",
            "Interactions",
        ],
    },
];

function Arrow() {
    return (
        <div className="flex w-[20%] shrink-0 items-start justify-center pt-[34px]">
            <img
                src="/ax-white-line-arrow.png"
                alt=""
                aria-hidden="true"
                className="h-auto w-[70%] max-w-[220px] object-contain"
            />
        </div>
    );
}

export default function Approach() {
    const sectionRef = useRef<HTMLElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const label = labelRef.current;
        const heading = headingRef.current;
        const content = contentRef.current;

        if (!section || !label || !heading || !content) {
            return;
        }

        const ctx = gsap.context(() => {
            const animatedItems = [
                label,
                heading,
                ...Array.from(
                    content.querySelectorAll<HTMLElement>(".approach-step")
                ),
            ];

            animatedItems.forEach((item) => {
                gsap.fromTo(
                    item,
                    {
                        y: 50,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            once: true,
                        },
                    }
                );
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="border-t border-white/10 bg-[#111111] px-4 pb-24 pt-16 text-white sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24"
        >
            {/* =========================================================
                HEADER
            ========================================================= */}
            <div className="flex items-start">
                {/* Label */}
                <div
                    ref={labelRef}
                    className="w-[25%] shrink-0"
                >
                    <span className="text-[14px] font-normal uppercase leading-none sm:text-[15px]">
                        Approach
                    </span>
                </div>

                {/* Heading */}
                <div className="w-[75%]">
                    <h2
                        ref={headingRef}
                        className="max-w-[900px] text-[clamp(3.5rem,6.2vw,7rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                    >
                        Method of making
                        <br />
                        better result
                    </h2>
                </div>
            </div>

            {/* =========================================================
                PROCESS
            ========================================================= */}
            <div
                ref={contentRef}
                className="mt-24 flex items-start sm:mt-28 lg:mt-32"
            >
                {/* Left alignment space */}
                <div className="w-[25%] shrink-0" />

                {/* Process */}
                <div className="flex w-[75%] items-start">
                    {/* Step 1 */}
                    <div className="approach-step w-[20%] shrink-0">
                        <h3 className="text-[28px] font-normal leading-[1.05] tracking-[-0.045em]">
                            {steps[0].title}
                        </h3>

                        <ul className="mt-10 space-y-[3px] text-[18px] leading-[1.3]">
                            {steps[0].items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Arrow 1 */}
                    <Arrow />

                    {/* Step 2 */}
                    <div className="approach-step w-[20%] shrink-0">
                        <h3 className="text-[28px] font-normal leading-[1.05] tracking-[-0.045em]">
                            {steps[1].title}
                        </h3>

                        <ul className="mt-10 space-y-[3px] text-[18px] leading-[1.3]">
                            {steps[1].items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Arrow 2 */}
                    <Arrow />

                    {/* Step 3 */}
                    <div className="approach-step w-[20%] shrink-0">
                        <h3 className="text-[28px] font-normal leading-[1.05] tracking-[-0.045em]">
                            {steps[2].title}
                        </h3>

                        <ul className="mt-10 space-y-[3px] text-[18px] leading-[1.3]">
                            {steps[2].items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}