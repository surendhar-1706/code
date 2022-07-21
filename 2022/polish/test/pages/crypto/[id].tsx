import { Box, HStack, Select, Stack, Text } from '@chakra-ui/react'
import millify from 'millify'
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'
import Cryptochart from '../../components/Crypto/Cryptochart'
import { useGetDetailsQuery } from '../../services/cryptodetailsapi'

function Cryptodetail() {
    const router = useRouter()
    const [timeframe, settimeframe] = useState('24h')
    const { data, isFetching } = useGetDetailsQuery(router.query.id)
    const { data: coinhistory, isFetching: isHistoryFetching } = useGetDetailsQuery({ id: router.query.id, timeframe })
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
                <HStack>
                    <Text>Number of Markets</Text>
                    <Text>{millify(data.data.coin.numberOfMarkets)}</Text>
                </HStack>
                <HStack>
                    <Text>Confirmed Supply</Text>
                    <Text>{data.data.coin.supply.confirmed ? <div>Yes</div> : <div>No</div>}</Text>
                </HStack>
                <HStack>
                    <Text>Circulating Supply</Text>
                    <Text>{millify(data.data.coin.supply.circulating)}</Text>
                </HStack>
                <HStack>
                    <Text>Total Supply</Text>
                    <Text>{millify(data.data.coin.supply.total)}</Text>
                </HStack>
                <Stack>
                    <Text>Coin Details</Text>
                    <Text>{data.data.coin.description}</Text>
                </Stack>

                <Stack>
                    <Text>Links</Text>
                    {data?.data.coin.links.map((link: any) => {
                        return (
                            <HStack justifyContent={'space-around'}

                            >
                                <Text>      {link.type}</Text>
                                <Text>  {link.name}</Text>

                            </HStack>
                        )
                    })}


                </Stack>
            </Stack>
            <Cryptochart history={history} price={data.data.coin.price} name={data.data.coin.name} />
        </Box>
    )
}
export default Cryptodetail