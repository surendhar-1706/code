import { Avatar, Box, Grid, GridItem, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react';
import millify from 'millify';
import React, { useState } from 'react'

import { useGetCryptosQuery } from '../../services/cryptoapi';

function CryptoHome(props: any) {
    const count = props.simplified ? 10 : 100;
    const { data, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setcryptos] = useState(data?.data?.coins)
    if (isFetching) return <div>Loading</div>

    console.log(cryptos)
    return (
        <Box>

            <Grid templateColumns='repeat(3, 1fr)' gap={3}>
                <GridItem p={4} colSpan={3} borderColor={'gold'}>
                    <VStack> <Input w={40} /> </VStack>
                </GridItem>
                {
                    cryptos.map((currency: any) => {
                        return (
                            <GridItem p={'3'} shadow='xl' key={currency.uuid} rounded='lg' _hover={{ bgColor: 'gray.50' }}>
                                <HStack pt={2} pb={'6'} justifyContent={'space-between'}>
                                    <Text fontWeight={'semibold'}>{currency.rank}.   {currency.name}</Text>
                                    <Avatar size={'sm'} src={currency.iconUrl} />
                                </HStack>
                                <Stack gap={1}>
                                    <Text>Price :  {millify(currency.price)}</Text>
                                    <Text>Market Cap : {millify(currency.marketCap)}</Text>
                                    <Text>Daily Change : {millify(currency.change)}</Text>
                                </Stack>
                            </GridItem>)
                    })
                }

            </Grid>


        </Box>
    )
}
export default CryptoHome