import { Box } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
type Layouttype = {
    childcomponent?: React.ReactNode
}
function Layout(props: Layouttype) {
    return (
        <Box
            sx={{
                
              
                    pr:{
                        lg:7,
                        xs:1
                    },
                    pl:{
                        lg:15,
                        xs:1
                    }
                
            }}>
            <Navbar />

            {props.childcomponent}
         
            <Footer/>
        </Box>
    )
}

export default Layout