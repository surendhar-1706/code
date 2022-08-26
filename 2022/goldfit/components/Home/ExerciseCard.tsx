import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ExerciseCard({exercise}:any) {
  return (
    <Box  border={3}
    borderBottom={0}
    borderLeft={0}
    borderRight={0}
    borderColor="red"
    mb={1}
 
    mt={2}
    sx={{
        transition: "transform 0.30s ease-in-out",
        "&:hover":{transform: "scale3d(1.1, 1.1, 1.1)" },
        my:3,
        mx:{
          lg:20
        }
    }}
     key={exercise.name}
     >
    <Box>

  <Link href={`/exercisedetail?id=${exercise.id}`}>
  <a>
        
        <Image width={500} height={500} src={exercise.gifUrl} loading='lazy'/>
        
        </a></Link>
      
      
      </Box>

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
  <Link href={`/exercisedetail?id=${exercise.id}`}> 
  <Typography sx={{textTransform:'uppercase',fontWeight:600,mt:2,fontSize:15}}> 
  { exercise.name}
  </Typography>
   </Link>
    </Box>
  )
}

export default ExerciseCard