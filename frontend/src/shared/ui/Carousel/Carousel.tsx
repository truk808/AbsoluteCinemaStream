import React, { useRef } from 'react';

interface CarouselProps {
    children: React.ReactNode[];
    // loadMore: () => void;
}

export const Carousel = ({ children }: CarouselProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const { scrollLeft, clientWidth } = containerRef.current;
            const scrollAmount = clientWidth * 0.8;

            containerRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    if (!children || children.length === 0) return null;

    return (
        <div className="relative w-full group/carousel">
            <button
                onClick={() => handleScroll('left')}
                className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/70 border border-neutral-800 rounded-full items-center justify-center text-white text-xl font-medium opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-brand-primary hover:text-neutral-950 hover:border-brand-primary active:scale-90 shadow-lg focus:outline-none"
                aria-label="Scroll left"
            >
                ‹
            </button>
            <div
                ref={containerRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none pb-2"
            >
                {children.map((child, index) => (
                    <div key={index} className="shrink-0 snap-start">
                        {child}
                    </div>
                ))}
            </div>
            <button
                onClick={() => handleScroll('right')}
                className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/70 border border-neutral-800 rounded-full items-center justify-center text-white text-xl font-medium opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-brand-primary hover:text-neutral-950 hover:border-brand-primary active:scale-90 shadow-lg focus:outline-none"
                aria-label="Scroll right"
            >
                ›
            </button>
        </div>
    );
};