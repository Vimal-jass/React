import React from 'react'
import Navbar from './pages/Navbar'
import { Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import Footer from './pages/Footer'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App