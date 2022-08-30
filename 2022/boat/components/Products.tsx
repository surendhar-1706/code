import { Box, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/client'

function Products({products}:any) {
  // console.log(products[0].image[0],'from product component')
  return (
    <Box>
      <Text>Best Seller Products</Text>
    <Stack alignItems={'center'} w={40}  sx={{
      transition:' 0.4s ease-in-out',
      '&:hover':{transform:'scale(1.2)',cursor:'pointer'},
      
    }}>
    {
      products.map((product:any)=>{
        return (
        <Box bgColor={'gray.50'} key={product.slug}>
          {/* {product['slug'].current}<br/> */}
         
          <Image src={`${urlFor( product.image[0])}`} height={100} width={100}/>
       
       <Text fontWeight={'semibold'}>   {product.name}</Text>
    <Text fontWeight={'bold'}>${product.price}</Text>

        </Box>) 
      })}
    </Stack>
          </Box>
  )
}

export default Products