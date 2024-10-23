import { Outlet } from "react-router-dom";
import Header from "../features/dashboard/header";
import Navbar from "../features/dashboard/navbar";
import MenuProvider from "../context/useMenu";
export default function Dashboard() {
  return (
    <MenuProvider>
      <div className=" bg-gray-100 flex w-full">
        <Navbar></Navbar>
        <div className="flex flex-col w-full h-screen">
          <Header></Header>
          <div className="overflow-y-auto">
            <div className="m-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </MenuProvider>
  );
}
