import { Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainIndex from '../components/MainIndex'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Box

    >
      <Head>
        <title>GPT</title>
        {/* <link rel="shortcut icon" href="/static/logo.png" /> */}
        <link rel="icon" type="image/png" sizes="32x32" href="/Header Illustration.png" />
      </Head>

      <MainIndex />
    </Box>
  )
}
export default Home
