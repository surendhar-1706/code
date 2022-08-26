import { Box, Button, Stack, Typography } from '@mui/material'
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import LogoImage from '../../public/images/Logo.png'
function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const router = useRouter()
    return (
        <Box>
            <Stack

               
                sx={{
columnGap:20,
pt:3
                }}
                direction="row"
                alignItems={'center'}

            >
                <Image onClick={()=>{router.push('/')}} src={LogoImage} />

            <Stack direction={'row'} sx={{
                    columnGap:5,
                    alignItems:'center' , 
                    display:{
                        xs:'none',
                        lg:'flex'
                    }              
            }}>
            <Link href={'/'} passHref>
                    <a style={{ textDecoration: 'none', }} >
                        <Typography sx={{
                            borderBottom: 2,
                            borderColor: 'error.main',
                            color: 'black'

                        }} >Home
                        </Typography> </a>
                </Link>
                <Button sx={{
                   
                }} disabled={true} >
                    <a style={{ textDecoration: 'none' }}>
                        <Typography textTransform={'capitalize'} color={'black'}>Exercises</Typography>
                    </a>
            </Button>
            </Stack>
            <Box
            sx={{
                display:{
                    xs:'none',
                    lg:'none'
                },
                
            }}
            > 
            <div onClick={toggleDrawer}>Show</div>
                <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                style={{"height" : "100%"}}
             
            >
             <div onClick={toggleDrawer}>Exit</div>
            </Drawer>
            
            </Box>
            </Stack>
        </Box>
    )
}

export default Navbar