import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react'
import { youtube_options } from '../options';

function RelatedYt({exercise}:any) {
    const youtube_db_url = 'https://youtube-search-and-download.p.rapidapi.com'
    const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const fetch_yt_video = async () => {
    console.log('printing exercise name ',exercise.name)
  const fetched_data = await fetch(`${youtube_db_url}/search?query=${exercise.name}`, youtube_options)
  const json_data = await fetched_data.json()
  console.log('printing data from youtube api', json_data.contents)
  return json_data
}
const { data,isFetched} = useQuery([`${exercise.name}`],fetch_yt_video,{staleTime:twentyFourHoursInMs})

  return (
    <div>
      
<Stack flexDirection={'row'} columnGap={1} pb={6}>
  
  <Typography variant='h4'>Watch {``}</Typography> 
  <Typography variant='h4' color={'error'}>{   exercise.name}</Typography>
  <Typography variant='h4'> videos</Typography>
</Stack>
<Grid container flexDirection={'row'} columnGap={15}>
{isFetched && data.contents?.slice(0,6).map((data:any)=>{
    return (
        <Grid item xs={12} lg={3} sx={{
py:{
  lg:3,
  xs:3
},

pl:{
  lg:0,
  xs:6
},

          transition: "transform 0.30s ease-in-out",
          "&:hover":{transform: "scale3d(1.1, 1.1, 1.1)"},


        }}  key={data.video.title} >
          <a target={'_blank'} href={`https://www.youtube.com/watch?v=${data.video.videoId}`}>
<Image src={data.video.thumbnails[0].url} width={250} height={250}/></a>


<Typography textTransform={'capitalize'} width={'250px'} height={'40px'} fontSize={'12px'}>{data.video.title}</Typography>
<Typography>{data.video.channelName}</Typography>
        </Grid>
    )
})}
</Grid>


    </div>
  )
}

export default RelatedYt