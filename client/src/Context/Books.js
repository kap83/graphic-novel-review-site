import React, {useState, useEffect} from 'react';

export const BooksContext = React.createContext();

export function BookProvider({children}) {
    const [booksData, setBooksData] = useState([])

    console.log("in bookContext", booksData)


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

    const handleEditedBookReview = (editedReview) => {
        // Map through booksData
        const updatedBookData = booksData?.map((book) => {
          // If the book.id matches editedReview.book_id
          if (book.id === editedReview.book_id) {
            // Create an updated user_review_details array with the edited review
            const updatedReviews = book.user_review_details.map((review) => {
              if (review.review_id === editedReview.id) {
                // Update the review with the edited data
                return {
                  ...review,
                  comment: editedReview.comment,
                  created_at: editedReview.created_at,
                };
              }
              return review;
            });
            // Make a copy of the book with the updated user_review_details
            return {
              ...book,
              user_review_details: updatedReviews,
            };
          }
          return book;
        });
        
  
        setBooksData(updatedBookData)
      };

    const handleNewReview = (newReview) => {
        const updatedBooksData = booksData.map(book => {
                if(book.id === newReview.book_id) {
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
        handleEditedBookReview,
        handleNewReview,
        handleDeletedReview,
        handleAddedBook
    }

    return <BooksContext.Provider value={booksValues}>{children}</BooksContext.Provider>

}