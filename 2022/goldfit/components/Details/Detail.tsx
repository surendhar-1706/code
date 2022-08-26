import { Button, Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import BodyPartImage from '../../public/icons/body-part.png'
import EquipmentImage from '../../public/icons/equipment.png'
import TargetImage from '../../public/icons/target.png'
function Detail({exercise}:any) {
    console.log(exercise)
  return (
    <Grid container flexDirection={'row'}>
<Grid item><Image src={exercise.gifUrl} width={600} height={700}/></Grid>
<Stack

sx={{
  
  rowGap:5,
  pt:{
    lg:10,
    xs:5
  },
  pl:{
    lg:5,
    xs:1
  }
  
  
  }}>

<Typography textTransform={'capitalize'} variant='h4'>
{exercise.name}
</Typography>



<Typography lineHeight={'22px'} fontWeight={'Light'} sx={{width:400,fontSize:15,fontFamily:'sans-serif'}} textTransform={'capitalize'} >
    Exercises keep you strong.{` `}{exercise.name} is one of the best exercise to target your {exercise.target}
     .{` `}It will help you improve your mood and gain energy.
</Typography>

<Stack flexDirection={'row'} sx={{alignItems:'center',columnGap:2}}>
<Button  sx={{background:'#fff2db',borderRadius:'50%',p:1}}><Image width={35} src={TargetImage}/></Button>
<Typography textTransform={'capitalize'}>{exercise.target}</Typography>
</Stack>
<Stack flexDirection={'row'} sx={{alignItems:'center',columnGap:2}}>
<Button  sx={{background:'#fff2db',borderRadius:'50%',p:1}}><Image width={35}  src={BodyPartImage}/></Button>
<Typography textTransform={'capitalize'}>{exercise.bodyPart}</Typography>
</Stack>
<Stack flexDirection={'row'} sx={{alignItems:'center',columnGap:2}}>
<Button sx={{background:'#fff2db',borderRadius:'50%',p:1}}><Image width={35}  src={EquipmentImage}/></Button>
<Typography textTransform={'capitalize'}>{exercise.equipment}</Typography>
</Stack>
</Stack>
    </Grid>
  )
}

export default Detail