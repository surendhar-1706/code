import React from "react";
import { Link } from "react-router-dom";
function Navbar({ children }) {
  return (
    <>
      <nav>
        <div className="bg-gray-800 text-white text-mono text-xl py-2 flex justify-between">
          <div>
            <h1>Logo</h1>
          </div>
          <div className="pr-2">
            <Link to="/">Home</Link>
            <Link className="pl-2" to="/create">
              New Blog
            </Link>
          </div>
        </div>
      </nav>
      <div className="min-h-screen">{children}</div>

      <footer className="w-full mt-16 bg-gray-200 text-gray-800 py-1 flex justify-center">
        <h1> This is our footer</h1>
      </footer>
    </>
  );
}

export default Navbar;
