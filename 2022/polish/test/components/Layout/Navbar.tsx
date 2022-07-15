import { Box, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Cryptologo from '../../public/cryptocurrency.png'

function Navbar() {
    return (
        <Box bgColor={'blue.900'} textColor='white' px={10}>
            <Flex
                pos={'sticky'}
                left={'5'}
                flexDir={'column'}
                height={'90vh'}
                justifyContent={'space-between'}
            >
                <Link href={'/'}>
                    <a>
                        <HStack >
                            <Image width={25}
                                height={25} src={Cryptologo} />
                            <Text> CRYPTOVERSE</Text>
                        </HStack>

                    </a></Link>
                <Link href={'/'}>
                    <a>
                        Home</a></Link>
                <Link href={'/crypto'}>
                    <a>
                        Cryptocurrencies</a></Link>
                <Link href={'/exchange'}>
                    <a>
                        Exchanges</a></Link>

                <Link href={'/news'}>
                    <a>
                        News</a>


                </Link>
            </Flex>

        </Box>
    )
}

export default Navbar