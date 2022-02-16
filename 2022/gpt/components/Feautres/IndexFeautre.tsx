import { Box, Grid, GridItem, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function IndexFeautre() {
    return (
        <Box>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(8, 1fr)']} gap={6}>
                <GridItem colSpan={2}>
                    <Stack >
                        <Text
                            fontWeight={'bold'}
                            fontSize={['xl', 'xl', '2xl', '2xl']}
                            bgGradient='linear(to-r, #AE67FA, #F49867)' bgClip={'text'}>
                            The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                        </Text>
                        <Text textColor={'#FF8A71'} >Request Early Access to Get Started</Text>
                    </Stack>
                </GridItem>
                <GridItem colSpan={2}></GridItem>
                <GridItem colSpan={4} >
                    <Stack spacing={'10'} fontSize={'lg'} >
                        <Grid templateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap='6'>
                            <GridItem colSpan={1}>
                                <Box w={'8'} h='1' bgGradient='linear(to-r, #AE67FA, #F49867)' />
                                <Text textColor={'white'}>Improving end distrusts instantly </Text>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Text fontSize={'sm'} textColor={'#81AFDD'}>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</Text>

                            </GridItem>
                        </Grid>


                        <Grid templateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap='6'>
                            <GridItem colSpan={1}>
                                <Box w={'8'} h='1' bgGradient='linear(to-r, #AE67FA, #F49867)' />
                                <Text textColor={'white'}>Become the tended active </Text>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Text fontSize={'sm'} textColor={'#81AFDD'}>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</Text>
                            </GridItem>
                        </Grid>
                        <Grid templateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap='6'>
                            <GridItem colSpan={1}>
                                <Box w={'8'} h='1' bgGradient='linear(to-r, #AE67FA, #F49867)' />
                                <Text textColor={'white'}>Message or am nothing</Text>
                            </GridItem> <GridItem colSpan={2}>
                                <Text fontSize={'sm'} textColor={'#81AFDD'}>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</Text>
                            </GridItem>
                        </Grid>
                        <Grid templateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap='6'>
                            <GridItem colSpan={1}>
                                <Box w={'8'} h='1' bgGradient='linear(to-r, #AE67FA, #F49867)' />
                                <Text textColor={'white'}>Really boy law county</Text>
                            </GridItem> <GridItem colSpan={2}>
                                <Text fontSize={'sm'} textColor={'#81AFDD'}>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</Text>
                            </GridItem>
                        </Grid>
                    </Stack>
                </GridItem>

            </Grid>
        </Box >
    )
}

export default IndexFeautre