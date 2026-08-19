"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    const headingLine1Ref = useRef<HTMLDivElement>(null);
    const headingLine2Ref = useRef<HTMLDivElement>(null);
    const headingLine3Ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        const line1 = headingLine1Ref.current;
        const line2 = headingLine2Ref.current;
        const line3 = headingLine3Ref.current;

        if (!section || !line1 || !line2 || !line3) return;

        const ctx = gsap.context(() => {
            const headingLines = [line1, line2, line3];

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
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="border-b border-white/10 bg-[#111111] px-4 py-24 text-white sm:px-6 lg:px-8"
        >
            <div className="flex w-full justify-end">
                <div
                    className="w-full lg:w-[50%]"
                    style={{ perspective: "1000px" }}
                >
                    {/* Line 1 */}
                    <div
                        ref={headingLine1Ref}
                        className="origin-top text-[clamp(4rem,6.8vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                    >
                        Let&apos;s start a
                    </div>

                    {/* Line 2 */}
                    <div
                        ref={headingLine2Ref}
                        className="origin-top text-[clamp(4rem,6.8vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                    >
                        great work
                    </div>

                    {/* Line 3 */}
                    <div
                        ref={headingLine3Ref}
                        className="origin-top text-[clamp(4rem,6.8vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                    >
                        right now
                    </div>

                    {/* Get In Touch */}
                    <a
                        href="#"
                        className="group/contact mt-8 inline-flex items-center"
                    >
                        <span className="relative z-10 origin-left rounded-full border border-white px-7 py-2 text-[17px] font-medium transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/contact:-rotate-[10deg]">
                            Get In Touch
                        </span>

                        <span className="relative z-0 -ml-[2px] flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full border border-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/contact:-translate-x-[7px]">
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
        </section>
    );
}