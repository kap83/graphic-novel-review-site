import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext();

export function UserProvider({ children }) {
 
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [notLoggedInError, setNotLoggedInError] = useState('')

  console.log("currentUser1", currentUser)

  useEffect(()=> {
    fetch("/me").then(res=> {
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

//works
const handleNewlyReviewedBook = (newReview, book) => {
 // Create new arrays with the updated data
  const updatedBooksArr = [...currentUser.books, book]
  const updatedReviewsArr = [...currentUser.reviews, newReview]

  // Update the state with both updated arrays
  setCurrentUser({
    ...currentUser,
    books: updatedBooksArr,
    reviews: updatedReviewsArr,
  });
};

//works
const handleEditedBookReviewArr = (updatedReview) => {
  const updatedReviewArr = currentUser.reviews.filter(review => review.id !== updatedReview.id)
  updatedReviewArr.push(updatedReview)
  setCurrentUser({...currentUser, reviews: updatedReviewArr})
}

//removes book from the currentUser's book array, when associated review that is deleted

//works
const handleDeletedBookReview = (delBook) => {
  const updatedBookArr = currentUser.books.filter(book => book.id !== delBook.book_id)
  setCurrentUser({...currentUser, books: updatedBookArr})
}

//works
const handleCurrentUserDeletedBook = (delBook) => {
  console.log("in del", delBook, delBook.id)
  const updatedBooksArr = currentUser.books.filter(book => book.id !== delBook.id)
  const updatedReviewsArr = currentUser.reviews.filter(review => review.book_id !== delBook.id)
  setCurrentUser({...currentUser, 
    books: updatedBooksArr,
    reviews: updatedReviewsArr
  })
  
}

  const userValues = {
    currentUser,
    setCurrentUser,
    loggedIn,
    handleLogout,
    setLoggedIn,
    notLoggedInError,
    handleNewlyReviewedBook,
    handleDeletedBookReview,
    handleEditedBookReviewArr, 
    handleCurrentUserDeletedBook
  }


  return <UserContext.Provider value={userValues}>{children}</UserContext.Provider>;
}
