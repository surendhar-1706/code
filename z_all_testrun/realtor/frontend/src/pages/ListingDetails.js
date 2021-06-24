import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ListingDetails() {
  const [state, setstate] = useState({ isloading: true, data: null });
  const { slug } = useParams();
  const wow = useEffect(async () => {
    const fetched_data = await fetch(
      `http://localhost:8000/api/base/listing/${slug}`
    );
    const json_data = await fetched_data.json();
    setstate({
      data: json_data,
      isloading: false,
    });
    console.log(state.data);
  }, []);
  return (
    <div>
      {state.isloading ? (
        "Loading"
      ) : (
        <div className="px-16 mt-8">
          {/* <div className=" text-3xl  shadow-sm ">
            {" "}
            <div>{state.data.state}</div>
            <div>{state.data.city}</div>
            <div> {state.data.zipcode}</div>
          </div> */}
          <div className=" flex justify-center bg-gray-200 p-4">
            {state.data.address}
          </div>
          <div className="md:grid grid-cols-3 gap-10 mb-10">
            <div className=" col-span-2">
              <img className=" w-full h-96" src={state.data.photo_main} />
            </div>
            <div className="relative">
              <div className=" ">
                <img
                  className="p-2 mb-2 w-full h-60"
                  src={state.data.photo_6}
                />
                <div className="text-green-600 font-medium">
                  <div className="text-xl  bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-blue-400 to-purple-800">
                    Kyile Simmings
                  </div>
                  <div>123-123-123</div>
                  <div>Kyile@gmail.com</div>
                </div>
                <div>Guy who sells houses</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 text-green-600 hover:text-green-400">
            <div>Price : {state.data.price}</div>
            <div>Sqft : {state.data.sqft}</div>
            <div>Bedrooms : {state.data.bedrooms}</div>
            <div>Bathrooms: {state.data.bathrooms}</div>
            <div> Home Type : {state.data.home_type}</div>
            <div>Sale Type : {state.data.sale_type}</div>
          </div>
          <div className=" my-8 text-transparent text-xl bg-clip-text bg-gradient-to-l from-red-600 to-yellow-400">
            {" "}
            {state.data.description}
          </div>
          <div className="md:grid mt-4 gap-10 grid-cols-4  ">
            <div className="mb-4">
              <img
                className="  w-full h-48  md:object-cover"
                src={state.data.photo_1}
              />
            </div>

            <div className="mb-4">
              <img
                className="w-full h-48 transition duration-500 ease-in-out transform hover:-translate-y-5 hover:scale-110 "
                src={state.data.photo_2}
              />
            </div>
            <div className="mb-4">
              <img
                className="w-full h-48 transition duration-500 ease-linear transform hover:-translate-y-5 hover:scale-110"
                src={state.data.photo_3}
              />
            </div>
            <div className="mb-4">
              <img className="w-full h-48" src={state.data.photo_4} />
            </div>
            <div className="mb-4">
              <img className="w-full h-48 " src={state.data.photo_5} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListingDetails;
