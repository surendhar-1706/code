import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
function PostProfile() {
  return (
    <div>
      <div>
        <span className="rounded-full p-2 bg-red-200 border">wtw</span>
        <span className="font-semibold">My Profile</span>
      </div>
      <div className="flex items-center">
        <IoEyeSharp className="text-upworkgreen-light" />
        <span className="text-upworkgreen-light hover:underline hover:text-upworkgreen-dark">
          View Profile
        </span>
      </div>
      <div>
        <span className="font-semibold">Visibiltiy</span>
        <span className="flex items-center gap-x-1">
          <div className="flex items-start gap-x-2">
            <TiContacts size={22} className="overflow-hidden "></TiContacts>
            <div className="text-sm font-thin break-words">
              Upwork Users Only
            </div>
          </div>
          <div className="bg-white hover:bg-gray-50 hover:text-gray-600 rounded-full p-2">
            <MdModeEdit />
          </div>
        </span>
      </div>
      <div>
        <span className="font-bold">Hours</span>
        <div className="flex items-center gap-x-1">
          <BsClockHistory size={22} />
          <div className="text-sm font-thin break-words">
            As Needed - Open to Offers
          </div>{" "}
          <div className="bg-white hover:bg-gray-50 hover:text-gray-600 rounded-full p-2">
            <MdModeEdit></MdModeEdit>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostProfile;
