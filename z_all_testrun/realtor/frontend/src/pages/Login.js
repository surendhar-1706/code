import React, { useContext, useState } from "react";
import AuthContextProvider from "../context/AuthContextProvider";
import { AuthContext } from "../context/AuthContextProvider";

function Login() {
  const { authstate, dispatch } = useContext(AuthContext);
  const [formdata, setformdata] = useState({ email: "", password: "" });
  const [buttonstate, setbuttonstate] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    const fetched_data = await fetch("http://localhost:8000/api/token/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formdata.email,
        password: formdata.password,
      }),
    });
    const json_data = await fetched_data.json();
    console.log(json_data);
    dispatch({
      type: "login_success",
      payload: { json_data },
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
        <label className="block">Password</label>
        <input
          name="password"
          className="border block"
          onChange={handleChange}
          value={formdata.password}
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

export default Login;
