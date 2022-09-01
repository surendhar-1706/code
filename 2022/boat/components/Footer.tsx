import { Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Footer({data}:any) {
    console.log(data,'from footer component')
  return (
    <Stack bgColor={'red.500'} textColor='white'>

<Text>{data.discount}</Text>
<Text>{data.largeText1}</Text>
<Text>{data.largeText2}</Text>
<Text>{data.saleTime}</Text>
<Text>{data.smallText}</Text>
<Text>{data.midText}</Text>
<Text>{data.desc}</Text>
    </Stack>
  )
}

export default Footer