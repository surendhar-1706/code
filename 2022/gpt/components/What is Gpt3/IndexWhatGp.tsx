import { Box, Grid, GridItem, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
function IndexWhatGp() {
    return (

        <Stack gap={'12'} bgColor={'#042D55'} position='relative' overflow={'hidden'} px='6' py='8'>

            <Box
                position={'absolute'}
                top='-6'
                left={'-50'}
                w='24'
                h={'24'}
                borderWidth='6px'
                filter={'auto'}
                blur='2xl'
                bgGradient='linear(to-r, #1360B4, #1360B4)'
                rounded={'full'}
            >
            </Box>

            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap={6}>
                <GridItem>
                    <Box w={'8'} h='1' bgGradient='linear(to-r, #AE67FA, #F49867)' />
                    <Heading textColor={'white'} fontSize='md'>
                        What is GPT-3
                    </Heading>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text textColor={'#81AFDD'}>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Text>

                </GridItem>
            </Grid>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(8, 1fr)', 'repeat(8, 1fr)']} gap={6}>


                <GridItem colSpan={3} >

                    <Heading fontSize={'xl'} bgGradient='linear(to-r, #AE67FA, #F49867)' bgClip={'text'}>The possibilities are beyond your imagination</Heading>
                </GridItem>
                <GridItem display={['none', 'none', 'flex', 'flex']} colSpan={4} justifyContent='space-between'></GridItem>
                <GridItem colSpan={1}>
                    <Text fontSize={'sm'} textColor={'#F49867'}>Explore The Library</Text>
                </GridItem>
            </Grid>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap={6}>
                <Stack>
                    <Stack>
                        <Box w={'8'} h='1' bgGradient='linear(to-r, #AE67FA, #F49867)' />
                        <Text textColor={'white'}>Chatbots</Text>
                    </Stack>
                    <Text textColor={'#81AFDD'}>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </Text>
                </Stack>
                <Stack>
                    <Stack>
                        <Box w={'8'} h='1' bgGradient='linear(to-r, #AE67FA, #F49867)' />
                        <Text textColor={'white'}>Knowledgebase</Text>
                    </Stack>
                    <Text textColor={'#81AFDD'}>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</Text>

                </Stack>
                <Stack filter='auto'>
                    <Stack>
                        <Box w={'8'} h='1' bgGradient='linear(to-r, #AE67FA, #F49867)' />
                        <Text textColor={'white'}>Education</Text>
                    </Stack>
                    <Text textColor={'#81AFDD'}>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</Text>
                </Stack>
            </Grid>
            <Box
                position={'absolute'}
                bottom='-2'
                right={'-4'}
                w='28'
                h={'28'}
                filter={'auto'}
                blur='2xl'
                bgColor='#1360B4'
                rounded={'full'}
            >

            </Box>
        </Stack>

    )
}

export default IndexWhatGp