import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import IndexHeader from './Header/IndexHeader'
import NavbarIndex from './Navbar/NavbarIndex'

function MainIndex() {
    return (
        <Box
            pl={['2', '2', '2', '20']}
            pr={['6', '6', '6', '20']}
            py={['8', '8', '8', '8']}

            bgGradient='linear(to-r, #01254A, #021932, #040D19)'>
            <NavbarIndex />
            <Box pl={'8'}> <IndexHeader /></Box>
        </Box>
    )
}

export default MainIndex