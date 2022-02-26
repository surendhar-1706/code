import { Box, Button, Fade, Grid, GridItem, HStack, Link, Text, VStack } from '@chakra-ui/react'
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
function Instagram() {
    return (

        <VStack>
            <Grid templateColumns='repeat(3, 1fr)' gap={12}>



                {/* TechStack */}

                <GridItem >
                    <VStack w={'250px'} height={'300px'} py={4} rounded={'lg'} shadow={'2xl'} >
                        <Image objectFit='contain' src={InstaPic} />
                        <Text fontWeight={'semibold'} fontSize={'xl'}>Insta.Clone</Text>
                        <HStack>
                            <Link isExternal href='https://insta-mauve.vercel.app/' _hover={{ decoration: 'none' }}>
                                <Button size={'sm'}  ><CgWebsite /></Button>
                            </Link>
                            <Link isExternal href='https://github.com/surendhar-palanisamy/insta' _hover={{ decoration: 'none' }}>
                                <Button size={'sm'}  ><FaGithubAlt /></Button></Link>
                        </HStack>

                    </VStack>
                </GridItem>

                <GridItem >
                    <VStack w={'250px'} height={'300px'} py={4} rounded={'lg'} shadow={'2xl'} >
                        <Image objectFit='contain' src={InstaPic} />
                        <Text fontWeight={'semibold'} fontSize={'xl'}>Insta.Clone</Text>
                        <HStack>
                            <Link isExternal href='https://insta-mauve.vercel.app/' _hover={{ decoration: 'none' }}>
                                <Button size={'sm'}  ><CgWebsite /></Button>
                            </Link>
                            <Link isExternal href='https://github.com/surendhar-palanisamy/insta' _hover={{ decoration: 'none' }}>
                                <Button size={'sm'}  ><FaGithubAlt /></Button></Link>
                        </HStack>

                    </VStack>
                </GridItem>
                <GridItem >
                    <VStack w={'250px'} height={'300px'} py={4} rounded={'lg'} shadow={'2xl'} >
                        <Image objectFit='contain' src={InstaPic} />
                        <Text fontWeight={'semibold'} fontSize={'xl'}>Upwork.Clone</Text>
                        <HStack>
                            <Link isExternal href='https://insta-mauve.vercel.app/' _hover={{ decoration: 'none' }}>
                                <Button size={'sm'}  ><CgWebsite /></Button>
                            </Link>
                            <Link isExternal href='https://github.com/surendhar-palanisamy/insta' _hover={{ decoration: 'none' }}>
                                <Button size={'sm'}  ><FaGithubAlt /></Button></Link>
                        </HStack>

                    </VStack>
                </GridItem>
            </Grid>
        </VStack>

    )
}

export default Instagram


{/* <Text>
The idea of this website is to mock a popular media sharing app  using a serverless backend having a realtime EventListeners and
Providing the end user with app monitoring functionalities

</Text>
<Grid templateColumns='repeat(3, 1fr)'>
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



</Grid> */}