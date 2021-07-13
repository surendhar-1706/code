import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import withAuth from "../components/authcheck";
import Link from "next/link";
import Layouttwo from "../components/Layout/Layouttwo";
function Home() {
  return (
    <Layouttwo>
      <div className="h-screen py-80  font-bold text-6xl ">
        <p className="animate-bounce px-40">Home Page</p>
      </div>
    </Layouttwo>
  );
}
// export default withAuth(Home);
export default Home;
