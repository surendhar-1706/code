import { Box, Button, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'

import React from 'react'
import { urlFor } from '../lib/client'

function Footer({data}:any) {
    console.log(data,'from footer component')
  return (
    <HStack my={'24'} position={'relative'} justify={'space-between'} mx={'36'} rounded='xl' px={6} py={12} bgColor={'red.500'} textColor='white'>

<Stack>
<Text pb={3}>{data.discount}</Text>
<Text lineHeight={'3'} fontSize={'5xl'} fontWeight={'bold'} fontStyle={'italic'}>{data.largeText1}</Text>
<Text pt={2} fontSize={'5xl'} fontWeight={'bold'} fontStyle={'italic'}>{data.largeText2}</Text>
<Text>{data.saleTime}</Text>
</Stack>

<Box  position={'absolute'} left={'80'}>
<Image loading='lazy' height={400} width={400} src={`${urlFor(data.image)}`}/>
</Box>
<Box>
<Text>{data.smallText}</Text>
<Text fontSize={'5xl'} fontWeight={'bold'} fontStyle={'italic'}>{data.midText}</Text>
<Text>{data.desc}</Text>
<Button mt={4} textColor={'red'} size={'sm'} bgColor={'white'}>{data.buttonText}</Button>
</Box>
    </HStack>
  )
}

export default Footer