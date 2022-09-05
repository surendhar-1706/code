import { Box, Grid, HStack, Image, Text } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { client, urlFor } from '../../lib/client'

function ProductDetail({product,products}:any) {
  // console.log(product,'single product')
  const router = useRouter();
  const [index,setindex]= useState(0)
  return (
    <div>
      ProductDetail
      
      <Image height={80} width={80} src={`${urlFor(product.image && product.image[index])}`}/>
 <HStack>     {product.image.map((image:any,i:any)=>{

return(
  <Box cursor={'pointer'} boxSizing='border-box' sx={{'&:hover':{
    border:'1px',
    borderColor:'blackAlpha'
  }}} key={i}>

    <Image  src={`${urlFor(image)}`} height={20} width={20} onMouseEnter={()=>{setindex(i)}} />
  </Box>
)
      })}</HStack>
      <Marquee speed={50} gradient={false}>
      <HStack p={5} gap={10} >
    {
      products.map((product:any)=>{
        return (
       
        
          <Box sx={{
          transition:' 0.4s ease-in-out',
          '&:hover':{transform:'scale(1.08)',cursor:'pointer'}, 
        }}  key={product['slug'].current} onClick={()=>{router.push(`${product['slug'].current}`)}}>
          {/* {product['slug'].current}<br/> */}
         
          {/* <Image src={`${urlFor( product.image[0])}`} height={700} width={700}/> */}
       <Box px={1} rounded={'xl'} bgColor={'blackAlpha.100'} height={'44'} width={'44'}><Image src={`${urlFor( product.image[0])}`}/></Box>
       <Text fontWeight={'semibold'}>{product.name}</Text>
       <Text fontWeight={'bold'}>${product.price}</Text>
        </Box>
      
          ) 
      })}
    </HStack>
</Marquee>
      </div>
  )
}


export async function getStaticPaths() {
  const  product_query = `*[_type == "product"]{
    slug{
      current
    }
  }`
  const products = await client.fetch(product_query)
  const paths = products.map((product:any)=>({
    params:{
      slug:product.slug.current
    }
  }))
  return {
    paths,
    fallback: 'blocking' // false or 'blocking'
  };
}


export const getStaticProps =   async ({params:{slug}}:any)=>{
  const  query = `*[_type == "product" && slug.current =='${slug}'][0]`
  const  product_query = '*[_type == "product"]'
  const product = await client.fetch(query)
  const products = await client.fetch(product_query)
  // console.log(product,'print product')

  return {
    props:{product,products}
  }
}
export default ProductDetail