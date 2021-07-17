import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import Layouttwo from "../components/Layout/Layouttwo";
import Authcheck from "../components/authcheck";

function Home({ post }) {
  return (
    <Layouttwo>
      <div className="h-screen font-bold  bg-gray-100">
        <Link href="/post">Post</Link>
      </div>
    </Layouttwo>
  );
}
export default Authcheck(Home);
// export default Home;
