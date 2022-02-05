import { Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainHome from '../components/Home/MainHome'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Instagram</title>
      </Head>
      <Layout childcomponent={<MainHome />} />
    </div>
  )
}

export default Home
