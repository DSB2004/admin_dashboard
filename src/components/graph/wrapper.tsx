import { ReactNode } from 'react'
import { MdDelete } from "react-icons/md"
import Update from './update';
import { useWidget } from '../../context/useWidget';
import { WidgetType } from '../../types';
const Wrapper = ({ children, content }: { children: ReactNode, content: WidgetType }) => {
    const { removeWidget, updateWidget } = useWidget()
    return (
        <div className='bg-white rounded-lg w-full h-96 flex justify-center items-center flex-col'>
            <div className='flex justify-between items-center w-full p-3  '>
                <h1 className='text-base font-semibold'> {content.title}</h1>

                <div className='flex items-center gap-1'>
                    <Update element={content}></Update>
                    <MdDelete className='w-6 h-6 fill-red-500' onClick={() => removeWidget(content.key)} />
                </div>
            </div>
            <div className='m-5 h-full w-full mx-auto '>
                {children}
            </div>
        </div>
    )
}



export default Wrapper;
