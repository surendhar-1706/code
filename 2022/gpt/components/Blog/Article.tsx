import { Box, Flex, Grid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Rect22 from '../../public/Rectangle 22.png'
function Article() {
    return (
        <Box  >
            <Image src={Rect22} />
            <VStack bgColor={'#042C54'} >
                <Box borderWidth={'1px'}>

                    <Text fontSize={'xs'}>Sep 26, 2021</Text>
                    <Text>GPT-3 and Open  AI is the future. Let us exlore how it is?</Text>
                </Box>
                <Spacer />
                <Text borderWidth={'1px'} pt={['', '', '', '']}>Read Full Article</Text>
            </VStack>
        </Box>
    )
}

export default Article