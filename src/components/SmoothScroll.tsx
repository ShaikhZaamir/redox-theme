"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1,
        });

        lenis.on("scroll", ScrollTrigger.update);

        let animationFrameId: number;

        const raf = (time: number) => {
            lenis.raf(time * 1000);
            animationFrameId = requestAnimationFrame(raf);
        };

        animationFrameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrameId);
            lenis.destroy();
        };
    }, []);

    return null;
}