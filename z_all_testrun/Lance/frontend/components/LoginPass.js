import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
function LoginPass({ userdata, setuserdata, handleChange }) {
  const router = useRouter();
  const { authstate, dispatch } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userdata);
    try {
      const fetched_data = await fetch(
        "http://localhost:8000/auth/jwt/create",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userdata.email,
            password: userdata.password,
          }),
        }
      );
      const json_data = await fetched_data.json();
      console.log(json_data);
      dispatch({
        type: "login_success",
        payload: { json_data },
      });
      router.push("/");
    } catch (err) {
      dispatch({
        type: "login_fail",
      });
    }
  };
  return (
    <div>
      <nav className="p-4 text-green-500 relative font-bold text-xl pl-36">
        <p className=" ">upwork</p>
      </nav>
      <hr className="mt-2"></hr>
      <div className="flex justify-center pt-40  pb-20">
        <div className=" border rounded px-20  pt-10 pb-20 ">
          <div className="font-semibold text-2xl text-center">Welcome</div>
          <div className="text-center py-4 text-sm">{userdata.email}</div>
          <div className="flex border hover:border-green-500 focus:border-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5  m-1 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="ml-2   boder-none focus:outline-none w-full"
              placeholder="Password"
              name="password"
              type="password"
              value={userdata.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex mt-6 items-center  space-x-4 text-sm">
            <div className=" flex space-x-2 items-center">
              <input type="checkbox" />
              <div>Keep me logged in</div>
            </div>
            <div className="text-green-600">Forgot Password?</div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-8 block  text-white px-16 py-1 bg-green-500 rounded-full hover:bg-green-600"
            >
              Login
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

export default LoginPass;
