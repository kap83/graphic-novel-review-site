import React, {useContext} from 'react'
import { UserContext } from '../Context/User'


export default function Profile() {
  
    const {currentUser} = useContext(UserContext)



  return (
    <div>
      <h2>Hi {currentUser.first_name}!</h2> 
    </div>
  )
}
