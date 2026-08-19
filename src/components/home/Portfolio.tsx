"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        image: "/ax-portfolio-06.png",
        title: "Harash Denmark",
        meta: "2010 - Branding",
    },
    {
        image: "/ax-portfolio-03.png",
        title: "Saudi Lime Green",
        meta: "2010 - Marketing",
    },
    {
        image: "/ax-portfolio-01.png",
        title: "Saudi Venture Capital",
        meta: "2010 - Marketing",
    },
    {
        image: "/ax-portfolio-02.png",
        title: "Nilachal Network",
        meta: "2010 - Marketing",
    },
    {
        image: "/ax-portfolio-08.png",
        title: "Royal Cash App",
        meta: "2010 - Design",
    },
    {
        image: "/ax-portfolio-09.png",
        title: "Mashup Gradient",
        meta: "2010 - Design",
    },
];

export default function Portfolio() {
    const sectionRef = useRef<HTMLElement>(null);

    const projectRefs = useRef<HTMLElement[]>([]);
    const projectImageRefs = useRef<HTMLImageElement[]>([]);

    // Heading animation refs
    const headingLine1Ref = useRef<HTMLDivElement>(null);
    const headingLine2Ref = useRef<HTMLDivElement>(null);
    const headingLine3Ref = useRef<HTMLDivElement>(null);

    // Custom cursor
    const projectCursorRef = useRef<HTMLDivElement>(null);
    const cursorXRef = useRef<((value: number) => void) | null>(null);
    const cursorYRef = useRef<((value: number) => void) | null>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const line1 = headingLine1Ref.current;
        const line2 = headingLine2Ref.current;
        const line3 = headingLine3Ref.current;
        const projectCursor = projectCursorRef.current;

        if (!section || !line1 || !line2 || !line3 || !projectCursor) {
            return;
        }

        const ctx = gsap.context(() => {
            /* ========================================
               HEADING ANIMATION
            ======================================== */

            const headingElements = [line1, line2, line3];

            // Initial hanging state
            gsap.set(headingElements, {
                rotateX: -90,
                rotateZ: -1.5,
                skewX: 2,
                scaleY: 0.96,
                y: -20,
                opacity: 0,
                transformOrigin: "50% 0%",
            });

            // Hanging → settled position
            gsap.to(headingElements, {
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

            /* ========================================
               PROJECT CARD ANIMATIONS
            ======================================== */

            projectRefs.current.forEach((card, index) => {
                if (!card) return;

                const image = projectImageRefs.current[index];

                if (!image) return;

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: "top 60%",
                        toggleActions: "play reverse play reverse",
                    },
                });

                // Card scales UP
                timeline.fromTo(
                    card,
                    {
                        scale: 0.9,
                    },
                    {
                        scale: 1,
                        duration: 1.4,
                        ease: "power3.out",
                    },
                    0
                );

                // Image zooms OUT while card scales UP
                timeline.fromTo(
                    image,
                    {
                        scale: 1.08,
                    },
                    {
                        scale: 1,
                        duration: 1.4,
                        ease: "power3.out",
                    },
                    0
                );
            });

            /* ========================================
               CUSTOM PROJECT CURSOR
            ======================================== */

            // Start hidden
            gsap.set(projectCursor, {
                xPercent: -50,
                yPercent: -50,
                scale: 0,
                opacity: 0,
            });

            // Smooth cursor movement
            cursorXRef.current = gsap.quickTo(projectCursor, "x", {
                duration: 0.35,
                ease: "power3.out",
            });

            cursorYRef.current = gsap.quickTo(projectCursor, "y", {
                duration: 0.35,
                ease: "power3.out",
            });
        }, section);

        return () => {
            cursorXRef.current = null;
            cursorYRef.current = null;
            ctx.revert();
        };
    }, []);

    const handleProjectMouseEnter = () => {
        const cursor = projectCursorRef.current;

        if (!cursor) return;

        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            duration: 0.35,
            ease: "power3.out",
        });
    };

    const handleProjectMouseMove = (
        event: React.MouseEvent<HTMLElement>
    ) => {
        cursorXRef.current?.(event.clientX);
        cursorYRef.current?.(event.clientY);
    };

    const handleProjectMouseLeave = () => {
        const cursor = projectCursorRef.current;

        if (!cursor) return;

        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power3.out",
        });
    };

    return (
        <>
            {/* Custom View Project Cursor */}
            <div
                ref={projectCursorRef}
                className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full bg-white px-5 py-3 text-[17px] font-normal text-black shadow-sm lg:block"
            >
                View Project
            </div>

            <section
                ref={sectionRef}
                className="bg-[#111111] px-4 py-24 text-white sm:px-6 lg:px-8"
            >
                {/* Section Heading */}
                <div className="mb-24">
                    <div style={{ perspective: "1000px" }}>
                        {/* Animation 1 */}
                        <div
                            ref={headingLine1Ref}
                            className="origin-top text-[clamp(4rem,6.8vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                        >
                            We find the unique, easy
                        </div>

                        {/* Animation 2 */}
                        <div
                            ref={headingLine2Ref}
                            className="origin-top text-[clamp(4rem,6.8vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                        >
                            solution for each creative
                        </div>

                        {/* Animation 3 — Project + CTA */}
                        <div
                            ref={headingLine3Ref}
                            className="origin-top flex items-center"
                        >
                            <div className="text-[clamp(4rem,6.8vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.065em]">
                                project
                            </div>

                            {/* View All Work CTA */}
                            <a
                                href="#"
                                className="group/work ml-6 mb-1 inline-flex shrink-0 items-center"
                            >
                                {/* Capsule */}
                                <span
                                    className="relative z-10 origin-left rounded-full border border-white px-7 py-2 text-[17px] font-medium transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/work:-rotate-[10deg]"
                                >
                                    View All Work
                                </span>

                                {/* Arrow Circle */}
                                <span
                                    className="relative z-0 -ml-[2px] flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full border border-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/work:-translate-x-[7px]"
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

                {/* Projects */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            ref={(el) => {
                                if (el) {
                                    projectRefs.current[index] = el;
                                }
                            }}
                        >
                            {/* Project Image */}
                            <div
                                className="overflow-hidden rounded-[18px] lg:cursor-none"
                                onMouseEnter={handleProjectMouseEnter}
                                onMouseMove={handleProjectMouseMove}
                                onMouseLeave={handleProjectMouseLeave}
                            >
                                <img
                                    ref={(el) => {
                                        if (el) {
                                            projectImageRefs.current[index] = el;
                                        }
                                    }}
                                    src={project.image}
                                    alt={project.title}
                                    className="block h-auto w-full object-cover"
                                />
                            </div>

                            {/* Project Information */}
                            <div className="mt-5">
                                <h3 className="text-[32px] font-normal leading-[1.1] tracking-[-0.035em]">
                                    {project.title}
                                </h3>

                                <p className="mt-3 text-[16px] text-[#888888]">
                                    {project.meta}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}