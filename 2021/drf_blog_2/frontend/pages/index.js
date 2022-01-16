import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex h-screen bg-yellow-100 justify-center items-center">
      <Head>
        <title>Home</title>
      </Head>
      <h1 className=" text-5xl animate-bounce ">Hello from homepage</h1>
    </div>
  );
}
