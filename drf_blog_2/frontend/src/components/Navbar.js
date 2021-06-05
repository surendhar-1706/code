import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-red-300 py-2 flex justify-between items-center">
      <div>
        <Image
          className="pr-10 animate-spin"
          src="/pizza.png"
          width={50}
          height={50}
        />
      </div>

      <div className="px-4 space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
