"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxImage() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const image = imageRef.current;

        if (!section || !image) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                image,
                {
                    yPercent: -8,
                },
                {
                    yPercent: 8,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-[85vh] min-h-[500px] overflow-hidden bg-[#111111]"
        >
            <div className="absolute inset-0 overflow-hidden">
                <img
                    ref={imageRef}
                    src="/ax-ma-parallax-bg.png"
                    alt=""
                    className="absolute left-0 top-0 h-[116%] w-full max-w-none object-cover"
                />
            </div>
        </section>
    );
}