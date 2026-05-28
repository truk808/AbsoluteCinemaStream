import  ReactPlayer  from  'react-player'
import {Modal} from "../../../shared/ui";
import {useState} from "react";

export const OpenTrailer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Modal
                onClose={() => setIsOpen(false)}
                isOpen={isOpen}
            >
                    <ReactPlayer
                        src='https://www.youtube.com/watch?v=YihPA42fdQ8'
                        volume={0.25}
                        controls={true}
                        style={{width: '100%', height: '100%'}}
                    />
            </Modal>
            <button
                onClick={() => {setIsOpen(true)}}
                className="w-full flex-grow bg-[#fdc073] font-semibold text-base px-4 py-3.5 rounded-xl text-[#19120a] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#eeb163] transition-colors">
                Смотреть трейлер
            </button>
        </>
    );
};