import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/client'
import { Grid, GridItem } from '@chakra-ui/react'
function HeroBanner({data}:any) {
    console.log(data,'from banner component')
  return (
    <Grid mx={'36'} templateColumns='repeat(5, 1fr)' bgColor={'blackAlpha.200'} px={4} rounded='xl'>
        <GridItem  colSpan={2} pt={8} >
         <Text fontWeight={'semibold'} >{data.smallText}</Text>
         <Text fontWeight={'bold'} fontSize={'5xl'}>{data.midText}</Text>
         <Text fontWeight={'bold'} fontSize={'7xl'} textColor={"white"}>{data.largeText1}</Text>
         <Button mb={4} colorScheme={'red'} rounded={'xl'}>{data.buttonText}</Button>

        </GridItem>
        <GridItem colStart={3}  colSpan={2}>
          <Image src={`${urlFor(data.image)}`} width={300} height={300}/> 
          </GridItem>
          <GridItem position={'relative'}  colSpan={1} mb={2} colStart={5}>
            <Stack  position={'absolute'} bottom='0' >
            <Text fontWeight={'bold'} textColor={'blue.700'}>Description</Text>
          <Text fontWeight={'thin'}>{data.desc}</Text>
            </Stack>
          </GridItem>
       
 
    </Grid>
  )
}

export default HeroBanner