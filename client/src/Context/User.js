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

const handleNewlyReviewedBook = (book) => {
  const updateBooksArr = [...currentUser.books, book]
  setCurrentUser({...currentUser, books: updateBooksArr})
}

//removes from the currentUser's book array, any book that was deleted

const handleDeletedBookReview = (delbook) => {
  console.log("in user", delbook)
  const updatedBookArr = currentUser.books.filter(book => book.id !== delbook.book_id)
  console.log("updated", updatedBookArr)
  setCurrentUser({...currentUser, books: updatedBookArr})
}

  const userValues = {
    currentUser,
    setCurrentUser,
    loggedIn,
    handleLogout,
    setLoggedIn,
    notLoggedInError,
    handleNewlyReviewedBook,
    handleDeletedBookReview
  }


  return <UserContext.Provider value={userValues}>{children}</UserContext.Provider>;
}
