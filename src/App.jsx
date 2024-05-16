import React from 'react'
import Nav from './component/Nav'
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Register from './component/Register'
import Show from './component/Show'
const App = () => {
  return (
    <div >
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/show" element={<Show />} />
      </Routes>  
    </div>
  )
}

export default App