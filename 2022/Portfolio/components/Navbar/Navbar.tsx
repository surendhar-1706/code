import { Box, Heading, HStack, Icon, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Brush from '../../public/brush.png'
import Brain from '../../public/brain.png'
import User from '../../public/user.png'
import { BsBrush } from "react-icons/bs";
import Menu from '../../public/hamburger_menu.png'
function Navbar() {
    return (
        <HStack justify={'space-between'}>

            {/* <Image height={100} width={200} src={Sign} /> */}
            <Text fontSize={'3xl'} fontWeight={'medium'} textColor={'#8A2BE2'} fontFamily={'cursive'}>Suren</Text>
            <Box display={['none', 'none', 'flex', 'flex']} gap={3} fontWeight={'bold'} fontSize={'xl'}>
                <HStack >
                    <Image height={20} width={20} src={Brush} />
                    <Text>Projects</Text>
                </HStack>
                <HStack>
                    <Image height={20} width={20} src={Brain} />
                    <Text>Skills</Text>
                </HStack>
                <HStack>
                    <Image height={20} width={20} src={User} />
                    <Text>Contact</Text>
                </HStack>
            </Box>
            <Box display={['flex', 'flex', 'none', 'none',]}>
                <Image height={20} width={20} src={Menu} />
            </Box>
        </HStack>
    )
}

export default Navbar