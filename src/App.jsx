import { useState } from 'react'
import { BrowserRouter, Routes, Route   } from "react-router-dom";
import Home from './pages/home.jsx'
import './index.css'
import './css/menu.css'
import './css/main.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}



export default App
