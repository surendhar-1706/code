import React from "react";
import Link from "next/link";
function Navbartwo() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">signup</Link>
      <hr></hr>
    </div>
  );
}

export default Navbartwo;
