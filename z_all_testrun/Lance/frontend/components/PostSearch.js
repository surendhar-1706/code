import React from "react";
import { BiSearch } from "react-icons/bi";
function PostSearch() {
  return (
    <div className="">
      <div className="md:grid grid-cols-6">
        <div className="font-semibold text-2xl">Find Work</div>
        <div className="col-span-4 ">
          {" "}
          <div className="flex items-center">
            <textarea
              // rows={1}
              value={""}
              className="w-full h-10 pl-5 resize-none  rounded-sm p-1 outline-none focus:border-green-600 border boder-gray-300 "
              placeholder="Search for jobs"
            >
              {" "}
            </textarea>
            <BiSearch className="bg-green-600 text-white h-10 w-9 px-1.5" />
          </div>
          <div className="text-md p-1 pt-2 font-semibold hover:underline text-green-600">
            Advanced Search
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSearch;
