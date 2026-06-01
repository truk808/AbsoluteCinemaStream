import {useState} from "react";

interface CardListProps {
    children: React.ReactNode[];
    show?: 'all' | 'portion';
}

export const CardList = ({children, show = 'all'}: CardListProps) => {
    const [portion, setPortion] = useState(show === "all" ? children.length : 5);

    function onClick() {
        if (portion + 5 < children.length) {
            setPortion((prev) => prev + 5);
        } else {
            setPortion(children.length - 1);
        }
    }

    return (
        <div className='flex flex-col items-center w-full gap-6'>
            <div
                className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center justify-center w-full max-w-[1200px] mx-auto px-4'>
                {
                    children.map((item, index) => {
                        if (index < portion) {
                            return item
                        }
                    })
                }
            </div>
            {
                show !== 'all' &&
                <button
                    onClick={onClick}
                    className="w-full max-w-[300px] bg-[#271f16] text-brand-text border border-[#454545] font-semibold text-base px-4 py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-brand-primary hover:text-bg transition-colors">
                    Показать еще
                </button>
            }
        </div>
    );
};
