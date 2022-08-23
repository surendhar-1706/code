import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react'
import Detail from '../components/Details/Detail';
import { options } from '../components/options';
const execise_db_by_id_url = 'https://exercisedb.p.rapidapi.com/exercises/exercise'
const youtube_db_url = 'https://youtube-search-and-download.p.rapidapi.com/'
import BodyPartImage from '../public/icons/body-part.png'
import EquipmentImage from '../public/icons/equipment.png'
import TargetImage from '../public/icons/target.png'

function exercisedetail() {
var router = useRouter();
var exercise_id = router.query["id"]
const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const fetch_exercise_by_id = async () => {
  const fetched_data = await fetch(`${execise_db_by_id_url}/${exercise_id}`, options)
  const json_data = await fetched_data.json()
  console.log('printing data from api', json_data)
  return json_data
}
const { data,isFetched} = useQuery([`${exercise_id}`],fetch_exercise_by_id,{staleTime:twentyFourHoursInMs})


  return (
    <div>
      <Typography>
        
      Why am i here just to suffer doing {exercise_id}
      </Typography>
      {isFetched && <Detail exercise={data}/>}
       </div>
  )
}

export default exercisedetail