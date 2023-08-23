import React, {useContext} from 'react'
import { UserContext } from './Context/User'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

  // eslint-disable-next-line
  const {loggedIn, handleLogout} = useContext(UserContext)

const linkStyle = {
    color: "white"
}





  return (
    <div className="navBar">
      <NavLink
        to="/"
        style={linkStyle}
      >
        Login
      </NavLink>
    <NavLink
        to="/profile"
        style={linkStyle}
        >
          Profile
      </NavLink>
      <NavLink
        to="/test"
          style={linkStyle}>
            Test
      </NavLink>
    <button onClick={handleLogout}>LOGOUT</button>
    </div>
  )
}
