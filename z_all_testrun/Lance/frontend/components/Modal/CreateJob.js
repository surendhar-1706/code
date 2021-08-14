import React, { useContext, useEffect } from "react";
import Link from "next/link";

function CreateJob() {
  return (
    <div className="fixed bg-red-400 p-1 pb-40 pr-20">
      <div className=" bg-white  text-gray-900   m-2  ">
        <div className="flex  flex-between gap-x-5">
          <button className="border  hover:bg-upworkgreen-light hover:text-white font-semibold">
            Online
          </button>
          <button className="border  hover:bg-upworkgreen-light hover:text-white font-semibold">
            Invisible
          </button>
        </div>

        <div className="hover:bg-gray-200 ">
          <span className="block ">Surendhar Palanisamy</span>
          <span className="text-xs">Freelancer</span>
        </div>
        <div className="hover:bg-gray-200 ">
          <span className="block">Surendhar Palanisamy</span>
          <span>
            <Link href="/post/create">
              <a className="text-gray-900 text-xs">Client</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CreateJob;
