import { Box, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import Google from '../../public/google.png'
import Atlassian from '../../public/atlassian.png'
import Dropbox from '../../public/dropbox.png'
import Shopify from '../../public/shopify.png'
import Slack from '../../public/slack.png'
import Image from 'next/image'
import { Grid, GridItem } from '@chakra-ui/react'
function IndexBrand() {
    return (
        <VStack>

            <Grid templateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)']} gap={6}>
                <GridItem>
                    <Image height={'24'} width={'70'} src={Google} />
                </GridItem>
                <GridItem>  <Image height={'24'} width={'70'} src={Shopify} /></GridItem>
                <GridItem> <Image height={'20'} width={'70'} src={Slack} /></GridItem>

                <GridItem> <Image height={'20'} width={'70'} src={Atlassian} /></GridItem>

                <GridItem>  <Image height={'20'} width={'70'} src={Dropbox} /></GridItem>

            </Grid>
        </VStack>
    )
}

export default IndexBrand