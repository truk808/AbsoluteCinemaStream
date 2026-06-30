import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Navigation } from "./Navigation";
import { SearchInput } from "./SearchInput";
import {ROUTES} from "../../../shared/config";
import {BurgerMenu} from "./BurgerMenu.tsx";
import {FilterModal} from "../../../features/FilterModal";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className='relative w-full h-20 bg-neutral-950/80 backdrop-blur-md z-40 text-brand-primary flex items-center border-b border-neutral-900'>
                <div className='h-full container flex justify-between items-center px-4 mx-auto'>

                    <div className='flex flex-col items-center text-center leading-[0.8] tracking-tighter cursor-pointer select-none'>
                        <span className='font-black text-xl sm:text-2xl'>ABSOLUTE CINEMA</span>
                        <span className='font-black text-xl sm:text-2xl'>STREAM</span>
                    </div>

                    <Navigation className="hidden md:flex gap-6 text-neutral-300 font-medium" />

                    <div className='hidden md:flex items-center gap-4'>
                        <FilterModal />
                        <SearchInput />
                        <NavLink to={ROUTES.PROFILE}>
                            <span className='cursor-pointer text-xl hover:text-brand-primary transition-colors'>👨‍🦲</span>
                        </NavLink>
                    </div>

                    <button onClick={toggleMenu} className='md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 relative' aria-label="Toggle menu">
                        <span className={`h-0.5 w-6 bg-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}/>
                        <span className={`h-0.5 w-6 bg-brand-primary transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}/>
                        <span className={`h-0.5 w-6 bg-brand-primary transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
                    </button>

                </div>
            </header>

            <BurgerMenu isOpen={isOpen} onClose={closeMenu} />
        </>
    );
};