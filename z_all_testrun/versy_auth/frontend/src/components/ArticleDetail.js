import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";

function ArticleDetail() {
  const [state, setstate] = useState({ loading: true, data: null });
  const { id } = useParams();

  const history = useHistory();
  const handleChange = (e) => {
    console.log("value Changed");
    setstate({
      ...state,
      data: { [e.target.name]: e.target.value },
    });
  };
  const handleDelete = () => {
    fetch(`http://localhost:8000/api/article/${id}/`, {
      method: "DELETE",
    });
    history.push("/");
  };
  const handleSubmit = async (e) => {
    console.log("submit triggerd");
    e.preventDefault();

    fetch(`http://localhost:8000/api/article/${id}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: state.data.title,
        content: state.data.content,
      }),
    }).then(() => {
      console.log(state.data.title);
      history.push("/");
    });

    console.log("wow.post working");
  };
  useEffect(async () => {
    console.log("heoo");
    const fetched_data = await fetch("http://localhost:8000/api/article/" + id);
    const json_data = await fetched_data.json();
    setstate({ loading: false, data: json_data });
  }, [id]);
  return (
    <div className="mx-8 rounded shadow-md bg-white px-16 mt-16">
      {state.loading ? (
        "loading"
      ) : (
        <div>
          <p className="text-xl text-center">{state.data.title}</p>
          <p className="mt-4 pb-4">{state.data.content}</p>
          <form className="bg-white  rounded mt-6  min-h-screen">
            <div className="pl-8 pt-32 pr-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <textarea
                rows="2"
                className="shadow border rounded bg-white w-full resize-none"
                value={state.data.title}
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
                value={state.data.content}
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
                <button
                  className="mt-16 ml-16 hover:bg-purple-700  text-white font-bold bg-purple-500 rounded p-2 "
                  type="submit"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ArticleDetail;
