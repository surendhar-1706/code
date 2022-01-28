import { Box, Button, Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Product_type } from './ShowProducts';
type DisplayGrid_type = {
    data: Product_type[]
}
function DisplayGrid(props: DisplayGrid_type) {
    return <div>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {props.data.map((one: Product_type) => {
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
            })}


        </Grid>
    </div>;
}

export default DisplayGrid;
