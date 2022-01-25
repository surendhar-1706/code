import { Box, GridItem, Heading, Input, Select, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
function Details() {
    return (
        <VStack bgColor='' w='full' border='1px' borderColor='gray.200'>
            <Heading>Your Details</Heading>
            <Text >If you already have an account,click here to login</Text>
            <SimpleGrid columns={2} spacing={10}>
                <GridItem>
                    <FormControl>
                        <FormLabel htmlFor='email'>First Name</FormLabel>
                        <Input id='firstName' type='text' placeholder='John' />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel htmlFor='email'>Last Name</FormLabel>
                        <Input id='lastName' type='text' placeholder='Doe' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel htmlFor='email'>Addresss</FormLabel>
                        <Input id='Address' type='text' />
                    </FormControl>
                </GridItem>
                <GridItem >
                    <FormControl>
                        <FormLabel htmlFor='email'>City</FormLabel>
                        <Input id='City' type='text' />
                    </FormControl>
                </GridItem>
                <GridItem >
                    <FormControl>
                        <FormLabel htmlFor='country'>Country</FormLabel>
                        <Select id='country' placeholder='Select country'>
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>
                    </FormControl>
                </GridItem>
            </SimpleGrid>
        </VStack >
    );
}

export default Details;
