import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import withAuth from "../components/authcheck";
import Link from "next/link";
function Home() {
  return (
    <div>
      <p className="text-red-600">Home</p>
      <Link href="/login">Login</Link>
    </div>
  );
}
export default withAuth(Home);
// export default Home
