import React, { useState, useEffect } from "react";

interface CardListProps {
    children: React.ReactNode;
    show?: 'all' | 'portion';
    addItem: () => void;
}

export const CardList = ({ children, show = 'all', addItem }: CardListProps) => {
    const childrenArray = React.Children.toArray(children);

    const [portion, setPortion] = useState(show === "all" ? childrenArray.length : 5);

    useEffect(() => {
        if (childrenArray.length > portion) {
            setPortion(childrenArray.length);
        }
    }, [childrenArray.length]);

    function onClick() {
        if (portion >= childrenArray.length) {
            addItem();
        } else {
            setPortion(childrenArray.length);
        }
    }

    return (
        <div className='flex flex-col items-center w-full gap-6'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center justify-center w-full max-w-[1200px] mx-auto px-4'>
                {childrenArray.slice(0, portion)}
            </div>

            {show !== 'all' && (
                <button
                    onClick={onClick}
                    className="w-full max-w-[300px] bg-[#271f16] text-brand-text border border-[#454545] font-semibold text-base px-4 py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-brand-primary hover:text-bg transition-colors"
                >
                    {portion >= childrenArray.length ? 'Загрузить еще' : 'Посмотреть все'}
                </button>
            )}
        </div>
    );
};