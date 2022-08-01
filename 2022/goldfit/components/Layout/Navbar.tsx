import { Box, Stack, Typography } from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImage from '../../public/images/Logo.png'
function Navbar() {
    return (
        <Box>
            <Stack

                spacing={4}
                sx={{

                }}
                direction="row"
                alignItems={'center'}

            >
                <Image src={LogoImage} />

                <Link href={'/'} passHref>
                    <a style={{ textDecoration: 'none', }} >
                        <Typography sx={{
                            borderBottom: 2,
                            borderColor: 'error.main',
                            color: 'black'





                        }} >Home
                        </Typography> </a>
                </Link>





                <Link href='/test'>
                    <a style={{ textDecoration: 'none' }}>
                        <Typography color={'black'}>Exercises</Typography>
                    </a>
                </Link>
            </Stack>
        </Box>
    )
}

export default Navbar