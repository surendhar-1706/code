import { useQuery } from "@tanstack/react-query";
import React from "react";
import { genres } from "../assets/constants";
import { getTopCharts } from "../plugins/Queries";
function Discover() {
  console.log(genres);
  const { data } = useQuery(["topcharts"], getTopCharts);
  return (
    <div>
      <select className="outline-none">
        {genres.map((item) => {
          return <option key={item.value}>{item.title}</option>;
        })}
      </select>
      <div></div>
    </div>
  );
}

export default Discover;
