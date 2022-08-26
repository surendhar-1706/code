import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query';

import React, { useEffect, useState } from 'react'
import Exercises from './Exercises';
import HorizontalBar from './HorizontalBar';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c7fa8235d3msh1ddce5b747c5aa0p1da4e0jsne5df34823909',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
const fetchExercises = async () => {
    const fetched_data = await fetch('https://exercisedb.p.rapidapi.com/exercises', options)
    const json_data = await fetched_data.json()
    console.log('printing data from api', json_data)
    return json_data
}
const fetchBodyparts = async () => {
    const fetched_data = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
    const json_data = await fetched_data.json()
    // console.log('printing data from bodypats', json_data)
    return json_data
}
function SearchExercise() {
    const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
    const [search, setsearch] = useState('')
    const [search_field,set_search_field]= useState('')
    const [search_filtered_exercises,set_search_filtered_exercises]= useState<any>()
    const { data:exercises, refetch } = useQuery(['exercises'], fetchExercises, {staleTime:twentyFourHoursInMs})
    const { data: bodyparts, isFetching } = useQuery(['bodyparts'], fetchBodyparts, {
        staleTime: twentyFourHoursInMs,
    })
   
    const searchedExercises = ()=>{

   if(exercises)
   {
    const filtered_content =  exercises.filter(
        (item:any) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      console.log(filtered_content,'filtered content from search exersies')
      set_search_filtered_exercises(filtered_content)
   }
    }
   useEffect(()=>{
    searchedExercises()
   },[search])
     
    return (
        <Box>
            <Stack
                sx={{

                    justifyContent: {
                        lg:'center'
                    },
                    alignItems: {
                        lg:'center'
                    },
                    rowGap:{
                        xs:1
                    }
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


                <Stack
                    sx={{

                    }} direction={'row'}>
                    <TextField
                        value={search_field}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                         
                         
                            set_search_field(e.target.value.toLowerCase())
                        }}
                        size='small'
                        sx={{
                            input: {
                                border: 'none',
                                borderRadius: '200px'
                            },
                            width: {
                                lg: '900px',

                            },

                        }} placeholder='Search Exercises'>

                    </TextField>
                    <Button onClick={(e:any) => { 
                        
                       setsearch(search_field)
                       console.log('search_field_value',search_field)
                        
                     }} variant='contained' color='error'>Search</Button>
                </Stack>
                {!isFetching && <HorizontalBar data={bodyparts} searchedExercises={searchedExercises} setsearch={setsearch} />}


            </Stack>
            {search_filtered_exercises&& <Exercises data={search_filtered_exercises}/>}
        </Box>
    )
}

export default SearchExercise