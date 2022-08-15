import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type LayoutType ={
    childelement?:React.ReactNode
}

function Layout(props:LayoutType) {
  return (
    <div className='bg-gray-900 h-screen relative'> 
       <div className=' absolute -top-12 opacity-40  -right-20 filter blur-3xl bg-rose-800 w-2/6 h-3/6 rounded-full '> </div>
      <div className='   absolute -top-12 opacity-30 right-96 filter blur-3xl bg-sky-800 w-2/6 h-3/6 rounded-full'></div>
       <Navbar/>
     
     {props.childelement}
     <Footer/>
      
        </div>
  )
}

export default Layout