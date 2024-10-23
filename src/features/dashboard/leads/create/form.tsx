import React from 'react'
import Input from '../../../../components/input/border_input'
import FileInput from '../../../../components/input/image_input'
import Button from '../../../../components/button/border_button'
import UserImg from "../../../../assets/user.png"
export default function Form({ closeAction }: { closeAction: Function }) {
    return (
        <form action="" >
            <div className="flex flex-col mx-4 ">
                <div className="flex justify-between  gap-3 items-center my-2">
                    <span className="text-xs font-semibold hidden md:inline">Name</span>
                    <Input placeholder="Full name ..." className="w-full md:w-80 " />
                </div>
                <div className="flex justify-between  gap-3 items-center my-2">
                    <span className="text-xs font-semibold hidden md:inline">
                        Email
                    </span>
                    <Input placeholder="Email address ..." className="w-full md:w-80 " />
                </div>
                <div className="flex justify-between  gap-3 items-center my-2">
                    <span className="text-xs font-semibold hidden md:inline">
                        Phone
                    </span>
                    <Input placeholder="Phone no ..." className="w-full md:w-80 " />
                </div>
                <div className="flex justify-between  gap-3 items-center my-2">
                    <span className="text-xs font-semibold hidden md:inline">
                        Company
                    </span>
                    <Input placeholder="Company name ..." className="w-full md:w-80 " />
                </div>

                <div className="flex justify-start  gap-3 items-center my-2">
                    <span className="text-xs font-semibold hidden md:inline">
                        Profile Photo
                    </span>
                    {/*  */}
                    <FileInput defaultVal={UserImg} />
                </div>

                <div className='flex justify-end items-center my-3'>
                    <Button type="button" className='p-2  bg-yellow-500' >Add Lead</Button>
                    <Button type="button" className='p-2 text-white bg-black' onClick={() => closeAction()} >Cancel</Button>
                </div>
            </div>
        </form>
    )
}
