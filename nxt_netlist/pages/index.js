import Head from 'next/head'
import Link from 'next/link';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Welcome To the blog</p>
       <p className={styles.text}>Welcome To the blog</p>
       <Link href="/ninjas"><a className={styles.btn}> See Ninja Listing</a></Link>
      
      </div>
  );
}
