import React, { ButtonHTMLAttributes, Children, FC } from "react";

interface IPROPS extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IPROPS> = ({ className, children, ...props }) => {
  return (
    <>
      <button
        {...props}
        className={`text-xs  p-1 border-2 border-gray-100 rounded-lg m-1 flex  items-center gap-1 duration-200 transition-all ${className}`}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
