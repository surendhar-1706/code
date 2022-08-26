import { Typography,Box, Grid, Button, ButtonBase, Stack, Pagination } from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ExerciseCard from './ExerciseCard'

function Exercises({data}:any) {
    // console.log(data,'data is printed from exercises')
    const [currentpage,setcurrentpage]= useState(1)
    const exercise_per_page = 8
    const index_of_last_Exercise = currentpage * exercise_per_page
    const index_of_first_Exercise = index_of_last_Exercise - exercise_per_page
    const current_exercise = data.slice(index_of_first_Exercise,index_of_last_Exercise)
    const paginate = (e:any,value:any)=>{
        setcurrentpage(value)
        console.log('paginate clicked')
        window.scrollTo({top:1000,behavior:'smooth'})
    }
    return (
        <Box bgcolor={''} sx={{ color:'error' }}>
<Typography pt={4} fontSize={"40px"} pb={4} fontWeight={'bold'}>Showing Results</Typography>
<Grid container spacing={0}>
{current_exercise.map((exercise:any,id:any)=>{
    return (
       <Grid key={exercise.name} item xs={12} lg={6} >
        <ExerciseCard exercise={exercise}/>
       </Grid>
    )
})}

 
</Grid>
<Box
display={'flex'} 
alignItems="center"

 justifyContent="center"><Pagination count={Math.ceil(data.length/exercise_per_page)} onChange={paginate}  page={currentpage}/></Box>

        </Box>
    )
}

export default Exercises