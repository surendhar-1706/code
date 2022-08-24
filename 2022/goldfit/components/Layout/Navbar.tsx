import { Box, Stack, Typography } from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImage from '../../public/images/Logo.png'
function Navbar() {
    return (
        <Box>
            <Stack

               
                sx={{
columnGap:20,
pt:3
                }}
                direction="row"
                alignItems={'center'}

            >
                <Image src={LogoImage} />

            <Stack direction={'row'} sx={{
                    columnGap:5,
                    alignItems:'center'                
            }}>
            <Link href={'/'} passHref>
                    <a style={{ textDecoration: 'none', }} >
                        <Typography sx={{
                            borderBottom: 2,
                            borderColor: 'error.main',
                            color: 'black'





                        }} >Home
                        </Typography> </a>
                </Link>





                <Link href='/exercisedetail?exercise=boss' as={'exercisedetail'}>
                    <a style={{ textDecoration: 'none' }}>
                        <Typography color={'black'}>Exercises</Typography>
                    </a>
                </Link>
            </Stack>
            </Stack>
        </Box>
    )
}

export default Navbar