import { Box, Grid, GridItem, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Dividers from '../Projects/Divider'
import TwitterPic from '../../public/twitter.png'
import GithubPic from '../../public/github.png'
import LinkedInPic from '../../public/linkedin.png'
import Image from 'next/image'
import { Link } from '@chakra-ui/react'
function ContactIndex() {
    return (
        <Stack id='contact'>
            <Dividers />
            <Text fontFamily={'cursive'} fontSize={'3xl'} fontWeight={'semibold'} ml={[2, 2, 2, 2]}>Contact</Text>
            <VStack>
                <Text ml={['', '', '', '']} fontSize={'lg'} fontFamily={'mono'}>
                    Want to get in touch? Contact me on any of the platform
                </Text>
                <Grid w={['', '', '150px', '150px']} templateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap={4}>
                    <GridItem>
                        <Link _hover={{ decoration: 'none' }} isExternal href='https://twitter.com/juz_ren'>
                            <Box as='button'><Image alt="Picture of icon" height={30} width={30} src={TwitterPic} /></Box>


                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link isExternal href='https://github.com/surendhar-palanisamy'>
                            <Box as='button'>   <Image alt="Picture of icon" height={30} width={30} src={GithubPic} /></Box>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link isExternal href='https://www.linkedin.com/in/surendhar-palanisamy-30945b178/'>
                            <Box as='button'> <Image alt="Picture of icon" height={25} width={25} src={LinkedInPic} /></Box>

                        </Link>
                    </GridItem>

                </Grid>
            </VStack>
        </Stack>
    )
}

export default ContactIndex