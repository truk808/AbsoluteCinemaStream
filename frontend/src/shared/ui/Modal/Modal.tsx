

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
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300" />
            <div className='bg-neutral-950 z-10 h-full max-w-[70vw] max-h-[70vh] rounded-lg'
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