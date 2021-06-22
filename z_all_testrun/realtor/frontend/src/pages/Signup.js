import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";

function Signup() {
  const { authstate } = useContext(AuthContext);
  const [formdata, setformdata] = useState({
    email: "",
    name: "",
    password: "",
    password2: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
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
  };
  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className=" center flex items-center py-40">
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
      {authstate.isAuthenticated ? "Authenticated" : "Not Authenticated"}
    </div>
  );
}

export default Signup;
