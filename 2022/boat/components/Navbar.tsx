import { Badge, Box, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
function Navbar() {
  return (
    
<Box mx={3}>

  <HStack justify={'space-between'} >
  <Text>Phanox shop</Text>
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