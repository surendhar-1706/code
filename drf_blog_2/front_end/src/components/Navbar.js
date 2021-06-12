import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="flex font-mono py-2 bg-gray-800 pr-6  text-white justify-end items-center space-x-2">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
    </nav>
  );
}

export default Navbar;
