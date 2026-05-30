import { useState } from 'react';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../shared/config";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='relative w-full h-20 bg-neutral-950/80 backdrop-blur-md z-40 text-[#f39d0b] flex items-center border-b border-neutral-900'>
                <div className='h-full container flex justify-between items-center px-4'>
                    <div className='flex flex-col items-center text-center leading-[0.8] tracking-tighter cursor-pointer select-none'>
                        <span className='font-black text-xl sm:text-2xl'>ABSOLUTE CINEMA</span>
                        <span className='font-black text-xl sm:text-2xl'>STREAM</span>
                    </div>

                    <div className='hidden md:flex gap-6 text-neutral-300 font-medium'>
                        <NavLink to={ROUTES.MAIN}><span className='text-[#f39d0b]'>Главная</span></NavLink>
                        <span className='cursor-pointer hover:text-[#f39d0b] transition-colors'>Кино</span>
                        <span className='cursor-pointer hover:text-[#f39d0b] transition-colors'>TV</span>
                    </div>

                    <div className='hidden md:flex items-center gap-4'>
                        <input
                            className='border border-[#f39d0b] bg-neutral-900/50 rounded-md px-2 py-1 text-white text-sm focus:outline-none'
                            type="text"
                            placeholder="Поиск..."
                        />
                        <span className='cursor-pointer text-xl'>❤</span>
                        <span className='cursor-pointer text-xl'>👨‍🦲</span>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 relative focus:outline-none'
                    >
                        <span className={`h-0.5 w-6 bg-[#f39d0b] transition-transform duration-300}`} />
                        <span className={`h-0.5 w-6 bg-[#f39d0b] transition-opacity duration-300 `} />
                        <span className={`h-0.5 w-6 bg-[#f39d0b] transition-transform duration-300 `} />
                    </button>

                </div>
            </div>

            <div className={`fixed top-0 right-0 h-screen w-[75vw] sm:w-[50vw] bg-neutral-950/95 backdrop-blur-lg z-40 p-6 pt-28 shadow-2xl transition-transform duration-300 md:hidden ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className='flex flex-col gap-6 text-xl text-neutral-200 font-semibold mb-8'>
                    <NavLink to={ROUTES.MAIN}><span className='text-[#f39d0b]' onClick={() => setIsOpen(false)}>Главная</span></NavLink>
                    <span onClick={() => setIsOpen(false)}>Кино</span>
                    <span onClick={() => setIsOpen(false)}>TV</span>
                </div>

                <hr className="border-neutral-800 mb-6" />

                <div className='flex flex-col gap-4'>
                    <input
                        className='border border-[#f39d0b] bg-neutral-900 px-3 py-2 rounded-md text-white w-full text-base focus:outline-none'
                        type="text"
                        placeholder="Поиск..."
                    />
                    <div className='flex gap-6 items-center mt-2 text-2xl'>
                        <span className='flex items-center gap-2 text-base text-neutral-300'>❤  </span>
                        <span className='flex items-center gap-2 text-base text-neutral-300'>👨‍🦲  </span>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
                />
            )}
        </>
    );
};