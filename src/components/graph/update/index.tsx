
import { FaEdit } from "react-icons/fa";

import Form from "./form";
import { useState, useRef } from "react";
import { WidgetType } from "../../../types";
export default function Update({ element }: { element: WidgetType }) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => {
        if (dialogRef.current) {
            if (isOpen) {
                dialogRef.current.close();
            } else {
                dialogRef.current.showModal();
            }
            setIsOpen(!isOpen);
        }
    };

    return (
        <>
            <FaEdit className='w-6 h-6 fill-yellow-500' onClick={toggleDialog} />
            <dialog
                ref={dialogRef}
                className={`w-80 sm:w-96 md:w-112 min-h-72 bg-white  z-20 rounded-lg transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
            >
                <h1 className='text-lg  m-3 font-semibold'>Add Widget</h1>
                <Form closeAction={() => toggleDialog()} element={element} />
            </dialog>


        </>
    )
}
