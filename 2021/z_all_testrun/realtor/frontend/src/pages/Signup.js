import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import TransitionAlerts from "../components/Alert";
function Signup() {
  const { authstate } = useContext(AuthContext);
  const [alertstate, setalertstate] = useState(false);
  const [formdata, setformdata] = useState({
    email: "",
    name: "",
    password: "",
    password2: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    if (formdata.password === formdata.password2) {
      fetch("http://localhost:8000/api/accounts/signup/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formdata.email,
          name: formdata.name,
          password: formdata.password,
          password2: formdata.password2,
        }),
      });
      setalertstate(false);
    } else {
      setalertstate(true);
    }
  };
  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="  py-40">
      <form>
        <label className="block">Email</label>
        <input
          name="email"
          className="border block"
          value={formdata.email}
          onChange={handleChange}
        />
        <label className="block">Name</label>
        <input
          name="name"
          className="border block"
          value={formdata.name}
          onChange={handleChange}
        />
        <label className="block">Password</label>
        <input
          name="password"
          className="border block"
          onChange={handleChange}
          value={formdata.password}
        />
        <label className="block">Re-Enter Password</label>
        <input
          name="password2"
          className="border block"
          onChange={handleChange}
          value={formdata.password2}
        />
        <button
          className="border"
          type="submit"
          onClick={handleSubmit}
          className="block mt-2 bg-purple-300 p-2 rounded-md hover:bg-purple-400 hover:text-white"
        >
          Submit
        </button>
      </form>
      <div className="block">
        {" "}
        {authstate.isAuthenticated ? "Authenticated" : "Not Authenticated"}
      </div>
      {alertstate && (
        <div className="border transition duration-500  border-red-400  rounded p-2 relative w-60 flex items-center justify-between">
          <span role="alert" className="text-red-500">
            Password Not matching
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-400 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            role="button"
            onClick={() => {
              console.log("button svg clicked");
              setalertstate(false);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default Signup;
