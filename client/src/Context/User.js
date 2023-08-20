import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState('');
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  useEffect(()=> {
    fetch("/me").then(res=> {
      if (res.ok) {
        res.json()
        .then(user => {
          setCurrentUser(user)
          setLoggedIn(true)
        })
        .catch(error => console.log(error))
      }
    })
  }, [])


  const userValue = {
    username,
    setUsername,
    firstName,
    setFirstName,
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn
  };




  return <UserContext.Provider value={userValue}>{children}</UserContext.Provider>;
}
