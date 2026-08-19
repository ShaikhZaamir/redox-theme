"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Decisions() {
    const sectionRef = useRef<HTMLElement>(null);

    const headingLine1Ref = useRef<HTMLDivElement>(null);
    const headingLine2Ref = useRef<HTMLDivElement>(null);
    const headingCtaRef = useRef<HTMLAnchorElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const line1 = headingLine1Ref.current;
        const line2 = headingLine2Ref.current;
        const cta = headingCtaRef.current;

        if (!section || !line1 || !line2 || !cta) return;

        const ctx = gsap.context(() => {
            const headingElements = [line1, line2, cta];

            /* ========================================
               HEADING HANGING ANIMATION
            ======================================== */

            gsap.set(headingElements, {
                rotateX: -90,
                rotateZ: -1.5,
                skewX: 2,
                scaleY: 0.96,
                y: -20,
                opacity: 0,
                transformOrigin: "50% 0%",
            });

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
            className="bg-[#111111] px-4 py-24 text-white sm:px-6 lg:px-8"
        >
            {/* Top Content */}
            <div>
                <div style={{ perspective: "1000px" }}>
                    {/* Heading Line 1 */}
                    <div
                        ref={headingLine1Ref}
                        className="origin-top text-[clamp(3.5rem,5.8vw,6.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                    >
                        Yes! we take some smart
                    </div>

                    {/* Heading Line 2 */}
                    <div
                        ref={headingLine2Ref}
                        className="origin-top text-[clamp(3.5rem,5.8vw,6.5rem)] font-normal leading-[0.88] tracking-[-0.065em]"
                    >
                        decisions for brands
                    </div>

                    {/* Get Started CTA */}
                    <a
                        ref={headingCtaRef}
                        href="#"
                        className="group/cta mt-8 inline-flex items-center"
                    >
                        {/* Capsule */}
                        <span
                            className="relative z-10 origin-left rounded-full border border-white px-7 py-2 text-[17px] font-medium transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-rotate-[10deg]"
                        >
                            Get Started
                        </span>

                        {/* Arrow Circle */}
                        <span
                            className="relative z-0 -ml-[2px] flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full border border-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-translate-x-[7px]"
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

            {/* Description */}
            <div className="mt-28 ml-[22%] max-w-[470px]">
                <p className="text-[18px] leading-[1.55] text-[#888888]">
                    We help brands and company in marketing solution. As a
                    cause-led digital marketing and brand agency, we harness
                    the power of technology and creativity to drive positive
                    feedback.
                </p>
            </div>

            {/* Large Number + Bottom Information */}
            <div className="mt-16 flex items-end">
                {/* 1475 */}
                <div className="min-w-0 flex-1 overflow-hidden">
                    <div className="text-[clamp(14rem,32vw,38rem)] font-normal leading-[0.72] tracking-[-0.09em]">
                        1475
                    </div>
                </div>

                {/* Bottom Right Content */}
                <div className="w-[25%] shrink-0 pb-2">
                    {/* Decorative Mark */}
                    <div className="mb-8">
                        <img
                            src="/ax-funfact-angle-shpe.png"
                            alt=""
                            className="h-auto w-[70px]"
                        />
                    </div>

                    {/* Description */}
                    <p className="max-w-[300px] text-[24px] font-normal leading-[1.05] tracking-[-0.04em]">
                        Projects successfully
                        <br />
                        completed from last
                        <br />
                        25 years.
                    </p>
                </div>
            </div>
        </section>
    );
}




// "use client";

// export default function Decisions() {
//     return (
//         <section className="bg-[#111111] px-4 py-24 text-white sm:px-6 lg:px-8">
//             {/* Top Content */}
//             <div>
//                 {/* Heading */}
//                 <h2 className="max-w-[1000px] text-[clamp(4rem,6.8vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.065em]">
//                     Yes! we take some smart
//                     <br />
//                     decisions for brands
//                 </h2>

//                 {/* Get Started CTA */}
//                 <a
//                     href="#"
//                     className="group/cta mt-8 inline-flex items-center"
//                 >
//                     {/* Capsule */}
//                     <span
//                         className="relative z-10 origin-left rounded-full border border-white px-7 py-2 text-[17px] font-medium transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-rotate-[10deg]"
//                     >
//                         Get Started
//                     </span>

//                     {/* Arrow Circle */}
//                     <span
//                         className="relative z-0 -ml-[2px] flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full border border-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-translate-x-[7px]"
//                     >
//                         <svg
//                             width="20"
//                             height="20"
//                             viewBox="0 0 20 20"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             aria-hidden="true"
//                         >
//                             <path
//                                 d="M4 16L16 4"
//                                 stroke="currentColor"
//                                 strokeWidth="1.8"
//                                 strokeLinecap="round"
//                             />

//                             <path
//                                 d="M9 4H16V11"
//                                 stroke="currentColor"
//                                 strokeWidth="1.8"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             />
//                         </svg>
//                     </span>
//                 </a>
//             </div>

//             {/* Description */}
//             <div className="mt-28 ml-[22%] max-w-[470px]">
//                 <p className="text-[18px] leading-[1.55] text-[#888888]">
//                     We help brands and company in marketing solution. As a
//                     cause-led digital marketing and brand agency, we harness
//                     the power of technology and creativity to drive positive
//                     feedback.
//                 </p>
//             </div>

//             {/* Large Number */}
//             <div className="mt-16 overflow-hidden">
//                 <div className="text-[clamp(18rem,32vw,38rem)] font-normal leading-[0.72] tracking-[-0.09em]">
//                     1475
//                 </div>
//             </div>
//         </section>
//     );
// }