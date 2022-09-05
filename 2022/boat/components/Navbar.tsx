import { Badge, Box, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
function Navbar() {
  return (
    
<Box mx={3}>

  <HStack justify={'space-between'} >
  <Link href='/'>
    <a><Text>Phanox shop</Text></a>
  </Link>
  <Box position={'relative'} display={'flex'} >
  <Box cursor={'pointer'}>
    <HiOutlineShoppingBag  size={22}/>
  </Box>
  <Badge position={'absolute'} left='3'   fontSize='0.6em'  bgColor={'red.500'} rounded='full' variant={'solid'}>9</Badge>
  </Box>
    
    </HStack>
    
    </Box>

  
  )
}

export default Navbar