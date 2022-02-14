import { Box, Button, Grid, GridItem, Heading, HStack, Input, InputGroup, InputRightAddon, InputRightElement, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import AiImage from '../../public/Illustration.png'
import people from '../../public/Group 81.png'
function IndexHeader() {
    return (
        <Box>

            <Grid templateColumns={['repeat(6, 1fr)']} >
                <GridItem colSpan={[6, 6, 3, 3]} w='100%' mt={'12'}  >
                    <Stack gap={8}  >
                        <Heading
                            letterSpacing={'1px'}
                            fontSize={'52'}
                            bgGradient='linear(to-r, #AE67FA, #F49867)'
                            bgClip='text'
                        >Let’s Build Something amazing with GPT-3 OpenAI</Heading>

                        <Text wordBreak={'break-word'} textColor={'#81AFDD'}>Yet bed any for travelling assistance indulgence unpleasing.

                            Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                            Party we years to order allow asked of.</Text>

                        <InputGroup borderColor={'brand.drawer'}>

                            <Input textColor='white' type='email' bgColor={'#052D56'} placeholder='Your Email Address' />
                            <InputRightAddon as={'button'} bgColor={'brand.button'} textColor='white'> Get Started</InputRightAddon>
                        </InputGroup>
                        <HStack>
                            <Image src={people} height='38' width={'182'} />
                            <Text color={'white'} fontSize='xs'>1,600 people requested access a visit in last 24 hours</Text>
                        </HStack>
                    </Stack>
                </GridItem>
                <GridItem colSpan={[6, 6, 3, 3]} w='100%'>
                    <Image height={'700'} width={'667'} src={AiImage} />
                </GridItem>

            </Grid>
        </Box>
    )
}

export default IndexHeader