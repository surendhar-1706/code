import { Container, Grid, Paper, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RecipeReviewCard from '../components/card'
import ResponsiveAppBar from '../components/nav'
const Home: NextPage = () => {
  return (
    <Container >
      <ResponsiveAppBar />
      <Grid container spacing={2} >
        <Grid item lg={12} xs={4} md={6}  >
          <RecipeReviewCard />
        </Grid>
        <Grid item lg={12} xs={4} md={6} >
          <RecipeReviewCard />
        </Grid>
        <Grid item lg={12} xs={4} md={6}>
          <RecipeReviewCard />
        </Grid>
        <Grid item lg={12} xs={4} md={6}>
          <RecipeReviewCard />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
