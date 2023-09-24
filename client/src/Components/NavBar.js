import React, {useContext} from 'react'
import { UserContext } from '../Context/User'
import { NavLink } from 'react-router-dom'
import '../index.css'

export default function NavBar() {


const {handleLogout} = useContext(UserContext)

const linkStyle = {
    color: "white"
}



return (
    <> 
    <div className="navBar">
    <NavLink
        to="/"
        style={linkStyle}
        >
          PROFILE
      </NavLink>
      <NavLink
        to="/books"
          style={linkStyle}>
            BOOKS
      </NavLink>
      <NavLink
        to="/addbook"
        style={linkStyle}
      >
        ADD BOOKS
      </NavLink>
    <button className='logoutBtn' onClick={handleLogout}>LOGOUT</button>
    </div>
    </>
  )
}