

interface ModalProps {
    isOpen: boolean;
    onClose: () => void,
    children: React.ReactNode,
}

export const Modal = ({isOpen, onClose, children}: ModalProps) => {
    return (
        <div
            className={["fixed top-0 left-0 z-50 w-[100vw] h-[100vh] flex items-center justify-center transition-all", isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'].join(" ")}
            onClick={onClose}
        >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300" />
            <div className='bg-neutral-950 z-51 w-full h-full max-w-[70vw] max-h-[70vh] rounded-lg'
                 onClick={(e) => {e.stopPropagation()}}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 p-2 rounded-full transition-colors group"
                >
                    <svg
                        className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                <div className='relative z-10 w-full h-full'>
                    {children}
                </div>
            </div>
        </div>
    );
};

// export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
//     const [isMounted, setIsMounted] = useState(false);
//
//     // Следим за тем, чтобы компонент был смонтирован в DOM
//     useEffect(() => {
//         setIsMounted(true);
//     }, []);
//
//     // Блокируем прокрутку страницы, когда модальное окно открыто
//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isOpen]);
//
//     // Закрытие по нажатию на клавишу Escape
//     useEffect(() => {
//         const handleKeyDown = (e: any) => {
//             if (e.key === 'Escape') onClose();
//         };
//
//         if (isOpen) {
//             window.addEventListener('keydown', handleKeyDown);
//         }
//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [isOpen, onClose]);
//
//     if (!isMounted || !isOpen) return null;
//
//     return createPortal(
//         <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
//             {/* Оверлей (Задний полупрозрачный фон) с плавной анимацией */}
//             <div
//
//                 onClick={onClclassName="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-out"ose} // Закрытие при клике на темную область
//             />
//
//             {/* Контентное окно модалки */}
//             <div className="relative w-full max-w-4xl mx-4 my-6 z-10 transform overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-6 text-left align-middle shadow-2xl transition-all duration-300 scale-100">
//
//                 {/* Кнопка Закрытия (Крестик) */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 p-2 rounded-full transition-colors group"
//                     aria-label="Close modal"
//                 >
//                     <svg
//                         className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 </button>
//
//                 {/* Содержимое модального окна */}
//                 <div className="mt-4">
//                     {children}
//                 </div>
//
//             </div>
//         </div>,
//         document.body // Рендерим модалку напрямую в тег body
//     );
// };