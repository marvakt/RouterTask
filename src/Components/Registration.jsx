import React from 'react'
import { useNavigate } from 'react-router-dom'

function Registration() {
    const navigate=useNavigate()
  return (
    <>
    
    <input type="text"
    placeholder='Enter Your Name' />
    <br /><br />
    <input type="email"
    placeholder='Enter Your Email' />
    <br /><br />
    <input type="text"
    placeholder='enter Password' />
    <br /><br />
    <button onClick={()=>navigate('/login')}>submit</button>
    </>
  )
}

export default Registration