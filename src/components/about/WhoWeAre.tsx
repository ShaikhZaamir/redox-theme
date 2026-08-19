"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        label: "35+ Google reviews",
        value: 4.9,
        suffix: "",
        decimals: 1,
    },
    {
        label: "Clients world-wide",
        value: 1.8,
        suffix: "K",
        decimals: 1,
    },
    {
        label: "Completed projects",
        value: 1.7,
        suffix: "K",
        decimals: 1,
    },
    {
        label: "Client satisfaction",
        value: 95,
        suffix: "%",
        decimals: 0,
    },
];

export default function WhoWeAre() {
    const sectionRef = useRef<HTMLElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const label = labelRef.current;
        const heading = headingRef.current;
        const cards = cardsRef.current;

        if (!section || !label || !heading || !cards) {
            return;
        }

        const ctx = gsap.context(() => {
            const cardElements = Array.from(
                cards.querySelectorAll<HTMLElement>(".who-we-are-card")
            );

            // ---------------------------------------------------------
            // Label + heading animation
            // ---------------------------------------------------------
            [label, heading].forEach((item) => {
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

            // ---------------------------------------------------------
            // Individual card animations + number counters
            // ---------------------------------------------------------
            cardElements.forEach((card, index) => {
                const valueElement =
                    card.querySelector<HTMLElement>(".stat-value");

                if (!valueElement) {
                    return;
                }

                // Card entrance
                gsap.fromTo(
                    card,
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
                            trigger: card,
                            start: "top 85%",
                            once: true,
                            onEnter: () => {
                                const stat = stats[index];

                                const counter = {
                                    value: 0,
                                };

                                gsap.to(counter, {
                                    value: stat.value,
                                    duration: 1.8,
                                    ease: "power2.out",
                                    onUpdate: () => {
                                        valueElement.textContent =
                                            counter.value.toFixed(
                                                stat.decimals
                                            ) + stat.suffix;
                                    },
                                });
                            },
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
            className="border-t border-white/10 bg-[#111111] px-4 pb-28 pt-16 text-white sm:px-6 sm:pb-32 sm:pt-20 lg:px-8 lg:pb-36 lg:pt-24"
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
                        Who Are We?
                    </span>
                </div>

                {/* Main Heading */}
                <div className="w-[75%]">
                    <h2
                        ref={headingRef}
                        className="max-w-[1050px] text-[clamp(3.5rem,6.2vw,7rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                    >
                        We deliver creative
                        <br />
                        ideas to a crowded
                        <br />
                        world.
                    </h2>
                </div>
            </div>

            {/* =========================================================
                STAT CARDS
            ========================================================= */}
            <div
                ref={cardsRef}
                className="mt-24 flex w-full items-stretch gap-6 sm:mt-28 lg:mt-32"
            >
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="who-we-are-card flex min-h-[188px] flex-1 flex-col justify-between rounded-[22px] bg-[#1d1d1d] px-8 py-8 sm:min-h-[190px] sm:px-10 sm:py-9"
                    >
                        <p className="text-[18px] leading-[1.2] text-[#9b9b9b]">
                            {stat.label}
                        </p>

                        <p
                            className="stat-value text-[56px] font-normal leading-none tracking-[-0.055em] sm:text-[58px] lg:text-[60px]"
                        >
                            0
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}