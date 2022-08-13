import { Typography,Box, Grid, Button } from '@mui/material'

import Image from 'next/image'
import React from 'react'

function Exercises({data}:any) {
    // console.log(data,'data is printed from exercises')
    return (
        <Box bgcolor={''}>
<Typography pt={4} fontSize={"40px"} fontWeight={'bold'}>Showing Results</Typography>
<Grid container spacing={8}>
{data.map((exercise:any,id:any)=>{
    return (
       <Grid item xs={6}>
         <Box  border={2}
        borderBottom={0}
        borderLeft={0}
        borderRight={0}
        borderColor="red"
        mb={2}
        mx={20}
         key={exercise.name}
         >
        <Box><Image width={180} height={180} src={exercise.gifUrl} loading='lazy'/></Box>

       <Button> {exercise.bodyPart}</Button>
         <Button>{exercise.target}</Button>
        <Typography> { exercise.name}</Typography>

        </Box>
       </Grid>
    )
})}
</Grid>


        </Box>
    )
}

export default Exercises