'use client';

import { useEffect, useRef } from 'react';

// A silent, looping screen recording. It downloads only when scrolled near, plays only
// while on screen, and stays on its poster for visitors who prefer reduced motion.
export default function LoopVideo({ src, poster, label, width, height }) {
    const ref = useRef(null);

    useEffect(() => {
        const video = ref.current;
        if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) video.play().catch(() => {});
                else video.pause();
            },
            { threshold: 0.25 }
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={ref}
            src={src}
            poster={poster}
            width={width}
            height={height}
            aria-label={label}
            muted
            loop
            playsInline
            preload="none"
        />
    );
}
