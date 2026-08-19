"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight * 0.25);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            aria-label="Back to top"
            onClick={handleClick}
            className={`
                fixed
                bottom-5
                right-5
                z-[9999]
                flex
                h-[45px]
                w-[45px]
                items-center
                justify-center
                rounded-full
                border
                border-white/35
                bg-white
                backdrop-blur-2xl
                backdrop-saturate-150
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_8px_30px_rgba(0,0,0,0.18)]
                transition-all
                duration-500
                ease-out
                hover:scale-105
                hover:bg-white
                active:scale-95
                ${visible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
                }
            `}
            style={{
                WebkitBackdropFilter:
                    "blur(24px) saturate(150%)",
                backgroundColor: "#ffffff",
            }}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M12 19V5"
                    stroke="#111111"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />

                <path
                    d="M6 11L12 5L18 11"
                    stroke="#111111"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}