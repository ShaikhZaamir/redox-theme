"use client";

import { useEffect, useState } from "react";

export default function CustomScrollbar() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [thumbHeight, setThumbHeight] = useState(0);

    useEffect(() => {
        const updateScrollbar = () => {
            const documentHeight =
                document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;

            const scrollableHeight = documentHeight - viewportHeight;

            if (scrollableHeight <= 0) {
                setThumbHeight(100);
                setScrollProgress(0);
                return;
            }

            const heightPercentage =
                (viewportHeight / documentHeight) * 100;

            const progress =
                (window.scrollY / scrollableHeight) * 100;

            setThumbHeight(Math.max(heightPercentage, 8));
            setScrollProgress(Math.min(Math.max(progress, 0), 100));
        };

        updateScrollbar();

        window.addEventListener("scroll", updateScrollbar, {
            passive: true,
        });

        window.addEventListener("resize", updateScrollbar);

        return () => {
            window.removeEventListener("scroll", updateScrollbar);
            window.removeEventListener("resize", updateScrollbar);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed right-0 top-0 z-[9999] h-screen w-[5px]"
            aria-hidden="true"
        >
            {/* Track */}
            <div className="absolute inset-0 bg-[#222222]" />

            {/* Thumb */}
            <div
                className="absolute left-0 w-full rounded-full bg-[#888888]"
                style={{
                    height: `${thumbHeight}%`,
                    top: `${scrollProgress}%`,
                }}
            />
        </div>
    );
}