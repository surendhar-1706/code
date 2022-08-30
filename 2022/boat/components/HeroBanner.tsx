import { Box, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/client'

function HeroBanner({data}:any) {
    // console.log(data,'from banner component')
  return (
    <Box bgColor={'gray.100'}>
        <Text>{data.smallText}</Text>
        <Text>{data.midText}</Text>
        <Text>{data.largeText1}</Text>
        <Text>{data.largeText2}</Text>
        <Button>{data.buttonText}</Button>
        <Text>{data.desc}</Text>
       <Image src={`${urlFor(data.image)}`} width={200} height={200}/>
    </Box>
  )
}

export default HeroBanner