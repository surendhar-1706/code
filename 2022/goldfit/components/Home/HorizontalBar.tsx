import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import Gym from '../../public/icons/gym.png'
import RightArrow from '../../public/icons/right-arrow.png';
import LeftArrow from '../../public/icons/left-arrow.png'

function HorizontalBar({ data,searchedExercises,setsearch }: any) {
   
    const [bodypart,setbodypart]= useState('')
    const rightarrow = () => {
        const { scrollNext } = useContext(VisibilityContext)
        return (<div onClick={() => { scrollNext() }}>
            <Image height={20} width={20} src={RightArrow} />
        </div>)
    }
    const leftarrow = () => {
        
        const { scrollPrev } = useContext(VisibilityContext)
        return (<div onClick={() => { scrollPrev() }}>
            <Image height={20} width={20} src={LeftArrow} />
        </div>)
    }
    return (
        <Stack sx={{
            width: {
                lg: '900px',
                xs: '100vw'
            }, mt: 10,
            px: {
                xs: 0
            },
            mx:
            {
                xs: 0
            }

        }}>
            <ScrollMenu



                LeftArrow={leftarrow}
                RightArrow={rightarrow}
            // Header={leftarrow}
            // Footer={rightarrow}
            >

                {
                    data.map((part: any) => {
                        return (
                            <Stack
                            onClick={()=>{

                                console.log('box clicked',part)
                                setsearch(part)
                               
                            }}
                            key={part} flexDirection={'column'} sx={{
                                ml: 2, mr: {
                                    lg: 4
                                },
                                height: {
                                    xs: '100px',
                                    lg: '100px'
                                },
                                p: {
                                    lg: 6,
                                    xs: 3
                                }, 
                                border: 1, 
                                
                                borderColor: 'grey.100', 
                                alignItems: 'center',
                                 boxShadow: 1,
                             
                              
                            }}
                            
                            >
                                <Box
                               
                                 position={'relative'}
                                  sx={{
                                    border: '', width: {
                                        lg: '150px',
                                        xs: '100px'

                                    },
                                    height: {
                                        lg: '100px',
                                        xs: '60px'
                                    },
                                    mb: {
                                        xs: 5
                                    },
                                    transition: "transform 0.15s ease-in-out",
                                    "&:hover":{transform: "scale3d(1.5, 1.5, 1.5)" }
                                }}>
                                    <Image objectFit='contain' layout='fill' src={Gym} />
                                </Box>
                                <Typography sx={{
textTransform:"capitalize",
fontWeight: 'Bold',
fontFamily:'sans-serif'

                                }}> {part}</Typography>
                            </Stack>
                        )
                    })
                }



            </ScrollMenu >
        </Stack >
    )
}

export default HorizontalBar

