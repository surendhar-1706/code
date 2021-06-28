import React from "react";
import Image from "next/image";
import GoogleIcon from "../public/google-icon.png";
function login() {
  return (
    <div className="">
      <nav className="p-4 text-green-500 relative font-bold text-xl pl-36">
        <p className=" ">upwork</p>
      </nav>
      <hr className="mt-2"></hr>
      <div className="flex justify-center pt-40  pb-20">
        <div className=" border rounded px-10 py-5 ">
          <div className="text-center font-semibold text-2xl mb-4">
            Login to Upwork
          </div>
          <div className="flex border hover:border-green-500 focus:border-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>

            <input
              className="ml-2 boder-none focus:outline-none px-4"
              placeholder="Username or Email"
            />
          </div>
          <button className="mt-8 block text-white px-16 py-1 bg-green-500 rounded-full hover:bg-green-600">
            Continue with Email
          </button>
          <p className="text-center p-2">or</p>
          <div>
            <button className="mt-2 flex items-center  gap-3 w-full text-white bg-blue-500 rounded-full hover:bg-blue-600">
              <Image
                className="rounded-full overflow-hidden  "
                src={GoogleIcon}
                height={30}
                width={30}
              />
              <span className="pl-4">Continue with Google</span>
            </button>
          </div>
          <hr className="my-8"></hr>
          <div className="mt-8 text-center">
            <button className="rounded-full border  border-green-500 hover:bg-green-50  px-16 py-1">
              Signup
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800  text-white text-center ">
        <div className=" pt-4 mb-2">© 2015 - 2021 Upwork® Global Inc.</div>
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
        <div> Accessibility</div>
      </footer>
    </div>
  );
}

export default login;
