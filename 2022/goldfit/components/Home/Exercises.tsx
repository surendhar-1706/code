import { Typography,Box, Grid, Button } from '@mui/material'

import Image from 'next/image'
import React from 'react'

function Exercises({data}:any) {
    // console.log(data,'data is printed from exercises')
    return (
        <Box bgcolor={''}>
<Typography pt={4} fontSize={"40px"} pb={4} fontWeight={'bold'}>Showing Results</Typography>
<Grid container spacing={1}>
{data.map((exercise:any,id:any)=>{
    return (
       <Grid item xs={6}>
         <Box  border={3}
        borderBottom={0}
        borderLeft={0}
        borderRight={0}
        borderColor="red"
        mb={2}
        mx={20}
        my={2}
         key={exercise.name}
         >
        <Box><Image width={500} height={500} src={exercise.gifUrl} loading='lazy'/></Box>

       <Button
        sx={{
        borderRadius:24,
        px:2,
        py:0.5,
        backgroundColor:'#F9EB9D'
        
       }}
   
       variant="contained"> 
       {exercise.bodyPart}
       </Button>
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