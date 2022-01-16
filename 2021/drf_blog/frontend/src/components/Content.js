import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ImageOne from "../images/egg.jpg";
import Imagetwo from "../images/egg-2.jpg";

const Content = () => {
  return (
    <div className="">
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h1 className="text-3xl mb-2">Egg muffins</h1>
          <p className="mb-2 ">Crispy,delicious and nutritious</p>
          <span>16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={Imagetwo} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h1 className="text-3xl mb-2">Egg muffins</h1>
          <p className="mb-2 ">Crispy,delicious and nutritious</p>
          <span>16</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
