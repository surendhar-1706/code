import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [formdata, setformdata] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    console.log("value Changed");
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    const fetched_data = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formdata.email,
        password: formdata.password,
      }),
    });
    console.log("submited login form");
    const json_data = await fetched_data.json();
    console.log(json_data);
    localStorage.setItem("access_token", json_data.access);
    localStorage.setItem("refresh_token", json_data.refresh);
  };
  return (
    <div className="flex justify-center flex-wrap">
      <div className="w-full max-w-md  mt-32 bg-white ">
        <p className="font-bold text-center mb-8">Login Page</p>
        <hr />
        <div className="">
          <form className="py-16 pl-32 shadow-md mx-2">
            <label className="font-bold mt-2  block text-gray-800">Email</label>
            <input
              value={formdata.email}
              className="border mt-2 shadow"
              type="email"
              onChange={handleChange}
              name="email"
            />
            <label className="font-bold  mt-2  block text-gray-800">
              Password
            </label>
            <input
              value={formdata.password}
              className="border mt-2 shadow"
              type="password"
              onChange={handleChange}
              name="password"
            />

            <div className="mt-4 ml-12">
              <button
                className="rounded p-2 text-white font-bold bg-purple-500 hover:bg-purple-700"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
