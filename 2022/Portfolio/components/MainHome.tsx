import { Box, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ContactIndex from './Contact/ContactIndex'
import Intro from './Intro/Intro'
import Navbar from './Navbar/Navbar'
import Projects from './Projects/Projects'
import SkillIndex from './Skills/SkillIndex'
import AOS from 'aos';
import 'aos/dist/aos.css'
function MainHome() {
    useEffect(() => { AOS.init(); }, [])
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