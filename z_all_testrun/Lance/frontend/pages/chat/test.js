import React, { useEffect } from "react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
// const fetcher = async () =>
//   await fetch({
//     method: "GET",
//     headers: {
//       Authorization: "JWT " + localStorage.getItem("access_token"),
//       "Content-Type": "application/json",
//       accept: "application/json",
//     },
//   }).then((response) => response.json());
// const { data, error } = useSWR("http://localhost:8000/api/post/data", fetcher);
// console.log(data);

function test() {
  useEffect(async () => {
    // const cool = await fetch("http://localhost:8000/accounts/profile_data", {
    //   headers: {
    //     Authorization: "JWT " + localStorage.getItem("access_token"),
    //     "Content-Type": "application/json",
    //     accept: "application/json",
    //   },
    // });
    // const json_data = await cool.json();
    // console.log(json_data);
    const { data, error } = useSWR(
      "http://localhost:8000/api/post/data",
      fetcher
    );
  });
  return <div>testpage</div>;
}

export default test;
