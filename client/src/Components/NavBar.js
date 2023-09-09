import React, {useContext} from 'react'
import { UserContext } from '../Context/User'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

  // eslint-disable-next-line
  const {handleLogout, loggedIn} = useContext(UserContext)

const linkStyle = {
    color: "white"
}


if (loggedIn) return (
    <> 
    <div className="navBar">
    <NavLink
        to="/profile"
        style={linkStyle}
        >
          Profile
      </NavLink>
      <NavLink
        to="/books"
          style={linkStyle}>
            Books
      </NavLink>
    <button onClick={handleLogout}>LOGOUT</button>
    </div>
  
    </>
  )
}