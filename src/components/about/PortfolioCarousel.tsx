"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
    "/ax-about-gallery-01.png",
    "/ax-da-about-04.png",
    "/ax-h2-about-02.png",
    "/team-4.png",
];

export default function PortfolioCarousel() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;

        if (!section || !track) return;

        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(".portfolio-slide");

            if (!items.length) return;

            // Calculate the width of one complete image sequence.
            const firstSetWidth = items
                .slice(0, images.length)
                .reduce((total, item) => total + item.offsetWidth, 0);

            const gap = 24;

            const totalSequenceWidth =
                firstSetWidth + gap * (images.length - 1);

            // Move continuously with vertical page scrolling.
            gsap.to(track, {
                x: -totalSequenceWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#111111] py-16"
        >
            <div
                ref={trackRef}
                className="flex w-max items-start gap-6"
            >
                {/* First sequence */}
                {images.map((src, index) => (
                    <div
                        key={`first-${src}`}
                        className={[
                            "portfolio-slide shrink-0 overflow-hidden",
                            index === 0
                                ? "h-[390px] w-[9vw]"
                                : index === 1
                                    ? "h-[595px] w-[24vw]"
                                    : index === 2
                                        ? "h-[460px] w-[19vw]"
                                        : "h-[620px] w-[24vw]",
                        ].join(" ")}
                    >
                        <img
                            src={src}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}

                {/* Repeated sequence for seamless carousel */}
                {images.map((src, index) => (
                    <div
                        key={`second-${src}`}
                        className={[
                            "portfolio-slide shrink-0 overflow-hidden",
                            index === 0
                                ? "h-[390px] w-[9vw]"
                                : index === 1
                                    ? "h-[595px] w-[24vw]"
                                    : index === 2
                                        ? "h-[460px] w-[19vw]"
                                        : "h-[620px] w-[24vw]",
                        ].join(" ")}
                    >
                        <img
                            src={src}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}

                {/* Third sequence keeps the track filled */}
                {images.map((src, index) => (
                    <div
                        key={`third-${src}`}
                        className={[
                            "portfolio-slide shrink-0 overflow-hidden",
                            index === 0
                                ? "h-[390px] w-[9vw]"
                                : index === 1
                                    ? "h-[595px] w-[24vw]"
                                    : index === 2
                                        ? "h-[460px] w-[19vw]"
                                        : "h-[620px] w-[24vw]",
                        ].join(" ")}
                    >
                        <img
                            src={src}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}