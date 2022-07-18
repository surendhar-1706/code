import { Box, Flex, Grid, GridItem, HStack, Stack } from '@chakra-ui/react'
import React from 'react'

import Footer from './Footer'
import Navbar from './Navbar'
type Layouttype = {
    childcomponent?: React.ReactNode
}
function Layout(props: Layouttype) {
    return (<Grid
        h={'100vh'}
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(5, 1fr)'
    >
        <GridItem

            rowSpan={1}
            colSpan={1}
            bgColor='blue.900'

        >

            <Navbar />



        </GridItem>
        <GridItem rowSpan={1} colSpan={4} overflowY='auto'  > {props.childcomponent}</GridItem>

        {/* <GridItem rowSpan={1} colSpan={5}><Footer /></GridItem> */}

    </Grid>







    )
}

export default Layout


{/* <Flex
            w={'100vw'}
            h={'100vh'}
            flexDir={'row'}
            justifyItems='flex-start'
        >


            <Box h={'full'} >
                <Navbar />
            </Box>
            <Box w={'full'}>
                {props.childcomponent}
                <Box><Footer /></Box>
            </Box>

        </Flex > */}