import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import withAuth from "../components/authcheck";
import Link from "next/link";
import Layouttwo from "../Layout/Layouttwo";
function Home() {
  return (
    <div>
      <Layouttwo>
        <p>Home Page</p>
      </Layouttwo>
    </div>
  );
}
export default withAuth(Home);
// export default Home
