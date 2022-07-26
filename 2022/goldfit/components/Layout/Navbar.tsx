import { Box, Stack, Typography } from '@mui/material'

import Image from 'next/image'
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
                <Typography sx={{
                    borderBottom: 2,
                    borderColor: 'error.main'
                }} >Home</Typography>
                <Typography>Exercises</Typography>
            </Stack>
        </Box>
    )
}

export default Navbar