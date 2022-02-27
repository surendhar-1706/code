import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import ContactIndex from './Contact/ContactIndex'
import Intro from './Intro/Intro'
import Navbar from './Navbar/Navbar'
import Projects from './Projects/Projects'
import SkillIndex from './Skills/SkillIndex'

function MainHome() {
    return (
        <Stack gap={6} px={['3', '3', '32', '32']} py={'4'}>
            <Navbar />
            <Intro />
            <Projects />
            <SkillIndex />
            <ContactIndex />
        </Stack>
    )
}

export default MainHome