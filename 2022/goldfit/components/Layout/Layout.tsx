import React from 'react'
import Navbar from './Navbar'
type Layouttype = {
    childcomponent?: React.ReactNode
}
function Layout(props: Layouttype) {
    return (
        <div>
            <Navbar />
            Layout
            {props.childcomponent}
        </div>
    )
}

export default Layout