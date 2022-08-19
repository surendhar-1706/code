import { Box } from '@mui/system'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Exercises from '../components/Home/Exercises'
import HeroBanner from '../components/Home/HeroBanner'
import SearchExercise from '../components/Home/SearchExercise'



const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Gold Fit</title>
        <meta name="description" content="Fitness app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{
      }}>
        <HeroBanner />
        <SearchExercise />

      </Box>



    </div>
  )
}

export default Home
