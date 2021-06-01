import axios from "axios";
const base_url = "http://127.0.0.1:8000/api/";

const axios_instance = axios.create({
  baseURL: base_url,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axios_instance