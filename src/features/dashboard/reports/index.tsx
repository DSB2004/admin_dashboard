import React, { lazy } from "react";
import { IoMdDownload } from "react-icons/io";
import Create from "./create";
import Button from "../../../components/button/simple_button";
import Table from "./table";

export default function Report() {
  return (
    <>
      {/* header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-medium text-lg md:text-xl">Reports</h1>
          <p className="text-xs md:text-sm">Here's list of all Reports</p>
        </div>

        <div className="flex items-center gap-2">

          <Create />
        </div>
      </div>
      {/* header */}

      {/* table */}
      <Table />
      {/* table */}
    </>
  );
}
