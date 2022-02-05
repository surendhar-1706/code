import React from 'react';
import { Badge, Box, Button, Flex, HStack, Icon, Input, InputGroup, InputLeftAddon, InputLeftElement, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image';
import Instagram from '../../public/instagram.png'
import { AiFillHome, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiWechatPayLine } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
function Header() {

    return <HStack
        position={'sticky'}
        top='0'
        gap={5}
        justify={'space-between'}
        px={['2', '2', '2', '200']}
        py='1'
        borderBottom={'1px'}
        borderBottomColor={'gray.200'}
        bgColor={'white'}

    >

        <Box h={'10'} w='28' mt={'3'} >
            <Image src={Instagram} />
            {/* <Text>Instagram</Text> */}
        </Box>
        <Box w={'150'} display={['none', 'none', 'none', 'flex']}>
            <InputGroup textColor={'gray.500'} bgColor={'gray.50'} rounded={'sm'}>
                <InputLeftElement
                    pointerEvents='none'
                    children={<AiOutlineSearch />}
                />
                <Input type='text' placeholder='Search' />
            </InputGroup>
        </Box>
        <HStack gap={2} >
            <Icon w={7} h={7} as={AiFillHome} />
            <Box pt={2} position={'relative'} >
                <Icon w={7} h={7} as={BiMessageRoundedCheck} />
                <Badge position={'absolute'} fontSize='0.6em' top='1' left='4' bgColor={'red.500'} rounded='full' variant={'solid'}>1</Badge></Box>
            <Icon w={7} h={7} as={CgAddR} />
            <Icon w={7} h={7} as={MdOutlineExplore} />
            <Icon w={7} h={7} as={AiOutlineHeart} />
            <Popover isLazy colorScheme={'whiteAlpha'} >
                <PopoverTrigger>
                    <Box as='button'>
                        <Avatar
                            size={'xs'}
                            name='User'
                            src='https://bit.ly/dan-abramov' /></Box>
                </PopoverTrigger>
                <PopoverContent w='max-content' >
                    <PopoverArrow />
                    <PopoverBody px={'5'} >
                        <VStack>
                            <Text>Log Out</Text>
                        </VStack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </HStack>

    </HStack>

}

export default Header;
