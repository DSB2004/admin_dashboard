import React from "react";
import { IoSearchOutline } from "react-icons/io5";
export default function Search() {
  return (
    <>
      <div className="flex mx-3 gap-2 justify-center align-middle w-full">
        <IoSearchOutline className="w-6 h-6" />
        <input
          type="text"
          placeholder="Search here...."
          className="bg-transparent w-full outline-none focus:outline border-none placeholder:text-black text-sm"
        />
      </div>
    </>
  );
}
