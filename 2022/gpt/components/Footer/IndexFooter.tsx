import { Box, Button, Grid, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Logo from '../../public/GPT-3.svg'
function IndexFooter() {
    return (
        <Stack gap={8} >
            <VStack gap={8} >
                <Text
                    fontWeight={'bold'}
                    bgGradient='linear(to-r, #AE67FA, #F49867)'
                    bgClip={'text'}
                    fontSize='4xl'
                    w={['', '', '450px', '450px']}
                >
                    Do you want to step in to the future before others
                </Text>
                <Box as='button'
                    textColor={'white'}
                    bgColor={'#031B34'}
                    _hover={{ bgColor: '#031B34' }}
                    border='1px'
                    p='3'
                    fontSize='xs'
                >
                    Request Early Access
                </Box>
            </VStack >
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={6} textColor={'white'}>
                <Stack >
                    {/* <Image src={Logo} /> */}
                    <Text fontWeight={'bold'} fontSize='2xl' >GPT-3</Text>
                    <Text width={['120px', '120px', '120px', '120px']} fontSize={'xs'}>
                        Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                    </Text>
                </Stack>

                <Stack>
                    <Text fontWeight={'bold'}>Links</Text>
                    <Stack fontSize={'xs'}>
                        <Text>Overons</Text>
                        <Text>Social Media</Text>
                        <Text>Counters</Text>
                        <Text>Contact</Text>
                    </Stack>
                </Stack>
                <Stack>
                    <Text fontWeight={'bold'}>Company</Text>
                    <Stack fontSize={'xs'}>
                        <Text>Terms & Conditions</Text>
                        <Text>Privacy Policy</Text>
                        <Text>Contact</Text>

                    </Stack>
                </Stack>
                <Stack>
                    <Text fontWeight={'bold'}>Get in touch</Text>
                    <Stack fontSize={'xs'}>
                        <Text width={['120px', '120px', '120px', '120px']}>Crechterwoord K12 182 DK Alknjkcb</Text>
                        <Text>085-132567</Text>
                        <Text>info@payme.net</Text>

                    </Stack>
                </Stack>


            </ Grid>
            <VStack>
                <Text textColor={'white'} fontSize={'xs'}>        © 2022 GPT-3. All rights reserved.</Text>
            </VStack>
        </ Stack>
    )
}

export default IndexFooter