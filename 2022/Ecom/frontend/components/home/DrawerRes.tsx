import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    LinkBox,
    LinkOverlay,
} from '@chakra-ui/react'
import NextLink from "next/link"
import { IconButton } from '@chakra-ui/react'
import { Input } from 'postcss';
import { BiCart, BiLogIn, BiMenu, BiUserPlus } from 'react-icons/bi';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router';
function DrawerRes() {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<any>()
    return <div>
        <IconButton backgroundColor={'white'} aria-label='Hamburger Menu' icon={<BiMenu size={30} />} ref={btnRef} onClick={onOpen} />
        <Drawer

            size='xs'
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}

        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton mr={'5'} my={'5'} />


                <DrawerBody py={'10'}>

                    <VStack>
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
                        <LinkBox fontSize='xl' >
                            <NextLink href={'/login'} passHref>
                                <LinkOverlay textColor={router.pathname == "/login" ? "" : "blackAlpha.600"} > Login
                                </LinkOverlay>
                            </NextLink>
                        </LinkBox >
                        <LinkBox fontSize='xl' >
                            <NextLink href={'/cart'} passHref>
                                <LinkOverlay textColor={router.pathname == "/cart" ? "" : "blackAlpha.600"} > Cart
                                </LinkOverlay>
                            </NextLink>
                        </LinkBox >


                    </VStack>
                </DrawerBody>


            </DrawerContent>
        </Drawer>
    </div>;
}

export default DrawerRes;
