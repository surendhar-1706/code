import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ArticleForm() {
  const [formstate, setformstate] = useState({ title: "", content: "" });
  const history = useHistory();
  const handleChange = (e) => {
    console.log("value Changed");
    setformstate({
      ...formstate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("submit triggerd");
    e.preventDefault();
    const form_data = { formstate };
    console.log(form_data);
    console.log({ formstate });
    fetch("http://localhost:8000/api/article/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("access_token")
          ? "JWT " + localStorage.getItem("access_token")
          : null,
      },
      body: JSON.stringify({
        title: formstate.title,
        content: formstate.content,
      }),
    }).then(() => {
      setformstate({
        title: "",
        content: "",
      });
      history.push("/");
    });

    console.log("wow.post working");
  };
  return (
    <div className="">
      <form className="bg-white shadow-md rounded mt-6 mx-4 min-h-screen">
        <div className="pl-8 pt-32 pr-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <textarea
            rows="2"
            className="shadow border rounded bg-white w-full resize-none"
            value={formstate.title}
            onChange={handleChange}
            name="title"
          />
          <label className="block mt-2  text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            rows="10"
            className="shadow rounded mt-2   border resize-none bg-white w-full"
            type="text"
            value={formstate.content}
            name="content"
            onChange={handleChange}
          />
          <div className="flex justify-center items-center">
            <button
              className="mt-16 hover:bg-purple-700  text-white font-bold bg-purple-500 rounded p-2 "
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ArticleForm;
