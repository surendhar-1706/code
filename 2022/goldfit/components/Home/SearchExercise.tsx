import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

function SearchExercise() {
    return (
        <Box>
            <Stack
                sx={{

                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography

                    sx={{

                        fontWeight: '700',
                        fontSize: { lg: 32 },
                    }}
                >Awesome Exercise You
                </Typography>
                <Typography

                    sx={{

                        fontWeight: '700',
                        fontSize: { lg: 32 },
                    }}
                >
                    Should Know</Typography>


                <TextField sx={{
                    width: '100%'

                }} placeholder='Search Exercises'>

                </TextField>

            </Stack>
        </Box>
    )
}

export default SearchExercise