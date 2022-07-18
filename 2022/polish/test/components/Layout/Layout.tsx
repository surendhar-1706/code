import { Box, Flex, HStack, Stack } from '@chakra-ui/react'
import React from 'react'

import Footer from './Footer'
import Navbar from './Navbar'
type Layouttype = {
    childcomponent?: React.ReactNode
}
function Layout(props: Layouttype) {
    return (
        <Flex
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

        </Flex >
    )
}

export default Layout