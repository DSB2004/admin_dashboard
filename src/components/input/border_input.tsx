import { FC, InputHTMLAttributes } from "react";

interface IPROPS extends InputHTMLAttributes<HTMLInputElement> {}
const Input: FC<IPROPS> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`w-full text-sm p-1.5 border-gray-200 rounded-lg border-2 outline-none focus:outline-none ${className}`}
    />
  );
};
export default Input;
