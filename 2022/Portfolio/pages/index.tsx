import { Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainHome from '../components/MainHome'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Box>
      <MainHome />
    </Box>
  )
}

export default Home
