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
                pr:7,
                pl:15
            }}>
            <Navbar />

            {props.childcomponent}
            <Footer />
        </Box>
    )
}

export default Layout