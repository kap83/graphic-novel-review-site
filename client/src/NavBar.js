import React, {useContext} from 'react'
import { UserContext } from './Context/User'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

  const {loggedIn} = useContext(UserContext)

const linkStyle = {
    color: "white"
}

  return (
    <div className="navBar">
      <NavLink
        to="/login"
        style={linkStyle}
      >
        Login
      </NavLink>
    {loggedIn && <NavLink
        to="/profile"
        style={linkStyle}
        >
          Profile
      </NavLink>}
      

    </div>
  )
}
