import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Cart from '../components/Cart'
import Details from '../components/Details'


function Home() {

  return (
    <Container maxW='container.xl' p='0'>
      <Flex height='100vh' py='10'>
        <Details />
        <Cart />
      </Flex>
    </Container >



  )
}

export default Home
