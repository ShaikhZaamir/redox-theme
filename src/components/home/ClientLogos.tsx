"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
    "/client-4.png",
    "/client-4.png",
    "/client-4.png",
    "/client-4.png",
    "/client-4.png",
    "/client-4.png",
    "/client-4.png",
    "/client-4.png",
    "/client-4.png",
    "/client-4.png",
];

export default function ClientLogos() {
    const sectionRef = useRef<HTMLElement>(null);

    const headingLine1Ref = useRef<HTMLDivElement>(null);
    const headingLine2Ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        const line1 = headingLine1Ref.current;
        const line2 = headingLine2Ref.current;

        if (!section || !line1 || !line2) return;

        const ctx = gsap.context(() => {
            const headingLines = [line1, line2];

            /*
             * Initial hanging state
             */
            gsap.set(headingLines, {
                rotateX: -90,
                rotateZ: -1.5,
                skewX: 2,
                scaleY: 0.96,
                y: -20,
                opacity: 0,
                transformOrigin: "50% 0%",
            });

            /*
             * Hanging → settled
             */
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
            className="overflow-hidden bg-[#111111] mt-50 px-4 py-24 text-white sm:px-6 lg:px-8"
        >
            {/* Heading */}
            <div
                className="mb-20 flex justify-center"
                style={{ perspective: "1000px" }}
            >
                <div className="text-center text-2xl font-normal leading-[1.15] tracking-[-0.045em]">
                    <div ref={headingLine1Ref}>
                        Help to brands growing up and show
                    </div>

                    <div ref={headingLine2Ref}>
                        their success stories to the world
                    </div>
                </div>
            </div>

            {/* Client Capsules */}
            <div className="w-full overflow-hidden">
                <div className="flex w-max items-center gap-0">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex px-7 py-8 shrink-0 items-center justify-center rounded-full border border-white/10"
                        >
                            <img
                                src={client}
                                alt=""
                                className="h-auto max-h-[42px] w-auto max-w-[120px] object-contain opacity-70"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}