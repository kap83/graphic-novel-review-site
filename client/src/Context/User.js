import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext();

export function UserProvider({ children }) {
 
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [notLoggedInError, setNotLoggedInError] = useState('')

console.log("currentUser", currentUser)

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

//updates currentUser's books array with any new books the user reviews

const addNewlyReviewedBook = (book) => {
  const updateBooksArr = [...currentUser.books, book]
  setCurrentUser({...currentUser, books: updateBooksArr})
}

//removes from the currentUser's book array, any book that was deleted



  const userValues = {
    currentUser,
    setCurrentUser,
    loggedIn,
    handleLogout,
    setLoggedIn,
    notLoggedInError,
    addNewlyReviewedBook
  }


  return <UserContext.Provider value={userValues}>{children}</UserContext.Provider>;
}
