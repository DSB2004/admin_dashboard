import React from "react";
import UserImage from "../../assets/user.png";
import { FaAngleDown } from "react-icons/fa";
export default function User() {
  return (
    <button className="  hover:bg-gray-50 flex items-center gap-2 mx-1 focus:bg-gray-100 rounded-md transition-all duration-300 p-1 w-16 md:w-32">
      <img
        src={UserImage}
        alt=""
        loading="lazy"
        className="w-8 h-8 rounded-full"
      />
      <div className="text-sm whitespace-nowrap hidden md:block">Jane Doe</div>
      <FaAngleDown className="w-4 h-4" />
    </button>
  );
}
