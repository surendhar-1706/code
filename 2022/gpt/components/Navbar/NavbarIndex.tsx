import { Box, Button, HStack, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Logo from '../../public/GPT-3.svg'
import { RiMenu3Fill } from "react-icons/ri";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
function NavbarIndex() {
    const [size, setSize] = React.useState('xs')
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <HStack

            textColor={'white'}
            fontWeight={'semibold'}
            justify={'space-between'}
        >
            <Image src={Logo} height='15' />
            <HStack gap={'10'} display={['none', 'none', 'flex', 'flex']}>

                <Text>Home</Text>
                <Text>What is GPT?</Text>
                <Text>Open AI</Text>
                <Text>Case Studies</Text>
                <Text>Library</Text>
            </HStack>
            <HStack gap={'10'} display={['none', 'none', 'none', 'flex']}>
                <Text as={'button'}>Sign in</Text>
                <Button _hover={{ bgColor: '' }} bgColor='brand.button'>Sign up</Button>
            </HStack>
            <Box display={['flex', 'flex', 'none', 'none']}>
                <RiMenu3Fill size={'20'} onClick={() => onOpen()} />
            </Box>
            <Drawer onClose={onClose} isOpen={isOpen} size={'xs'}>
                <DrawerOverlay />
                <DrawerContent mt={['8', '8', '8', '8']} bgGradient='linear(to-r, #01254A, #021932, #040D19)' textColor={'white'}>
                    <DrawerCloseButton />

                    <DrawerBody  >
                        <VStack >
                            <Stack mt={'6'} >
                                <Text>Home</Text>
                                <Text>What is GPT?</Text>
                                <Text>Open AI</Text>
                                <Text>Case Studies</Text>
                                <Text>Library</Text>
                                <Text >Sign in</Text>
                                <Text >Sign Up</Text>
                            </Stack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </HStack >
    )
}

export default NavbarIndex