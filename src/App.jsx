import { useState } from 'react'
import { BrowserRouter, Routes, Route   } from "react-router-dom";
import Home from './pages/home.jsx'
import Bio from './pages/biografia.jsx'
import His from './pages/historia.jsx'
//import Home from './pages/referencias.jsx'
//import Home from './pages/downloads.jsx'
import './index.css'
import './css/menu.css'
import './css/main.css'
import './css/home.css'
import './css/biografia.css'
import './css/historia.css'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/biografia' element={<Bio/>}/>
        <Route path='/historia' element={<His/>}/>


      </Routes>
    </BrowserRouter>
    
  )
}



export default App
