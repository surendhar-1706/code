import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Coder from '../../public/coding.png'
function Intro() {
    return (
        <HStack
            alignItems={'center'}
            justify={'space-between'}>
            <Stack fontSize={['xs', 'sm', 'xl', 'xl']} fontFamily={'mono'}>
                <Text>Hello There 👋, I am</Text>
                <Text fontWeight={'bold'} textColor={'#0001FE'}>Surendhar Palanisamy</Text>
                <Text >I am fullStack Web developer.</Text>
            </Stack>
            <Image height={500} width={500} src={Coder} />
        </HStack>
    )
}

export default Intro