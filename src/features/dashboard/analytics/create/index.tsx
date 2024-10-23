

import Button from "../../../../components/button/simple_button";
import { IoMdAdd } from "react-icons/io";
import { v4 } from "uuid"
import Form from "./form";
import { useState, useRef } from "react";
export default function Create() {
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
            <Button className="bg-yellow-500 text-black"
                onClick={toggleDialog}>
                <IoMdAdd className="w-5 h-5" />
                <span className="hidden md:inline" >Add Widget</span>
            </Button>
            <dialog
                ref={dialogRef}
                className={`w-80 sm:w-96 md:w-112 min-h-72 bg-white  z-20 rounded-lg transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
            >
                <h1 className='text-lg  m-3 font-semibold'>Add Widget</h1>
                <Form closeAction={() => toggleDialog()} />
            </dialog>


        </>
    )
}