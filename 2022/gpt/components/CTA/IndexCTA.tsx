import { Box, Button, Grid, GridItem, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function IndexCTA() {
    return (
        <Box bgGradient='linear(to-r, #AE67FA, #F49867)' p={[2, 2, 2, 2]} rounded='lg'>
            <Grid templateColumns='repeat(6, 1fr)' alignItems={'center'} gap='6' >
                <GridItem colSpan={5}>
                    <Stack >
                        <Text fontSize={'xs'} fontWeight='semibold'>Request Early Access to Get Started</Text>
                        <Text fontWeight={'semibold'}>Register today & start exploring the endless possiblities.</Text>
                    </Stack>
                </GridItem>
                <GridItem colSpan={1}>
                    <Button

                        bgColor={'black'}
                        textColor='white'
                        _hover={{ bgColor: 'gray.700' }}
                        size='sm'
                        rounded={'full'}>
                        Get Started</Button>
                </GridItem>
            </Grid>
        </Box >
    )
}

export default IndexCTA