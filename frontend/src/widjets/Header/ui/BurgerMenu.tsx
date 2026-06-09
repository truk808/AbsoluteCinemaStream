import { NavLink } from "react-router-dom";
import { Navigation } from "./Navigation";
import { SearchInput } from "./SearchInput";
import {ROUTES} from "../../../shared/config";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BurgerMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    return (
        <>
            <div className={`fixed top-0 right-0 h-screen w-[75vw] sm:w-[50vw] bg-neutral-950/95 backdrop-blur-lg z-40 p-6 pt-28 shadow-2xl transition-transform duration-300 md:hidden ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <Navigation className="flex-col gap-6 text-xl text-neutral-200 font-semibold mb-8" onItemClick={onClose} />
                <hr className="border-neutral-800 mb-6" />
                <div className='flex flex-col gap-4'>
                    <SearchInput className="w-full text-base py-2" />
                    <div className='flex gap-6 items-center mt-2 text-2xl'>
                        <span className='cursor-pointer text-neutral-300 hover:text-brand-primary transition-colors'>❤</span>
                        <NavLink to={ROUTES.PROFILE} onClick={onClose}>
                            <span className='text-neutral-300 hover:text-brand-primary transition-colors'>👨‍🦲</span>
                        </NavLink>
                    </div>
                </div>
            </div>

            {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm" />}
        </>
    );
};