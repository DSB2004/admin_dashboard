import React from "react";
import { LuMenu } from "react-icons/lu";
import { useMenu } from "../../context/useMenu";
export default function Menu() {
  const { toggleMenu, isOpen } = useMenu();
  return (
    <button
      className={` hover:bg-gray-50 rounded-md transition-all duration-300 p-1 ${
        isOpen ? "bg-gray-100" : ""
      }`}
      onClick={() => toggleMenu((prev) => !prev)}
    >
      <LuMenu className="w-6 h-6" />
    </button>
  );
}
