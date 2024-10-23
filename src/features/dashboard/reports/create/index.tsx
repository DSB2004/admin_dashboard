import React, { useState, useRef } from 'react'
import Button from '../../../../components/button/simple_button'
import { IoMdAdd } from "react-icons/io";
import Form from './form';
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
            <div className='relative'>

                <Button className="bg-yellow-500 " onClick={() => toggleDialog()}>
                    <IoMdAdd className="w-5 h-5" />
                    <span className="hidden md:inline">Add Report</span>
                </Button>
                <dialog
                    ref={dialogRef}
                    className={`w-80 sm:w-96 md:w-112 min-h-96 bg-white  z-20 rounded-lg transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                >
                    <h1 className='text-lg  m-3 font-semibold'>Add Report</h1>
                    <Form closeAction={() => toggleDialog()} />
                </dialog>
            </div >
        </>

    )
}
