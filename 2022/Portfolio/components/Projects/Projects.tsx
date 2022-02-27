import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Dividers from './Divider'
import GPT from './GPT'
import Instagram from './Instagram'

function Projects() {
    return (
        <Box id='projects'>
            <Dividers />
            <Text ml={['2', '2', '2', '2']} fontFamily={'cursive'} fontSize={'3xl'} fontWeight={'semibold'}>Projects</Text>
            <Instagram />

        </Box >
    )
}

export default Projects