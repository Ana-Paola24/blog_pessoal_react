import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()

  return (
    <div>
        <h2 className='text-slate-900 text-5xl'>Login</h2>
        <div>
            <button type='submit' onClick={() => {navigate('/home')}}
                className='hover:underLine mx-4'>Login useNavigate</button>    
            <Link to='/home' className="hover:underline mx-4">Login por link</Link>        
        </div>    
    </div>
  )
}

export default Login
