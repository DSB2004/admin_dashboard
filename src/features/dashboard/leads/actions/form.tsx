
import UserImg from "../../../../assets/user.png";
import { BsLink45Deg } from "react-icons/bs";
import BorderButton from "../../../../components/button/border_button";
import Input from "../../../../components/input/border_input";
import { MdDelete } from "react-icons/md";
import FileInput from "../../../../components/input/image_input";



export default function Form({ closeAction }: { closeAction: Function }) {
  return (
    <>
      <form action="" className="m-0 w-full">
        <div className="bg-gray-200 relative h-16 w-full">
          <img
            src={UserImg}
            alt=""
            className="h-20 w-20 border-2 border-white rounded-full absolute top-6 left-6"
          />
        </div>

        <div className="flex justify-end items-center gap-2 mx-2">
          <BorderButton type="button" className="border-gray-200">
            <BsLink45Deg className="w-3 h-3" />
            Copy Link
          </BorderButton>

          <BorderButton type="button" className="border-gray-200">View Profile</BorderButton>
        </div>

        <div className="m-2 ml-6">
          <h1 className="text-xl font-bold">Jane Doe</h1>
          <h3 className="text-xs text-gray-400">janedoe@example.com</h3>
        </div>

        <div className="flex flex-col m-4 mt-8">
          <div className="flex justify-between  gap-3 items-center my-2">
            <span className="text-xs font-semibold hidden md:inline">Name</span>
            <Input placeholder="Full name ..." className="w-full md:w-80 " />
          </div>
          <div className="flex justify-between  gap-3 items-center my-2">
            <span className="text-xs font-semibold hidden md:inline">
              Email
            </span>
            <Input placeholder="Email address ..." className="w-full md:w-80 " />
          </div>
          <div className="flex justify-between  gap-3 items-center my-2">
            <span className="text-xs font-semibold hidden md:inline">
              Phone
            </span>
            <Input placeholder="Phone no ..." className="w-full md:w-80 " />
          </div>
          <div className="flex justify-between  gap-3 items-center my-2">
            <span className="text-xs font-semibold hidden md:inline">
              Company
            </span>
            <Input placeholder="Company name ..." className="w-full md:w-80 " />
          </div>

          <div className="flex justify-start  gap-3 items-center my-2">
            <span className="text-xs font-semibold hidden md:inline">
              Profile Photo
            </span>
            {/*  */}
            <FileInput defaultVal={UserImg} />
          </div>
        </div>

        <div className="mx-4 my-2 flex items-center justify-between">
          <BorderButton type="button" className="border-red-500 text-red-500 p-2" >
            <MdDelete className="w-4 h-4" />
            Delete User
          </BorderButton>

          <div className="flex items-center gap-1">
            <BorderButton type="button" className="bg-black text-white p-2">
              Save Changes
            </BorderButton>
            <BorderButton type="button" className="border-black p-2 " onClick={() => closeAction()}>

              Cancel

            </BorderButton>
          </div>
        </div >




      </form >
    </>
  );
}
