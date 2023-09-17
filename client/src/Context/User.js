import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext();

export function UserProvider({ children }) {
 
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [notLoggedInError, setNotLoggedInError] = useState('')



  useEffect(()=> {
    fetch("/auth").then(res=> {
      if (res.ok) {
        res.json()
        .then(data => {
          setCurrentUser(data)
          setLoggedIn(true)
        })
      } else {
        res.json()
        .then(data => {
          
          setNotLoggedInError(data.error)
        })
      }
    })
  }, [])

  
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(()=> {
      setCurrentUser()
      setLoggedIn(false)
    })
  }

  const userValues = {
    currentUser,
    setCurrentUser,
    loggedIn,
    handleLogout,
    setLoggedIn,
    notLoggedInError
  }


  return <UserContext.Provider value={userValues}>{children}</UserContext.Provider>;
}
