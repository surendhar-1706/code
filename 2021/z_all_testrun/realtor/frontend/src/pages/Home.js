import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
function Home() {
  const { authstate, dispatch } = useContext(AuthContext);
  const history = useHistory();
  const [state, setdata] = useState({ isloading: true, data: null });
  const [pagination, setpagination] = useState({ next: null, previous: null });
  const handleclickview = () => {
    console.log("clicked handle click");
  };
  useEffect(async () => {
    const ac_token = localStorage.getItem("access_token");
    console.log("from home page printing ac_token  ", ac_token);
    try {
      async function tester() {
        const fetched_data = await fetch(
          "http://localhost:8000/auth/jwt/verify",
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              token: ac_token,
            }),
          }
        );
        const json_data = await fetched_data.json();
        console.log("printing json_code");
        return json_data.code;
        console.log(json_data.code);
      }
      const wow = await tester();
      console.log("wow received from variable", wow);
      if (wow != "token_not_valid") {
        console.log("ac token checked");
        dispatch({
          type: "authenticated",
        });
      }
      if (authstate.isAuthenticated) {
        const fetched_data = await fetch(
          "http://localhost:8000/api/base/listing/",
          {
            method: "get",
            headers: {
              Authorization: localStorage.getItem("access_token")
                ? "JWT " + localStorage.getItem("access_token")
                : null,
            },
          }
        );

        const json_data = await fetched_data.json();

        const wow = await setdata({
          data: json_data,
        });

        json_data.next
          ? setpagination({ ...pagination, next: json_data.next })
          : console.log("");
        json_data.previous
          ? setpagination({ ...pagination, previous: json_data.previous })
          : console.log("");
      } else {
        history.push("/login");
      }
    } catch (err) {
      history.push("/login");
    }

    // console.log(state.data.results);
  }, []);
  const handleClickNext = async (e) => {
    setdata({ ...state, isloading: true });
    const fetched_data = await fetch(pagination.next, {
      headers: {
        Authorization: localStorage.getItem("access_token")
          ? "JWT " + localStorage.getItem("access_token")
          : null,
      },
    });
    const json_data = await fetched_data.json();
    // console.log("from next from button");
    // console.log(json_data);
    const wow = await setdata({
      data: json_data,
      isloading: false,
    });
    setpagination({ next: json_data.next, previous: json_data.previous });
  };
  const handleClickPrevious = async (e) => {
    setdata({ ...state, isloading: true });
    // console.log("from previous from button");

    const fetched_data = await fetch(pagination.previous, {
      headers: {
        Authorization: localStorage.getItem("access_token")
          ? "JWT " + localStorage.getItem("access_token")
          : null,
      },
    });
    const json_data = await fetched_data.json();
    const wow = setdata({
      data: json_data,
      isloading: false,
    });
    setpagination({ next: json_data.next, previous: json_data.previous });
  };

  return (
    <div className=" py-20 px-20">
      <div className="md:grid grid-cols-3 gap-10">
        {state.isloading
          ? "Loading "
          : state.data.results.map((d) => {
              return (
                <div className="bg-white shadow-md rounded-md" key={d.slug}>
                  <div className="mt-2">
                    <div className="font-semibold text-xl p-2 mb-2 text-green-500 text-center">
                      {d.title}
                    </div>
                    <img
                      className="w-full h-48 object-cover overflow-hidden"
                      src={d.photo_main}
                    />

                    <div className="p-2 font-light text-gray-700">
                      {d.address}
                    </div>
                    <div className="pt-2 grid grid-cols-2 text-green-600 font-semibold overflow-hidden">
                      <div className="p-2"> Price : {d.price}</div>
                      <div className="p-2"> Bedrooms : {d.bedrooms}</div>
                      <div className="p-2">Sqft : {d.sqft}</div>
                      <div className="p-2">Bathrooms : {d.bathrooms}</div>
                      <div className="p-2">{d.sale_type}</div>
                      <div className="p-2">{d.home_type}</div>
                    </div>
                    <div className="flex justify-center my-2">
                      <Link to={`/listing/${d.slug}`}>
                        <button
                          onClick={handleclickview}
                          className="bg-purple-300 p-1 px-4 border rounded hover:text-white hover:bg-purple-400"
                        >
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="flex justify-center my-8 space-x-3">
        {pagination.previous ? (
          <button
            onClick={handleClickPrevious}
            className="border p-2 bg-purple-300 hover:bg-purple-400 hover:text-white"
          >
            Previous
          </button>
        ) : (
          console.log("")
        )}
        {pagination.next ? (
          <button
            onClick={handleClickNext}
            className="border  p-2  bg-purple-300 hover:bg-purple-400 hover:text-white"
          >
            Next
          </button>
        ) : (
          console.log("")
        )}
      </div>
    </div>
  );
}

export default Home;
