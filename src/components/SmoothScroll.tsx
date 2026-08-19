"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.8,
            smoothWheel: true,
            wheelMultiplier: 0.85,
            touchMultiplier: 1,
            easing: (t: number) =>
                1 - Math.pow(1 - t, 4),
        });

        lenis.on("scroll", ScrollTrigger.update);

        const ticker = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(ticker);

        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(ticker);
            lenis.destroy();
        };
    }, []);

    return null;
}