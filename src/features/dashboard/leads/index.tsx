import React, { lazy } from "react";
import { IoMdDownload } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import Button from "../../../components/button/simple_button";
import Table from "./table";

export default function Leads() {
  return (
    <>
      {/* header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-medium text-lg md:text-xl">Leads</h1>
          <p className="text-xs md:text-sm">Here's list of all Leads</p>
        </div>

        <div className="flex items-center gap-2">
          <Button className="bg-green-700 text-white">
            <IoMdDownload className="w-5 h-5" />
            <span className="hidden md:inline">Download CSV</span>
          </Button>
          <Button className="bg-yellow-500 ">
            <IoMdAdd className="w-5 h-5" />
            <span className="hidden md:inline">Add Leads</span>
          </Button>
        </div>
      </div>
      {/* header */}

      {/* table */}
      <Table />
      {/* table */}
    </>
  );
}
