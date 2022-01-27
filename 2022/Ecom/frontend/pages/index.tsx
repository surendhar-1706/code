import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Hi from '../components/hi'
const Home: NextPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Layout childcomponent={<Hi />} />


    </div>
  )
}

export default Home
