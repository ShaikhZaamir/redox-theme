"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const approaches = [
    {
        number: "01",
        title: "Keyword research",
        description:
            "Our mission is to empower the brands we believe in with tailor-made approaches that ignite creativity and growth without limits.",
    },
    {
        number: "02",
        title: "Ai-driven keyword generator",
        description:
            "Our mission is to empower the brands we believe in with tailor-made approaches that ignite creativity and growth without limits.",
    },
    {
        number: "03",
        title: "Real traffic organizer",
        description:
            "Our mission is to empower the brands we believe in with tailor-made approaches that ignite creativity and growth without limits.",
    },
    {
        number: "04",
        title: "Technical finalism",
        description:
            "Our mission is to empower the brands we believe in with tailor-made approaches that ignite creativity and growth without limits.",
    },
];

export default function Approach() {
    const sectionRef = useRef<HTMLElement>(null);

    const headingLine1Ref = useRef<HTMLDivElement>(null);
    const headingLine2Ref = useRef<HTMLDivElement>(null);
    const headingLine3Ref = useRef<HTMLDivElement>(null);
    const headingLine4Ref = useRef<HTMLDivElement>(null);
    const headingLine5Ref = useRef<HTMLDivElement>(null);

    const cardRefs = useRef<HTMLElement[]>([]);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        const line1 = headingLine1Ref.current;
        const line2 = headingLine2Ref.current;
        const line3 = headingLine3Ref.current;
        const line4 = headingLine4Ref.current;
        const line5 = headingLine5Ref.current;

        if (
            !section ||
            !line1 ||
            !line2 ||
            !line3 ||
            !line4 ||
            !line5
        ) {
            return;
        }

        const ctx = gsap.context(() => {
            /* ========================================
               HEADING HANGING ANIMATION
            ======================================== */

            const headingLines = [
                line1,
                line2,
                line3,
                line4,
                line5,
            ];

            gsap.set(headingLines, {
                rotateX: -90,
                rotateZ: -1.5,
                skewX: 2,
                scaleY: 0.96,
                y: -20,
                opacity: 0,
                transformOrigin: "50% 0%",
            });

            gsap.to(headingLines, {
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
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play reverse play reverse",
                },
            });

            /* ========================================
               CARD SCROLL-LINKED ANIMATION
            ======================================== */

            cardRefs.current.forEach((card) => {
                if (!card) return;

                gsap.fromTo(
                    card,
                    {
                        xPercent: 120,
                    },
                    {
                        xPercent: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 125%",
                            end: "top 50%",
                            scrub: 0.8,
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
            className="bg-[#111111] px-4 py-24 text-white"
        >
            {/* Top Container */}
            <div className="flex w-full items-end">
                {/* Left — 35% */}
                <div className="w-[35%]">
                    <p className="text-[30px] leading-[1.15] tracking-[-0.04em]">
                        APPROACH, EXPERTISE
                        <br />
                        AND VALUES
                    </p>
                </div>

                {/* Right — 65% */}
                <div className="w-[65%]">
                    <div style={{ perspective: "1000px" }}>
                        {/* Line 1 */}
                        <div
                            ref={headingLine1Ref}
                            className="origin-top text-[clamp(3.5rem,5.8vw,4.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                        >
                            Whether you’re a{" "}
                            <span className="text-[#3d3d3d]">
                                startup
                            </span>{" "}
                            or
                        </div>

                        {/* Line 2 */}
                        <div
                            ref={headingLine2Ref}
                            className="origin-top text-[clamp(3.5rem,5.8vw,4.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                        >
                            <span className="text-[#3d3d3d]">
                                industry star
                            </span>
                            , we’re here to
                        </div>

                        {/* Line 3 */}
                        <div
                            ref={headingLine3Ref}
                            className="origin-top text-[clamp(3.5rem,5.8vw,4.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                        >
                            promote your brand by
                        </div>

                        {/* Line 4 */}
                        <div
                            ref={headingLine4Ref}
                            className="origin-top text-[clamp(3.5rem,5.8vw,4.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                        >
                            ai-driven keyword and real
                        </div>

                        {/* Line 5 */}
                        <div
                            ref={headingLine5Ref}
                            className="origin-top text-[clamp(3.5rem,5.8vw,4.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                        >
                            structure
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Container */}
            <div className="mt-20 flex w-full items-start">
                {/* Left — 35% */}
                <div className="w-[35%]">
                    <div className="text-[clamp(10rem,18vw,20rem)] font-normal leading-[0.75] tracking-[-0.08em]">
                        04
                    </div>
                </div>

                {/* Right — 65% */}
                <div className="mt-20 w-[65%]">
                    {approaches.map((approach, index) => (
                        <article
                            key={approach.number}
                            ref={(el) => {
                                if (el) {
                                    cardRefs.current[index] = el;
                                }
                            }}
                            className="flex w-full items-start border-t border-dashed border-white/50 py-6"
                        >
                            {/* Number */}
                            <div className="w-[12%] shrink-0">
                                <span className="text-[18px]">
                                    {approach.number}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="w-[45%] shrink-0">
                                <h3 className="text-[28px] font-normal leading-[1.1] tracking-[-0.04em]">
                                    {approach.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="w-[43%]">
                                <p className="max-w-[390px] text-[18px] leading-[1.45] tracking-[0.02em] text-[#888888]">
                                    {approach.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

