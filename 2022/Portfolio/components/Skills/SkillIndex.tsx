import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Dividers from '../Projects/Divider'
import {
    Tag,
    TagLabel,

} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

function SkillIndex() {
    return (
        <Stack id='skills' gap={2}>

            <Dividers />
            <Text fontFamily={'cursive'} fontSize={'3xl'} fontWeight={'semibold'}>Skills</Text>

            <Stack gap={[0, 0, 12, 0]} display={['', '', 'flex', 'flex']} justify='space-between' flexDir={['initial', 'row', 'row', 'row']}>
                <Text align={['center', 'center', 'unset', 'unset']} fontFamily={'cursive'} fontSize={'xl'} fontWeight={'semibold'}>Frontend</Text>

                <Grid w={['', '', '300px', '300px']} templateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap={4}>

                    <GridItem>


                        <Tag>
                            <TagLabel>TypeScript</TagLabel>
                        </Tag></GridItem>
                    <GridItem>    <Tag>
                        <TagLabel>JavaScript</TagLabel>
                    </Tag></GridItem>
                    <GridItem>  <Tag>
                        <TagLabel>React</TagLabel>
                    </Tag></GridItem>
                    <GridItem>  <Tag>
                        <TagLabel>Nextjs</TagLabel>
                    </Tag></GridItem>

                    <GridItem>  <Tag>
                        <TagLabel>TailwindCSS</TagLabel>
                    </Tag></GridItem>
                    <GridItem>  <Tag>
                        <TagLabel>ChakraUI</TagLabel>
                    </Tag></GridItem>
                    <GridItem>  <Tag>
                        <TagLabel>BootStrap</TagLabel>
                    </Tag></GridItem>
                    <GridItem>  <Tag>
                        <TagLabel>Figma</TagLabel>
                    </Tag></GridItem>
                    <GridItem>  <Tag>
                        <TagLabel>Redux</TagLabel>
                    </Tag></GridItem>
                    <GridItem >
                        <Tag >
                            <TagLabel>RTL</TagLabel>
                        </Tag>
                    </GridItem>
                    <GridItem >
                        <Tag >
                            <TagLabel>Jest</TagLabel>
                        </Tag>
                    </GridItem>
                    <GridItem >
                        <Tag >
                            <TagLabel>Cypress</TagLabel>
                        </Tag>
                    </GridItem>
                </Grid>

            </Stack>

            <Stack gap={[0, 0, 12, 0]} display={['', '', 'flex', 'flex']} justify='space-between' flexDir={['initial', 'row', 'row', 'row']}>
                <Text align={['center', 'center', 'unset', 'unset']} fontFamily={'cursive'} fontSize={'xl'} fontWeight={'semibold'}>Backend</Text>

                <Grid w={['', '', '300px', '300px']} templateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap={4}>
                    <GridItem>


                        <Tag>
                            <TagLabel>Django </TagLabel>
                        </Tag>
                    </GridItem>
                    <GridItem>    <Tag>
                        <TagLabel>Python</TagLabel>
                    </Tag></GridItem>
                    <GridItem>  <Tag>
                        <TagLabel>MYSql</TagLabel>
                    </Tag></GridItem>
                    <GridItem>  <Tag>
                        <TagLabel>FireBase</TagLabel>
                    </Tag></GridItem>
                    <GridItem>  <Tag>
                        <TagLabel>PostGreSql</TagLabel>
                    </Tag></GridItem>


                    <GridItem>  <Tag>
                        <TagLabel>RestAPI</TagLabel>
                    </Tag></GridItem>
                    <GridItem>  <Tag>
                        <TagLabel>Web Sockets</TagLabel>
                    </Tag></GridItem>
                    <GridItem>  <Tag>
                        <TagLabel>Strapi</TagLabel>
                    </Tag></GridItem>
                    <GridItem>  <Tag>
                        <TagLabel>NestJs</TagLabel>
                    </Tag></GridItem>
                </Grid>

            </Stack>




        </ Stack>
    )
}

export default SkillIndex