import { Box, Button, Fade, Grid, GridItem, HStack, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { FaGithubAlt } from "react-icons/fa";
import {
    Tag,
    TagLabel,

} from '@chakra-ui/react'
import Image from 'next/image';
// import Link from 'next/link';
import InstaPic from '../../public/insta3.jpg'
import UpworkPic from '../../public/upwork.jpg'
import GptPic from '../../public/Headerportfolio.png';

function Instagram() {
    return (

        <VStack>
            <Grid templateColumns={['repeat(1  , 1fr)', 'repeat(1  , 1fr)', 'repeat(1  , 1fr)', 'repeat(1  , 1fr)']} gap={12}>
                <GridItem py={2} shadow='xl' rounded={'lg'} borderWidth={'thin'}  >
                    <Box alignItems={'flex-end'} gap={4} display={['', '', 'flex', 'flex']} px={'4'} py={2}  >
                        <VStack   >
                            <Image src={InstaPic} />

                            <HStack>
                                <Link isExternal href='https://insta-mauve.vercel.app/' _hover={{ decoration: 'none' }}>
                                    <Button size={'sm'} leftIcon={<CgWebsite />}  > Demo</Button>
                                </Link>
                                <Link isExternal href='https://github.com/surendhar-palanisamy/insta' _hover={{ decoration: 'none' }}>
                                    <Button size={'sm'} leftIcon={<FaGithubAlt />} >Github</Button></Link>
                            </HStack>

                        </VStack>
                        <Stack  >
                            <Text fontWeight={'semibold'} fontSize={'xl'}>Instagram Clone</Text>
                            <Text w={['', '', '300px', '300px']}>
                                The idea of this website is to create a usable copy of a popular media sharing app  using a serverless backend having a realtime EventListeners and
                                Providing the end user with app monitoring functionalities

                            </Text>
                            <Grid w={['', '', '300px', '300px']} gap={3} templateColumns='repeat(3, 0fr)'>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>ReactJs</TagLabel>
                                    </Tag>
                                </GridItem>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>NextJs</TagLabel>
                                    </Tag>
                                </GridItem>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>TypeScript</TagLabel>
                                    </Tag>
                                </GridItem>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>Firebase</TagLabel>
                                    </Tag>
                                </GridItem>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>OAuth</TagLabel>
                                    </Tag>
                                </GridItem>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>ChakraUI</TagLabel>
                                    </Tag>
                                </GridItem>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>Recoil</TagLabel>
                                    </Tag>
                                </GridItem>



                            </Grid>
                        </Stack>
                    </Box>
                </GridItem>

                <GridItem py={2} shadow='xl' rounded={'lg'} borderWidth={'thin'}  >
                    <Box alignItems={'flex-end'} gap={4} display={['', '', 'flex', 'flex']} px={'4'} py={2}  >
                        <VStack   >
                            <Image height={250} width={250} src={GptPic} />

                            <HStack>
                                <Link isExternal href='https://gpt-woad.vercel.app/' _hover={{ decoration: 'none' }}>
                                    <Button size={'sm'} leftIcon={<CgWebsite />}  > Demo</Button>
                                </Link>
                                <Link isExternal href='https://github.com/surendhar-palanisamy/gpt' _hover={{ decoration: 'none' }}>
                                    <Button size={'sm'} leftIcon={<FaGithubAlt />} >Github</Button></Link>
                            </HStack>

                        </VStack>
                        <Stack  >
                            <Text fontWeight={'semibold'} fontSize={'xl'}>GPT Landing Page</Text>
                            <Text w={['', '', '300px', '300px']}>
                                Completely Responsive Landing page for an Artifical Intelligence based Agency
                                created from resources provided and working with Figma

                            </Text>
                            <Grid w={['', '', '300px', '300px']} gap={3} templateColumns='repeat(3, 0fr)'>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>ReactJs</TagLabel>
                                    </Tag>
                                </GridItem>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>NextJs</TagLabel>
                                    </Tag>
                                </GridItem>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>TypeScript</TagLabel>
                                    </Tag>
                                </GridItem>

                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>ChakraUI</TagLabel>
                                    </Tag>
                                </GridItem>

                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>Vercel</TagLabel>
                                    </Tag>
                                </GridItem>

                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>AI</TagLabel>
                                    </Tag>
                                </GridItem>

                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>Figma</TagLabel>
                                    </Tag>
                                </GridItem>

                            </Grid>
                        </Stack>
                    </Box>
                </GridItem>
                <GridItem py={2} shadow='xl' rounded={'lg'} borderWidth={'thin'}  >
                    <Box alignItems={'flex-end'} gap={4} display={['', '', 'flex', 'flex']} px={'4'} py={2}  >
                        <VStack   >
                            <Image height={200} width={200} src={UpworkPic} />

                            <HStack>
                                <Link isExternal href='https://gpt-woad.vercel.app/' _hover={{ decoration: 'none' }}>
                                    <Button size={'sm'} leftIcon={<CgWebsite />}  > Demo</Button>
                                </Link>
                                <Link isExternal href='https://github.com/surendhar-palanisamy/gpt' _hover={{ decoration: 'none' }}>
                                    <Button size={'sm'} leftIcon={<FaGithubAlt />} >Github</Button></Link>
                            </HStack>

                        </VStack>
                        <Stack  >
                            <Text fontWeight={'semibold'} fontSize={'xl'}>Freelance Work Search portal</Text>
                            <Text w={['', '', '300px', '300px']}>
                                Website built for the online community to find and outsource jobs which can handle high webiste load and efficiently manage tasks

                            </Text>
                            <Grid w={['', '', '300px', '300px']} gap={3} templateColumns='repeat(3, 0fr)'>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>ReactJs</TagLabel>
                                    </Tag>
                                </GridItem>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>NextJs</TagLabel>
                                    </Tag>
                                </GridItem>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>Django</TagLabel>
                                    </Tag>
                                </GridItem>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>JavaScript</TagLabel>
                                    </Tag>
                                </GridItem>



                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>Heroku</TagLabel>
                                    </Tag>
                                </GridItem>

                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>TailWindCss</TagLabel>
                                    </Tag>
                                </GridItem>

                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>WebSockets</TagLabel>
                                    </Tag>
                                </GridItem>



                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>PostGreSQl</TagLabel>
                                    </Tag>
                                </GridItem>
                                <GridItem >
                                    <Tag colorScheme='teal'>
                                        <TagLabel>DRF</TagLabel>
                                    </Tag>
                                </GridItem>
                            </Grid>
                        </Stack>
                    </Box>
                </GridItem>
            </Grid>
        </VStack>

    )
}

export default Instagram


