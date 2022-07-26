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
            {/* <Grid container >
                <Grid item xs={6}>
                    <Box>
                        <Typography

                            sx={{
                                fontWeight: 'bold',
                                color: 'error.main'

                            }}
                        >Fitness Club</Typography>

                        <Typography fontWeight={700} sx={{
                            fontSize: '30px'
                        }}>
                            Sweat,Smile <br /> and Repeat
                        </Typography>
                        <Typography>Check out the most effective exercises</Typography>
                        <Button variant="contained" color='error' sx={{
                            marginTop: '20px'

                        }}>Explore Exercises</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <Image src={HeroBannerImage} />
                    </Box>
                </Grid>
            </Grid> */}
            <Box>
                <Typography

                    sx={{
                        fontWeight: 'bold',
                        color: 'error.main'

                    }}
                >Fitness Club</Typography>

                <Typography fontWeight={700} sx={{
                    fontSize: '30px'
                }}>
                    Sweat,Smile <br /> and Repeat
                </Typography>
                <Typography>Check out the most effective exercises</Typography>
                <Button variant="contained" color='error' sx={{
                    marginTop: '20px'

                }}>Explore Exercises</Button>
            </Box>
            <Box sx={{
                position: 'absolute',
                top: '0',
                right: '0',
                mt: '-49px'
            }} >
                <Image height={700} width={600} src={HeroBannerImage} />
            </Box>

        </Box>
    )
}

export default HeroBanner