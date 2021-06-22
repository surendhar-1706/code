import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="p-4 bg-blue-300 flex justify-between items-center text-xl font-semibold ">
        <div>Realest Estate</div>
        <div className="flex justify-between space-x-4 ">
          <Link className="hover:text-gray-200" to="/login">
            Login
          </Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
      <div className="px-48 py-4 bg-green-400 text flex justify-between font-serif ">
        <Link className="hover:text-gray-200" to="/">
          Home
        </Link>
        <Link to="/listing">Listing</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}

export default Navbar;
