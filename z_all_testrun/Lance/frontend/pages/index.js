import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import withAuth from "../components/authcheck";
function Home() {
  return (
    <div>
      <p className="text-red-600">Home</p>
    </div>
  );
}
export default withAuth(Home);
