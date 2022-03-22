import { Box, Fade, Heading, HStack, Icon, Link, ScaleFade, Text, useDisclosure, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Brush from '../../public/brush.png'
import Brain from '../../public/brain.png'
import User from '../../public/user.png'

import Menu from '../../public/hamburger_menu.png'
import {
    Drawer,
    DrawerBody,

    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<any>()
    return (
        <HStack justify={'space-between'}>

            {/* <Image height={100} width={200} src={Sign} /> */}
            <Text fontSize={'3xl'} fontWeight={'medium'} textColor={'#8A2BE2'} fontFamily={'cursive'}>Suren</Text>
            <Box display={['none', 'none', 'flex', 'flex']} gap={3} fontWeight={'bold'} fontSize={'xl'}>
                <HStack >
                    <Image alt="Picture of icon" height={20} width={20} src={Brush} />
                    <Link _hover={{ decoration: 'none' }} href='#projects'><Text >Projects</Text></Link>
                </HStack>
                <HStack>
                    <Image alt="Picture of icon" height={20} width={20} src={Brain} />
                    <Link _hover={{ decoration: 'none' }} href='#skills'>
                        <Text>Skills</Text></Link>
                </HStack>
                <HStack>
                    <Image alt="Picture of icon" height={20} width={20} src={User} />
                    <Link _hover={{ decoration: 'none' }} href='#contact'>     <Text>Contact</Text></Link>
                </HStack>
            </Box>
            <Box ref={btnRef} onClick={onOpen} display={['flex', 'flex', 'none', 'none',]}>
                <Image alt="Picture of icon" height={20} width={20} src={Menu} />
            </Box>

            <Drawer
                size={'xs'}
                isOpen={isOpen}

                onClose={onClose}
                finalFocusRef={btnRef}

            >

                <DrawerOverlay />
                <DrawerContent mt='6' >
                    <DrawerCloseButton />


                    <DrawerBody >
                        <VStack fontSize={'xl'} fontWeight='semibold' mt={'8'} gap={6}>
                            <HStack >
                                <Image alt="Picture of icon" height={20} width={20} src={Brush} />
                                <Link _hover={{ decoration: 'none' }} href='#projects'><Text >Projects</Text></Link>
                            </HStack>
                            <HStack>
                                <Image alt="Picture of icon" height={20} width={20} src={Brain} />
                                <Link _hover={{ decoration: 'none' }} href='#skills'>
                                    <Text>Skills</Text></Link>
                            </HStack>
                            <HStack>
                                <Image alt="Picture of icon" height={20} width={20} src={User} />
                                <Link _hover={{ decoration: 'none' }} href='#contact'>     <Text>Contact</Text></Link>
                            </HStack>
                        </VStack>
                    </DrawerBody>


                </DrawerContent>

            </Drawer>

        </HStack >
    )
}

export default Navbar