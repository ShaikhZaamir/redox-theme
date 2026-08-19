"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FactBanner() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const wrapper = imageWrapperRef.current;
        const image = imageRef.current;

        if (!section || !wrapper || !image) return;

        const ctx = gsap.context(() => {
            /*
             * TOP-RIGHT is the fixed anchor.
             *
             * The image expands diagonally:
             *
             *        ● ← fixed top-right
             *       ╱
             *      ╱
             *     ╱
             *   ↙
             * bottom-left
             */
            gsap.set(image, {
                scale: 1,
                transformOrigin: "100% 0%",
                force3D: true,
            });

            gsap.to(image, {
                /*
                 * Calculate the EXACT scale required for the
                 * image bottom to touch the viewport bottom.
                 *
                 * Example:
                 * image height = 500px
                 * viewport = 1000px
                 * scale = 2
                 *
                 * Therefore the final image height becomes
                 * exactly 1000px.
                 */
                scale: () => {
                    const imageHeight = image.offsetHeight;

                    if (!imageHeight) return 1;

                    return window.innerHeight / imageHeight * 1.05;
                },

                ease: "none",
                force3D: true,

                scrollTrigger: {
                    trigger: wrapper,

                    /*
                     * Start EXACTLY when the image touches
                     * the top of the viewport.
                     */
                    start: "top top",

                    /*
                     * Controls how much scrolling is required
                     * to complete the scaling.
                     */
                    end: "+=100%",

                    /*
                     * Smooth scroll-linked scaling.
                     */
                    scrub: 1.2,

                    /*
                     * Keep the image fixed while it expands.
                     */
                    pin: true,

                    pinSpacing: true,

                    /*
                     * Recalculate the target scale when
                     * viewport dimensions change.
                     */
                    invalidateOnRefresh: true,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#111111] px-[-5] py-24 text-white"
        >
            <div
                ref={imageWrapperRef}
                className="relative ml-auto w-full lg:w-[70%]"
            >
                <img
                    ref={imageRef}
                    src="/ax-fact-banner.png"
                    alt=""
                    className="block h-auto w-full object-cover"
                />
            </div>
        </section>
    );
}
