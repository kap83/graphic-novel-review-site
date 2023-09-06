import React, {useContext} from 'react'
import { UserContext } from '../Context/User'
// eslint-disable-next-line


export default function Profile() {
  
    const {currentUser} = useContext(UserContext)


  return (
    <div>
      <h2>Hi {currentUser.first_name} this is profile!</h2> 
      <button>Edit User Info</button>
        {/* show input tags for first_name, last_name, username and password */}
        {/* possibly another button for password/password confirmation  */}

    </div>
  )
}