import React from 'react';
import { Link, Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { BiLogIn, BiUserPlus, BiCart } from "react-icons/bi";
import { Flex, Spacer } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import NextLink from "next/link"
import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import DrawerRes from './home/DrawerRes';
function Navbar() {
    const router = useRouter()
    return <div>
        <HStack flexWrap='wrap' px={7} py={7} justify={['space-between', 'space-between', 'space-between', 'space-between']} align='center'  >
            <Text fontSize='x-large' textTransform='uppercase' fontWeight='bold '>la collection</Text>
            <HStack display={['none', 'none', 'none', 'flex']} gap='4'>
                <LinkBox fontSize='xl'>
                    <NextLink href={'/'} passHref>
                        <LinkOverlay textColor={router.pathname == "/" ? "" : "blackAlpha.600"} > Home
                        </LinkOverlay>
                    </NextLink>
                </LinkBox >
                <LinkBox fontSize='xl'>
                    <NextLink href={'/products'} passHref>
                        <LinkOverlay textColor={router.pathname == "/products" ? "" : "blackAlpha.600"}> Prodcuts
                        </LinkOverlay>
                    </NextLink>
                </LinkBox > <LinkBox fontSize='xl' >
                    <NextLink href={'/about'} passHref>
                        <LinkOverlay textColor={router.pathname == "/about" ? "" : "blackAlpha.600"}> About
                        </LinkOverlay>
                    </NextLink>
                </LinkBox >


                <LinkBox fontSize='xl' >
                    <NextLink href={'/contact'} passHref>
                        <LinkOverlay textColor={router.pathname == "/contact" ? "" : "blackAlpha.600"} > Contact
                        </LinkOverlay>
                    </NextLink>
                </LinkBox >
            </HStack>

            <HStack display={['none', 'none', 'none', 'flex']} gap={3}>

                <Button leftIcon={<BiLogIn />} variant='outline'>
                    Login

                </Button>
                <Button leftIcon={<BiUserPlus />} variant='outline'>
                    Register

                </Button>
                <Button leftIcon={<BiCart />} variant='outline'>

                    Cart

                </Button>
            </HStack>


            <HStack display={['flex', 'flex', 'flex', 'none']}>

                <DrawerRes />
            </HStack>
        </HStack >

    </div >;
}

export default Navbar;
