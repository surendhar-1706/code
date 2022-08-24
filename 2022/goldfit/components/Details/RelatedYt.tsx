import { Typography } from '@mui/material';
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
    <div>Watch {exercise.name} videos
{isFetched && data.contents.map((data:any)=>{
    return (
        <div key={data.video.title}>
<Image src={data.video.thumbnails[0].url} width={250} height={250}/>
<Typography>{data.video.channelName}</Typography>
<Typography>{data.video.title}</Typography>
        </div>
    )
})}


    </div>
  )
}

export default RelatedYt