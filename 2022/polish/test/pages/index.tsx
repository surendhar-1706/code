import { Box, Text } from '@chakra-ui/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Box h='100vh'>

      <Header />
    </Box>


  )
}

export default Home
