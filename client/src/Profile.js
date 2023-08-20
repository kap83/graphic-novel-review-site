import React, {useContext} from 'react'
import { UserContext } from './Context/User'


export default function Profile() {
    const {firstName} = useContext(UserContext)

  return (
    <div>
      <h2>Hi {firstName}!</h2> 
    </div>
  )
}
