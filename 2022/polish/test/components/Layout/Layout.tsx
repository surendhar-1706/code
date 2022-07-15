import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

import Footer from './Footer'
import Navbar from './Navbar'
type Layouttype = {
    childcomponent?: React.ReactNode
}
function Layout(props: Layouttype) {
    return (
        <HStack>
            <Box>
                <Navbar />
                <Footer />
            </Box>
            <Box>{props.childcomponent}</Box>

        </HStack>
    )
}

export default Layout