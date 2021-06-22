import React, { useEffect, useState } from "react";

function Home() {
  const [state, setdata] = useState({ isloading: true, data: null });
  const [pagination, setpagination] = useState({ next: null, previous: null });
  useEffect(async () => {
    const fetched_data = await fetch("http://localhost:8000/api/base/listing/");
    const json_data = await fetched_data.json();

    const wow = await setdata({
      data: json_data,
      isloading: false,
    });
    console.log(json_data);
    json_data.next
      ? setpagination({ ...pagination, next: json_data.next })
      : console.log("");
    json_data.previous
      ? setpagination({ ...pagination, previous: json_data.previous })
      : console.log("");
    // console.log(state.data.results);
  }, []);
  const handleClickNext = async (e) => {
    setdata({ ...state, isloading: true });
    const fetched_data = await fetch(pagination.next);
    const json_data = await fetched_data.json();
    // console.log("from next from button");
    // console.log(json_data);
    const wow = setdata({
      data: json_data,
      isloading: false,
    });
    setpagination({ next: json_data.next, previous: json_data.previous });
  };
  const handleClickPrevious = async (e) => {
    setdata({ ...state, isloading: true });
    // console.log("from previous from button");

    const fetched_data = await fetch(pagination.previous);
    const json_data = await fetched_data.json();
    const wow = setdata({
      data: json_data,
      isloading: false,
    });
    setpagination({ next: json_data.next, previous: json_data.previous });
  };

  return (
    <div className=" py-20 px-20">
      <div className="grid grid-cols-3 gap-10">
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
                  </div>
                </div>
              );
            })}
      </div>
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
          className="border p-2 bg-purple-300 hover:bg-purple-400 hover:text-white"
        >
          Next
        </button>
      ) : (
        console.log("")
      )}
    </div>
  );
}

export default Home;
