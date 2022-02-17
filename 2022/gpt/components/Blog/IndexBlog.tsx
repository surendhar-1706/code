import { Box, Grid, GridItem, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Rect22 from '../../public/Rectangle 22.png'
import Rect224 from '../../public/Rectangle 22-4.png'
import Rect221 from '../../public/Rectangle 22-1.png'
import Rect222 from '../../public/Rectangle 22-2.png'
import Rect223 from '../../public/Rectangle 22-3.png'
import Article from './Article'
function IndexBlog() {
    return (
        <Stack gap={5} overflow='hidden' >
            <Stack gap={0} spacing='0'>
                <Text fontWeight={'bold'} fontSize={'4xl'} bgGradient='linear(to-r, #AE67FA, #F49867)' bgClip={'text'}>A lot is happening,</Text>
                <Text fontWeight={'bold'} fontSize={'4xl'} bgGradient='linear(to-r, #AE67FA, #F49867)' bgClip={'text'}> We are blogging about it.</Text>
            </Stack>
            <Grid

                textColor={'white'}
                templateRows='repeat(2, 1fr)'
                templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
                gap={6}

            >
                <GridItem colSpan={1} rowSpan={2}  >
                    <Box  >  <Image src={Rect22} />
                        <Stack p={4} gap={6} bgColor={'#042C54'}  >
                            <Stack>

                                <Text fontSize={'xs'}>Sep 26, 2021</Text>
                                <Text fontWeight={'semibold'}>GPT-3 and Open  AI is the future. Let us exlore how it is?</Text>
                            </Stack>

                            <Text fontSize={'xs'} pt={['', '', '60', '60']}>Read Full Article</Text>
                        </Stack></Box>
                </GridItem>
                <GridItem >
                    <Stack>
                        <Image src={Rect224} />
                        <Box bgColor={'#042C54'}>
                            <Stack p={4} gap={6} bgColor={'#042C54'}  >
                                <Stack>

                                    <Text fontSize={'xs'}>Sep 26, 2021</Text>
                                    <Text fontWeight={'semibold'}>GPT-3 and Open  AI is the future. Let us exlore how it is?</Text>
                                </Stack>

                                <Text fontSize={'xs'} pt={['', '', '', '']}>Read Full Article</Text>
                            </Stack>

                        </Box>
                    </Stack>  </GridItem>
                <GridItem>
                    <Stack>
                        <Image src={Rect222} />
                        <Box bgColor={'#042C54'}>
                            <Stack p={4} gap={6} bgColor={'#042C54'}  >
                                <Stack>

                                    <Text fontSize={'xs'}>Sep 26, 2021</Text>
                                    <Text fontWeight={'semibold'}>GPT-3 and Open  AI is the future. Let us exlore how it is?</Text>
                                </Stack>

                                <Text fontSize={'xs'} pt={['', '', '', '']}>Read Full Article</Text>
                            </Stack>
                        </Box>
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack>
                        <Image src={Rect223} />
                        <Box bgColor={'#042C54'}>
                            <Stack p={4} gap={6} bgColor={'#042C54'}  >
                                <Stack>

                                    <Text fontSize={'xs'}>Sep 26, 2021</Text>
                                    <Text fontWeight={'semibold'}>GPT-3 and Open  AI is the future. Let us exlore how it is?</Text>
                                </Stack>

                                <Text fontSize={'xs'} pt={['', '', '', '']}>Read Full Article</Text>
                            </Stack>
                        </Box>
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack>
                        <Image src={Rect221} />
                        <Box bgColor={'#042C54'}>
                            <Stack p={4} gap={6} bgColor={'#042C54'}  >
                                <Stack>

                                    <Text fontSize={'xs'}>Sep 26, 2021</Text>
                                    <Text fontWeight={'semibold'}>GPT-3 and Open  AI is the future. Let us exlore how it is?</Text>
                                </Stack>

                                <Text fontSize={'xs'} pt={['', '', '', '']}>Read Full Article</Text>
                            </Stack>
                        </Box>
                    </Stack>
                </GridItem>
            </Grid>
        </Stack>
    )
}

export default IndexBlog