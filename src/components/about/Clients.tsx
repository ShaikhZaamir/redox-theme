"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const clientItems = Array.from({ length: 10 });

export default function Clients() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;

        if (!section || !track) {
            return;
        }

        const ctx = gsap.context(() => {
            const firstItem = track.children[0] as HTMLElement;

            if (!firstItem) {
                return;
            }

            const itemWidth = firstItem.offsetWidth;
            const gap = 24;

            const distance = itemWidth + gap;

            gsap.to(track, {
                x: -distance,
                duration: 2.8,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((value) => {
                        const x = parseFloat(value);

                        return x <= -distance ? 0 : x;
                    }),
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="overflow-hidden bg-[#111111] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-28"
        >
            {/* =========================================================
                INTRO
            ========================================================= */}
            <div className="flex justify-center text-center">
                <p className="max-w-[440px] text-[22px] leading-[1.25] tracking-[-0.025em] sm:text-[23px]">
                    Help to brands growing up and show
                    <br />
                    their success stories to the world
                </p>
            </div>

            {/* =========================================================
                CLIENT CAROUSEL
            ========================================================= */}
            <div className="mt-20 overflow-hidden sm:mt-24 lg:mt-28">
                <div
                    ref={trackRef}
                    className="flex w-max items-center gap-6"
                >
                    {clientItems.map((_, index) => (
                        <div
                            key={index}
                            className="flex h-[112px] w-[195px] shrink-0 items-center justify-center rounded-full border border-white/10 px-8"
                        >
                            <img
                                src="/client-4.png"
                                alt="Client"
                                className="max-h-[42px] w-auto max-w-[135px] object-contain opacity-70"
                            />
                        </div>
                    ))}

                    {/* Extra copies keep the track filled */}
                    {clientItems.map((_, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="flex h-[112px] w-[195px] shrink-0 items-center justify-center rounded-full border border-white/10 px-8"
                        >
                            <img
                                src="/client-4.png"
                                alt="Client"
                                className="max-h-[42px] w-auto max-w-[135px] object-contain opacity-70"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}