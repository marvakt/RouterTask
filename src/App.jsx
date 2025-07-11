
import React from 'react'
import Registration from './Components/Registration'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App