import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Hi from '../components/hi'
import HomeBackground from '../components/home/HomeBackground'
const Home: NextPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HomeBackground />


    </div>
  )
}

export default Home
