import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthProvoider, { AuthContext } from "../context/AuthProvoider";

function Login() {
  const { dispatch, authstate } = useContext(AuthContext);
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const onChange = (e) => {
    return setstate({ 
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
    const form_data = { email, password };

    try {
      const fetched_data = await fetch(
        "http://localhost:8000/auth/jwt/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form_data),
        }
      );

      console.log("OnSubmit ran");
      const json_data = await fetched_data.json();
      console.log(json_data);
      dispatch({
        type: "login_success",
        payload: { data: json_data },
      });
    } catch (err) {
      // dispatch({
      //   type: "login_failed",
      //   payload: { access: null, refresh: null },
      // });
      console.log(err);
    }

    setstate({
      email: "",
      password: "",
    });
    return e.preventDefault();
  };
  return (
    <div>
      <p>From Login Page</p>
      <form
        onSubmit={(e) => {
          return onSubmit(e);
        }}
      >
        <p>Enter your Email</p>
        <input
          value={state.email}
          name="email"
          onChange={(e) => {
            return onChange(e);
          }}
        />
        <p> Enter the password</p>
        <input
          value={state.password}
          name="password"
          onChange={(e) => {
            return onChange(e);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
