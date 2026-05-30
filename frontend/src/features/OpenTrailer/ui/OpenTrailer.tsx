import  ReactPlayer  from  'react-player'
import {Modal} from "../../../shared/ui";
import {useEffect, useState} from "react";

interface OpenTrailerProps {
    url: string;
    name: string;
    site: string;
}

export const OpenTrailer = ({url, name, site}: OpenTrailerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log(url)
    }, [url])

    return (
        <>
            <Modal
                onClose={() => setIsOpen(false)}
                isOpen={isOpen}
            >
                    <ReactPlayer
                        src={url}
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