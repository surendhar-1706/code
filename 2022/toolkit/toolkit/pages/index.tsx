import type { NextPage } from 'next'
import Head from 'next/head'
import MainComponent from '../components/Home'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainComponent />

    </div>
  )
}

export default Home
