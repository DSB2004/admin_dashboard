import React from 'react'
import Input from '../../../../components/input/border_input'

import Button from '../../../../components/button/border_button'

import TextArea from '../../../../components/input/border_textarea'
import FileInput from '../../../../components/input/file_input'
export default function Form({ closeAction }: { closeAction: Function }) {
    return (
        <form action="" >
            <div className="flex flex-col mx-4 ">

                <div className="flex flex-col m-4 mt-0">
                    <div className="flex justify-between  gap-3 items-center my-2">
                        <span className="text-xs font-semibold hidden md:inline">Title</span>
                        <Input placeholder="Report Title ..." className="w-full md:w-80 " />
                    </div>
                    <div className="flex justify-between  gap-3 my-2">
                        <span className="text-xs font-semibold hidden md:inline mt-2">
                            About
                        </span>
                        <TextArea placeholder="About report ..." className="w-full md:w-80 " rows={10} />
                    </div>
                    <div className="flex justify-between  gap-3 items-center my-2">
                        <span className="text-xs font-semibold hidden md:inline">Done By</span>
                        <Input placeholder="Full name ..." className="w-full md:w-80 " />
                    </div>
                    <div className="flex justify-start  gap-3 items-center my-2">
                        <span className="text-xs font-semibold hidden md:inline">Add File</span>
                        <FileInput />
                    </div>
                </div>
                <div className='flex justify-end items-center my-3'>
                    <Button className='p-2  bg-yellow-500' >Add Report</Button>
                    <Button className='p-2 text-white bg-black' onClick={() => closeAction()}>Cancel</Button>
                </div>
            </div>
        </form>
    )
}
