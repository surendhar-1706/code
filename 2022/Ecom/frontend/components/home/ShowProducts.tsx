import { Box, Button, Divider, Grid, GridItem, HStack, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import DisplayGrid from './DisplayGrid';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
export type Product_type = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}
function ShowProducts() {
    const getProducts = async () => {
        const res_data = await fetch('https://fakestoreapi.com/products?sort=desc')
        const json_data = await res_data.json();
        console.log('all products', json_data)
        return json_data
    }
    const getMens = async () => {
        const res_data = await fetch(`https://fakestoreapi.com/products/category/men's clothing`)
        const json_data = await res_data.json();

        return json_data
    }
    const getWomens = async () => {
        const res_data = await fetch(`https://fakestoreapi.com/products/category/women's clothing`)
        const json_data = await res_data.json();

        return json_data
    }
    const getJewellery = async () => {
        const res_data = await fetch('https://fakestoreapi.com/products/category/jewelery')
        const json_data = await res_data.json();

        return json_data
    }
    const getElectronics = async () => {
        const res_data = await fetch('https://fakestoreapi.com/products/category/electronics')
        const json_data = await res_data.json();

        return json_data
    }
    const { data, isError, isLoading } = useQuery('products', getProducts)
    const { data: men, } = useQuery('men', getMens, { refetchOnWindowFocus: false })
    const { data: women, } = useQuery('women', getWomens, { refetchOnWindowFocus: false })
    const { data: jewelery, } = useQuery('jewlery', getJewellery, { refetchOnWindowFocus: false })
    const { data: electronics, } = useQuery('electronics', getElectronics, { refetchOnWindowFocus: false })
    return <div>

        <VStack px={'36'} pt='3' gap={4}>
            <Text fontSize={'3xl'} fontWeight='semibold' textAlign={'center'}>Latest Products</Text>
            <Divider border={'2px'} />
            <Tabs align='center' variant='' colorScheme=''>
                <TabList gap={'2'}>
                    <Tab borderWidth={'1px'} px='6' rounded={'md'} >All</Tab>
                    <Tab borderWidth={'1px'} px='6' rounded={'md'} >Mens's Clothing</Tab>
                    <Tab borderWidth={'1px'} px='6' rounded={'md'} >Women's Clothing</Tab>
                    <Tab borderWidth={'1px'} px='6' rounded={'md'} >Jewellery</Tab>
                    <Tab borderWidth={'1px'} px='6' rounded={'md'} >Electronic</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                            {data ? data.map((one: Product_type) => {
                                return <GridItem
                                    pt={'2'}
                                    pb={'3'}
                                    boxShadow={'md'}
                                    borderWidth='1px'
                                    borderRadius='lg'
                                    borderColor={'gray.50'}
                                    align={'center'}
                                    overflow='hidden'
                                    key={one.id}  >
                                    <VStack>
                                        <Box maxH={'xl'}>
                                            <Image h={'200'} objectFit={"contain"} src={one.image} />
                                        </Box>
                                        <Text fontWeight={'semibold'} noOfLines={1}>{one.title}</Text>
                                        <Text fontWeight={'bold'}>${one.price}</Text>
                                        <Button variant={'outline'}>Buy Now</Button>
                                    </VStack>

                                </GridItem>
                            }) :

                                <GridItem colSpan={4}>

                                    <Box padding='6' boxShadow='lg' bg='white'>

                                        <Stack>
                                            <Skeleton height='20px' />
                                            <Skeleton height='20px' />
                                            <Skeleton height='20px' />

                                        </Stack>




                                    </Box>
                                </GridItem>}


                        </Grid>
                    </TabPanel>
                    <TabPanel>
                        {men && <DisplayGrid data={men} />}
                    </TabPanel>
                    <TabPanel>
                        {women && <DisplayGrid data={women} />}
                    </TabPanel>
                    <TabPanel>
                        {jewelery && <DisplayGrid data={jewelery} />}
                    </TabPanel>
                    <TabPanel>
                        {electronics && <DisplayGrid data={electronics} />}
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </VStack>
    </div>;
}

export default ShowProducts;
