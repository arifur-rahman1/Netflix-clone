import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Netflix from './pages/Netflix'
import Signup from './pages/Signup'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/' element={<Netflix/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
