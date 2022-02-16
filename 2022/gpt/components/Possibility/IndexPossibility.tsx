import { Box, Grid, GridItem, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Possibility from '../../public/Feature Image.png'
function IndexPossibility() {
    return (

        <Box textColor={'white'}  >
            <Box display={['', '', 'flex', 'flex']} alignItems='flex-end' gap={12}>
                <Box gap={''} >
                    <Image height={'1000'} width={'1000'} src={Possibility} /></Box>
                <Stack pr={['', '', '', '']} gap={6}  >


                    <Text textColor={'#71E5FF'} fontSize='sm' pt={'6'} >Request Early Access to Get Started</Text>
                    <Text
                        bgGradient='linear(to-r, #AE67FA, #F49867)'
                        bgClip='text'
                        fontWeight={'bold'}
                        fontSize='2xl'
                    >The possibilities are beyond your imagination
                    </Text>
                    <Text textColor={'#81AFDD'} fontSize='sm'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</Text>
                    <Text textColor={'#FF8A71'} fontSize='sm'>Request Early Access to Get Started</Text>



                </Stack>

            </Box>
        </Box >
    )
}

export default IndexPossibility