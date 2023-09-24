import React, {useState} from 'react'
import Register from './Register'
import Login from './Login'

export default function ToggleLogin() {

  const [click, setClick] = useState(false)

    function handleClick() {
        setClick(!click)
      }


  return (
    <div className='sign-in-register-page'>
       {click === false ? <Login handleClick={handleClick} /> : <Register /> }
    </div>
  )
}