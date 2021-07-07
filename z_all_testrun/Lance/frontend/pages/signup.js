import React from "react";
import GoogleIcon from "../public/google-icon.png";
import Image from "next/image";
import authredirect from "../components/authredirect";
import Layout from "../components/Layout";

function signup() {
  const Continuewithgoogle = async (e) => {
    try {
      const fetched_data = await fetch(
        "http://localhost:8000/auth/o/google-oauth2/?redirect_uri=http://localhost:3000/google"
      );
      const json_data = await fetched_data.json();

      console.log(json_data.authorization_url);
      window.location.replace(json_data.authorization_url);
    } catch (err) {
      console.log("from error in loginemail.js", err);
    }
  };
  return (
    <Layout>
      <div className="flex justify-center py-40 text-center">
        <div className="px-20  pt-10 pb-20 border">
          <div className="font-semibold text-3xl my-1">
            Get your free account
          </div>
          <div className="md:my-4">
            <button
              onClick={Continuewithgoogle}
              className="mt-2 flex items-center w-full  gap-3  text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              <Image
                className="rounded-full overflow-hidden  "
                src={GoogleIcon}
                height={30}
                width={30}
              />

              <div className="md:px-20">
                <div>Continue with Google</div>
              </div>
            </button>
          </div>
          <div className="my-2 text-gray-500">or</div>
          <div className="flex border hover:border-green-500 focus:border-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 m-1 text-gray-500"
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
              className="ml-2 boder-none focus:outline-none w-full"
              placeholder=" Work email address"
              name="email"
              type="email"
            />
          </div>
          <button
            type="submit"
            className="mt-8 block text-white p-1 md:px-32 w-full bg-green-500 rounded-full hover:bg-green-600"
          >
            Continue with Email
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default authredirect(signup);
