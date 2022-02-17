import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import IndexBlog from './Blog/IndexBlog'
import IndexBrand from './Brand/IndexBrand'
import IndexCTA from './CTA/IndexCTA'
import IndexFeautre from './Feautres/IndexFeautre'
import IndexFooter from './Footer/IndexFooter'
import IndexHeader from './Header/IndexHeader'
import NavbarIndex from './Navbar/NavbarIndex'
import IndexPossibility from './Possibility/IndexPossibility'
import IndexWhatGp from './What is Gpt3/IndexWhatGp'

function MainIndex() {
    return (
        <Box
            pl={['2', '2', '2', '20']}
            pr={['6', '6', '6', '20']}
            py={['8', '8', '8', '8']}
            bgGradient='linear(to-r, #01254A, #021932, #040D19)'>
            <NavbarIndex />
            <Box id='home' pl={'8'}> <IndexHeader /></Box>
            <Box pl={'8'} pt='8'>  <IndexBrand /></Box>
            <Box id='what' pl={'8'} pt='8'>  <IndexWhatGp /></Box>
            <Box pl={'8'} pt='8'>  <IndexFeautre /></Box>
            <Box id='poss' pl={'8'} pt='8'>  <IndexPossibility /></Box>
            <Box id='cta' pl={'8'} pt='8'>  <IndexCTA /></Box>
            <Box id='case' pl={'8'} pt='8'>  <IndexBlog /></Box>
            <Box pl={'8'} pt='8'>  <IndexFooter /></Box>

        </Box>
    )
}

export default MainIndex