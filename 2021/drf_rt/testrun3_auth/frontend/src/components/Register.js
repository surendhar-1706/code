import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios_instance from "../axios";
const Register = () => {
  const history = useHistory();
  const [form_data, set_form_data] = useState({
    email: "",
    username: "",
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
      .post(`create/`, {
        email: form_data.email,
        user_name: form_data.username,
        password: form_data.password,
      })
      .then((res) => {
        history.push("/login");
        console.log(res);
        console.log(res.data);
      });
  };
  return (
    <div>
      From Register page
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
        Username
        <input
          type="text"
          name="username"
          value={form_data.username}
          label="Username"
          onChange={handleChange}
        />
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

export default Register;
