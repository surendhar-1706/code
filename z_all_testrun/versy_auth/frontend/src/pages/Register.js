import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Register() {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    fetch("http://localhost:8000/api/user/create/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_name: formdata.username,
        email: formdata.email,
        password: formdata.password,
      }),
    }).then(() => {
      console.log("submited");
      history.push("/login");
    });
  };
  return (
    <div className="flex justify-center flex-wrap">
      <div className="w-full max-w-md  mt-32 bg-white ">
        <p className="font-bold text-center mb-8">From register Page</p>
        <hr />
        <div className="">
          <form className="py-16 pl-32 shadow-md mx-2">
            <label className=" font-bold  mt-2  block text-gray-800">
              UserName
            </label>
            <input
              value={formdata.username}
              className="border mt-2 shadow"
              type="text"
              onChange={handleChange}
              name="username"
            />
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

export default Register;
