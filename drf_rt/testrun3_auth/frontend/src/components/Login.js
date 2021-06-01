import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios_instance from "../axios";
const Login = () => {
  const history = useHistory();
  const [form_data, set_form_data] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    set_form_data({
      ...form_data,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form_data);

    axios_instance
      .post(`token/`, {
        email: form_data.email,
        password: form_data.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axios_instance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
        history.push("/");
        console.log(res);
        console.log(res.data);
      });
  };
  return (
    <div>
      From Login page
      <form>
        Email
        <input
          type="text"
          name="email"
          value={form_data.email}
          label="Email Address"
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        Password
        <input
          type="password"
          name="password"
          value={form_data.password}
          label="Password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
