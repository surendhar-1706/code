import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Intro from './Intro/Intro'
import Navbar from './Navbar/Navbar'
import Projects from './Projects/Projects'

function MainHome() {
    return (
        <Box px={'36'} py={'4'}>
            <Navbar />
            <Intro />
            <Projects />
        </Box>
    )
}

export default MainHome