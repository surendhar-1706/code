import { Box, Button, Grid, HStack, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { client, urlFor } from '../../lib/client'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/store';
import { togglecart } from '../../feautres/cartSlice';
function ProductDetail({ product, products }: any) {
  console.log(product, 'single product')
  const router = useRouter();
  const [item, setitem] = useState(0)
  const [index, setindex] = useState(0)
  const cart = useSelector((state: RootState) => state.showcart.value)
  const dispatch = useDispatch()
  return (
    <Box pt={6}>


      <Box px={20} display={'flex'} columnGap={40} >
        <Stack>
          <Box rounded={'xl'} bgColor={'blackAlpha.50'}> <Image height={80} width={80} src={`${urlFor(product.image && product.image[index])}`} /></Box>
          {/* mini gallery */}
          <HStack>     {product.image.map((image: any, i: any) => {

            return (
              <Box cursor={'po'} border={'1px'} borderColor={'transparent'} sx={{
                '&:hover': {
                  border: '1px',
                  borderColor: 'blackAlpha'
                }
              }} key={i}>

                <Image src={`${urlFor(image)}`} height={20} width={20} onMouseEnter={() => { setindex(i) }} />
              </Box>
            )
          })}</HStack>
        </Stack>

        {/* Product details data */}
        <Box>

          <Text fontWeight={'bold'} textColor={'blue.800'} fontSize={'lg'}>{product.name}</Text>
          <HStack>
            <HStack textColor={'red.400'}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />

            </HStack>
            <Text>(20)</Text>
          </HStack>
          <Stack>
            <Text fontWeight={'bold'} textColor={'blue.800'} fontSize={'lg'}>Description</Text>
            <Text>{product.details}</Text>
          </Stack>
          <Text fontSize={'lg'} fontWeight={'bold'} textColor={"red.600"}>${product.price}</Text>
          <Box display={'flex'} >
            <Text fontWeight={'bold'} textColor={'blue.800'} pr='6'>Quantity</Text>
            <HStack border={'1px'} borderColor={'gray.400'} ><Text px={'2'} cursor={'pointer'} onClick={() => {
              if (item > 0) { setitem(item - 1) }

            }
            }>-</Text>
              <Text borderX={'1px'} borderColor='gray.300' px={3} my='0.5'>{item}</Text>
              <Text px={'2'} cursor={'pointer'} onClick={() => {
                setitem(item + 1)

              }
              }>+</Text></HStack>
          </Box>
          <Box pt={4} display={'flex'} columnGap={"4"} >
            <Button colorScheme='red' px={'14'} variant={'outline'} size='md' rounded={'none'}>Add to Cart</Button>
            <Button onClick={() => {
              dispatch(togglecart())
              console.log(cart, 'shoba dei cart value da')
            }} colorScheme='red' px={'14'} rounded={'none'} >Buy Now</Button>
          </Box>
        </Box>
      </Box>
      {/* Marquee */}
      <Marquee speed={50} gradient={false}>
        <HStack p={5} gap={10} >
          {
            products.map((product: any) => {
              return (


                <Box sx={{
                  transition: ' 0.4s ease-in-out',
                  '&:hover': { transform: 'scale(1.08)', cursor: 'pointer' },
                }} key={product['slug'].current} onClick={() => { router.push(`${product['slug'].current}`) }}>
                  {/* {product['slug'].current}<br/> */}

                  {/* <Image src={`${urlFor( product.image[0])}`} height={700} width={700}/> */}
                  <Box px={1} rounded={'xl'} bgColor={'blackAlpha.100'} height={'44'} width={'44'}><Image src={`${urlFor(product.image[0])}`} /></Box>
                  <Text fontWeight={'semibold'}>{product.name}</Text>
                  <Text fontWeight={'bold'}>${product.price}</Text>
                </Box>

              )
            })}
        </HStack>
      </Marquee>
    </Box>
  )
}


export async function getStaticPaths() {
  const product_query = `*[_type == "product"]{
    slug{
      current
    }
  }`
  const products = await client.fetch(product_query)
  const paths = products.map((product: any) => ({
    params: {
      slug: product.slug.current
    }
  }))
  return {
    paths,
    fallback: 'blocking' // false or 'blocking'
  };
}


export const getStaticProps = async ({ params: { slug } }: any) => {
  const query = `*[_type == "product" && slug.current =='${slug}'][0]`
  const product_query = '*[_type == "product"]'
  const product = await client.fetch(query)
  const products = await client.fetch(product_query)
  // console.log(product,'print product')

  return {
    props: { product, products }
  }
}
export default ProductDetail