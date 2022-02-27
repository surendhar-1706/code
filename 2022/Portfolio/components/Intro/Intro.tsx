import { Box, Grid, GridItem, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Coder from '../../public/coding.png'
function Intro() {
    return (
        <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
            alignItems={'center'}
        >
            <GridItem >
                <Stack fontSize={'xl'} fontFamily={'mono'}>
                    <Text>Hello There 👋, I am</Text>
                    <Text fontWeight={'bold'} textColor={'#0001FE'}>Surendhar Palanisamy.</Text>
                    <Text >I am fullStack Web developer.</Text>
                </Stack>
            </GridItem>
            <GridItem>
                <Image height={500} width={500} src={Coder} />
            </GridItem>
        </Grid>
    )
}

export default Intro