import { Box, HStack, Select, Stack, Text } from '@chakra-ui/react'
import millify from 'millify'
import Router, { useRouter } from 'next/router'
import React from 'react'
import { useGetDetailsQuery } from '../../services/cryptodetailsapi'

function Cryptodetail() {
    const router = useRouter()
    const { data, isFetching } = useGetDetailsQuery(router.query.id)
    if (isFetching) return (<div>Loading</div>)
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']
    console.log(data)
    return (
        <Box>

            {data.data.coin.symbol}

            <Select size={'sm'} w='40'>

                {time.map((period: any) => {
                    return (
                        <option value={period}>{period}</option>
                    )
                })}
            </Select>

            <Stack>
                <Text>Bitcoin Value Statistics</Text>
                <Text>An overview showing the stats of the Bitcoin</Text>
                <HStack>
                    <Text>Price to USD</Text>
                    <Text>{millify(data.data.coin.price)}</Text>
                </HStack>
                <HStack>
                    <Text>Rank</Text>
                    <Text>{millify(data.data.coin.rank)}</Text>
                </HStack>
                <HStack>
                    <Text>All Time High</Text>
                    <Text>{millify(data.data.coin.allTimeHigh.price)}</Text>
                </HStack>

                <HStack>
                    <Text>Market Cap</Text>
                    <Text>{millify(data.data.coin.marketCap)}</Text>
                </HStack>

            </Stack>
            <Stack>
                <Text>Other Statistics</Text>
                <Text>An overview showing the stats of the Bitcoin</Text>
                <HStack>
                    <Text>Number of Exchanges</Text>
                    <Text>{millify(data.data.coin.numberOfExchanges)}</Text>
                </HStack>
            </Stack>
        </Box>
    )
}
export default Cryptodetail