import React from 'react'
import { useDispatch } from 'react-redux'
import { login,logout } from '../features/user'

function Login() {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>{
            dispatch(login({name:"Stan",age:29,email:"pedro.@gmail.com"}))
        }}
            
            >
                Login
            
            </button>

              {/* Logout */}

            <button onClick={()=>{
            dispatch(logout())
        }}
            
            >
                Logout
      </button>
    </div>
  )
}

export default Login