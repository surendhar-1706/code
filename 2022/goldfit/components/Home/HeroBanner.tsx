import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import HeroBannerImage from '../../public/images/banner.png'
function HeroBanner() {
    return (
        <Box sx={{
            paddingTop: '100px',
            position: 'relative',

        }}>
            <Box
                sx={{
                }}>
                <Typography

                    sx={{
                        fontWeight: 'bold',
                        color: 'error.main'

                    }}
                >Fitness Club</Typography>

                <Typography fontWeight={700} sx={{
                    fontSize: '30px',
                    py: {
                        lg: '5px'
                    }
                }}>
                    Sweat,  Smile <br /> and Repeat
                </Typography>
                <Typography py={2}>Check out the most effective exercises personalised to you</Typography>
				
                <Button variant="contained" color='error' sx={{
                    my: {
                        lg: '3px'
                    }

                }}>Explore Exercises</Button>
            </Box>
            <Box sx={{
                position: 'absolute',
                top: '0',
                right: '-10px',
                mt: '-49px',
                height: {
                    lg: '600px',

                    md: '500px',
                    sm: '400px'

                },
                width: {
                    lg: '480px',

                    md: '500px',
                    sm: '400px'
                },
                display: {
                    lg: 'flex',
                    md: 'flex',
                    sm: 'flex',
                    xs: 'none'
                }
            }} >
                <Image src={HeroBannerImage} />
            </Box>
            <Typography sx={{
                opacity: 0.1,
                display: {
                    lg: 'flex',
                    md: 'flex',
                    sm: 'flex',
                    xs: 'none'

                },
                p: 0,
                m: 0,
                fontSize: {
                    lg: '200px',
                    md: '170px',
                    sm: '50px'

                }
            }} color='#ff2625'>Exercises</Typography>
        </Box>
    )
}

export default HeroBanner