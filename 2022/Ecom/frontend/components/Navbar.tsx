import React from 'react';
import { Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
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
    const { colorMode, toggleColorMode } = useColorMode()
    const nav_link_color = useColorModeValue('blackAlpha.600', 'white')
    const toggle_button_color = useColorModeValue('white', 'black')
    return <div>
        <HStack flexWrap='wrap' px={7} py={7} justify={['space-between', 'space-between', 'space-between', 'space-between']} align='center'  >
            <Text fontSize='x-large' textTransform='uppercase' fontWeight='bold '>la collection</Text>
            <HStack display={['none', 'none', 'none', 'flex']} gap='4' >
                <LinkBox fontSize='xl'>
                    <NextLink href={'/'} passHref>
                        <LinkOverlay textColor={router.pathname == "/" ? "" : nav_link_color} > Home
                        </LinkOverlay>
                    </NextLink>
                </LinkBox >
                <LinkBox fontSize='xl'>
                    <NextLink href={'/products'} passHref>
                        <LinkOverlay textColor={router.pathname == "/products" ? "" : nav_link_color}> Prodcuts
                        </LinkOverlay>
                    </NextLink>
                </LinkBox > <LinkBox fontSize='xl' >
                    <NextLink href={'/about'} passHref>
                        <LinkOverlay textColor={router.pathname == "/about" ? "" : nav_link_color}> About
                        </LinkOverlay>
                    </NextLink>
                </LinkBox >


                <LinkBox fontSize='xl' >
                    <NextLink href={'/contact'} passHref>
                        <LinkOverlay textColor={router.pathname == "/contact" ? "" : nav_link_color} > Contact
                        </LinkOverlay>
                    </NextLink>
                </LinkBox >
            </HStack>

            <HStack display={['none', 'none', 'none', 'flex']} gap={3}>

                {/* <Button leftIcon={<BiLogIn />} variant='outline' onClick={() => {
                    router.push('/login')
                }}>
                    Login
                </Button> */}
                <Button onClick={toggleColorMode} backgroundColor={toggle_button_color} variant="outline">
                    {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
                <Button leftIcon={<BiUserPlus />} variant='outline' onClick={() => {
                    router.push('/register')
                }}>
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
