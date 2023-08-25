import React, {useState} from 'react'
import Register from './Register'
import Login from './Login'

export default function LoginDisplay() {

  const [click, setClick] = useState(false)

    function handleClick() {
        setClick(!click)
      }


  return (
    <div className='display'>
       {click === false ?  <Login handleClick={handleClick} /> : <Register /> }
    </div>
  )
}
