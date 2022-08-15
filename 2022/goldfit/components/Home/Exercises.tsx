import { Typography,Box, Grid, Button, ButtonBase, Stack, Pagination } from '@mui/material'

import Image from 'next/image'
import React, { useState } from 'react'

function Exercises({data}:any) {
    // console.log(data,'data is printed from exercises')
    const [currentpage,setcurrentpage]= useState(1)
    const paginate = (e:any,value:any)=>{
        setcurrentpage(value)
        console.log('paginate clicked')
    }
    return (
        <Box bgcolor={''}>
<Typography pt={4} fontSize={"40px"} pb={4} fontWeight={'bold'}>Showing Results</Typography>
<Grid container spacing={0}>
{data.map((exercise:any,id:any)=>{
    return (
       <Grid item xs={6} sx={{
        
    }}>
         <Box  border={3}
        borderBottom={0}
        borderLeft={0}
        borderRight={0}
        borderColor="red"
        mb={1}
        mx={20}
        mt={2}
        sx={{
            transition: "transform 0.30s ease-in-out",
            "&:hover":{transform: "scale3d(1.1, 1.1, 1.1)" },
            my:3
        }}
         key={exercise.name}
         >
        <Box><Image width={500} height={500} src={exercise.gifUrl} loading='lazy'/></Box>

      <Stack columnGap={1} sx={{
        flexDirection:'row',
        
      }}>
      <Button
  
  sx={{
color:'white',
background:'#ffa9a9',
borderRadius:'20px',
textTransform:'capitalize',
'&:hover':{
  background:'#ffa9a9'
}
 }}

 > 
 {exercise.bodyPart}
 </Button>
 <Button

sx={{
color:'white',
background:'#fcc757',
borderRadius:'20px',
textTransform:'capitalize',

'&:hover':{
background:'#fcc757'
}
}}

> {exercise.target}</Button>
      </Stack>
        <Typography sx={{textTransform:'uppercase',fontWeight:600,mt:2,fontSize:15}}> { exercise.name}</Typography>

        </Box>
       </Grid>
    )
})}
<Box
display={'flex'} 
alignItems="center"
 justifyContent="center"><Pagination count={Math.ceil(data.length/9)} onChange={()=>{paginate}}  page={currentpage}/></Box>
 
</Grid>


        </Box>
    )
}

export default Exercises