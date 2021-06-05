import Head from "next/head";
import Image from "next/image";
import React from "react";

function about() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="flex justify-center h-screen items-center bg-green-200">
        <p className=" text-7xl animate-bounce"> About Page</p>
      </div>
    </>
  );
}

export default about;
