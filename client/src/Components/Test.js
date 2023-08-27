import React, {useContext} from 'react'
import { UserContext } from '../Context/User'

export default function Test() {

  const {firstName} = useContext(UserContext)

  return (
    <div>
      <h2>Hi again, {firstName}!</h2> 
    </div>
  )
}
