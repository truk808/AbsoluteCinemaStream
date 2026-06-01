import React, { useState } from "react";

interface TabsProps {
    titles: string[];
    children: React.ReactNode;
}

export const Tabs = ({ titles, children }: TabsProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const panels = React.Children.toArray(children);

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex gap-8 pb-2.5 scrollbar-none">
                {titles.map((title, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`text-base font-bold cursor-pointer relative ${
                                isActive
                                    ? 'text-brand-primary'
                                    : 'text-brand-text hover:text-brand-text-muted'
                            }`}
                        >
                            {title}
                            {isActive && (
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary rounded-full" />
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="w-full animate-fade-in">
                {panels[activeIndex]}
            </div>

        </div>
    );
};

Tabs.Panel = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};