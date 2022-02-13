import { Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainIndex from '../components/MainIndex'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Box
      bgGradient='linear(to-r, #01254A, #021932, #040D19)'

    >
      <MainIndex />


    </Box>
  )
}

export default Home
