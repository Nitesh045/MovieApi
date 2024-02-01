import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Screen1 } from './Components/Screen1'
import {BrowserRouter, Route, Routes,} from'react-router-dom';
import { Screen2 } from './Components/Screen2'

function App() {
  

  return (
    <>
    <h2 style={{textAlign:"center"}}>Movies</h2>
    <Routes>
      <Route path='/' element={<Screen1/>}/>
      <Route path='screen2' element={<Screen2/>}/>
    </Routes>
    
     
      
    </>
  )
}

export default App
