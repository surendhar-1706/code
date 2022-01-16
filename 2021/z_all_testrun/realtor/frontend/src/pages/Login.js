import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContextProvider from "../context/AuthContextProvider";
import { AuthContext } from "../context/AuthContextProvider";

function Login() {
  const history = useHistory();
  const { authstate, dispatch } = useContext(AuthContext);
  const [formdata, setformdata] = useState({ email: "", password: "" });
  const [buttonstate, setbuttonstate] = useState(false);
  useEffect(() => {
    console.log("use effect ran in login page");
    if (authstate.isAuthenticated) {
      history.push("/");
    }
  }, []);
  const handleLogout = () => {
    dispatch({
      type: "logout",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    const fetched_data = await fetch("http://localhost:8000/auth/jwt/create", {
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
    <div className=" center flex items-center py-40 min-h-screen">
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

        <div>
          {authstate.isAuthenticated ? "Authenticated" : "Not Authenticated"}
        </div>
      </form>
      <button
        className="border"
        onClick={handleLogout}
        className="block mt-2 bg-purple-300 p-2 rounded-md hover:bg-purple-400 hover:text-white"
      >
        Logout
      </button>
    </div>
  );
}

export default Login;

//what to do
//1.only allow authenticated requests
//2.Create private routes
//3.If authenticated don't allow user to go to login or signup page
//4.If not authenticated redirect to login page
