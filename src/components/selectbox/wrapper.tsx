import React, { SelectHTMLAttributes, FC } from 'react'

interface IPROPS extends SelectHTMLAttributes<HTMLSelectElement> { }
const Wrapper: FC<IPROPS> = ({ children, className, ...props }) => {
    return (
        <select {...props} className={`w-full text-xs p-2 border-gray-200 rounded-md border-2 outline-none  focus:outline-none  ${className}`}>
            {children}
        </select>
    )
}

export default Wrapper;