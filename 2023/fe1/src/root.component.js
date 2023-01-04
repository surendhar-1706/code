import React from 'react'
import ShowCard from './pages/ShowCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function Root() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<ShowCard text={'ui component fr'} />} />
        <Route path="/diff" element={<ShowCard text={'ui component show different component'} />} />
      </Routes >
    </BrowserRouter>
  )
}

export default Root