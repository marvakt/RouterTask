import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const Navigate=useNavigate()
  return (
    <>
    <input type="text" 
    placeholder='Enter Your Name'/>
    <br /><br />
    <input type="email" 
    placeholder='Enter Your Password'/>
    <br /><br />
    <button onClick={()=>Navigate('/home')}>Login</button>
    </>
  )
}

export default Login