import { Box, Flex, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { Text, Container } from '@chakra-ui/react'

import { Image } from '@chakra-ui/react'
import ShowProducts from './ShowProducts';
function HomeBackground() {
    return <div>
        <Box maxW={'100%'} maxH={'100vh'} position='relative' >
            <Image objectFit={'cover'} w={'100%'} h={['40vh', '50vh', '80vh', '80vh']} src='https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934070.jpg&fm=jpg' />
            <Stack fontSize={['2xl', '2xl', '5xl']} align={''} p={'2'} position={'absolute'} top={['40', '40', '60', '60']} left={['0', '0', '10', '10']} >
                <Text textTransform={'uppercase'} >New Arrivals</Text>
                <Text textTransform={'uppercase'} >Explore trend</Text>
            </Stack>
        </Box>
        <ShowProducts />
    </div >





}

export default HomeBackground;
