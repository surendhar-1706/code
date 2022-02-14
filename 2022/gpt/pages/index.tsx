import { Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainIndex from '../components/MainIndex'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Box

    ><MainIndex />
    </Box>
  )
}
export default Home
