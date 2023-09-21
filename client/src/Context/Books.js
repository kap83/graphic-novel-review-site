import React, {useState, useEffect, useContext} from 'react';
import { UserContext } from '../Context/User'

export const BooksContext = React.createContext();

export function BookProvider({children}) {
    const {handleNewlyReviewedBook} = useContext(UserContext)

    const [booksData, setBooksData] = useState([])


    useEffect(() => {
        fetch('/books')
        .then(res => res.json())
        .then(data => {
          setBooksData(data)
        })
    },[])

    const handleAddedBook = (newBook) => {
        const updateBooksData = [...booksData, newBook]
        setBooksData(updateBooksData)
    }

    const handleEditedBook = (editedBook) => {
         //create a new array with every book who's id DOESN'T match the updatedBook.id
        const updatedBooksArr = booksData.filter(book => book.id !== editedBook.id)
        //push updatedBook into the updatedBooksArr 
        updatedBooksArr.push(editedBook)
        //sort the books in alphabetical order by title
        updatedBooksArr.sort((a, b) => {
            if (a.title < b.title) return -1
            if (a.title > b.title) return 1
            return 0
        })
        setBooksData(updatedBooksArr)
    }

    const handleDeletedBook = (deletedBook) => {
        const updatedBooksArr = booksData.filter(book => book.id !== deletedBook.id)
        setBooksData(updatedBooksArr)
    }



    

    const handleEditedReview = (editedReview) => {
      //map through booksData
      const updatedBookData = booksData.map(book => {
          //if the book.id matches editedReview.book_id
         if (book.id === editedReview.book_id) {
          //create a variable that will hold all the reviews with ids that don't match the editedReview.id
          const updatedReviews = book.reviews.filter(review => review.id !== editedReview.id)
          //push editedReview into updatedReviews
          updatedReviews.push(editedReview)

          //make a copy of books w/the updated reviews
          return {
              ...book,
              reviews: updatedReviews
          }
         }
         return book
      }) 
      setBooksData(updatedBookData)

  }
      
  const handleNewReview = (newReview) => {
      const updatedBooksData = booksData.map(book => {
              if(book.id === newReview.book_id) {
                handleNewlyReviewedBook(book)
                  const updatedReviews = Object.values(book.reviews).filter(review => review.id !== newReview.id)
                  return {
                      ...book,
                  reviews: [...updatedReviews, newReview]
                  } 
              } 
          return book
      })
      setBooksData(updatedBooksData)
  }

  const handleDeletedReview = (deletedReview) => {
      const updatedBooksData = booksData.map(book => {
          if(book.id === deletedReview.book_id) {
              const updatedReviews = book.reviews.filter(review => review.id !== deletedReview.id)
              return {
                  ...book,
                  reviews: updatedReviews
              }
          }
          return book
      })
      setBooksData(updatedBooksData)
  }


    const booksValues ={
        booksData,
        setBooksData,
        handleEditedBook,
        handleDeletedBook,
        handleEditedReview,
        handleNewReview,
        handleDeletedReview,
        handleAddedBook
    }

    return <BooksContext.Provider value={booksValues}>{children}</BooksContext.Provider>

}