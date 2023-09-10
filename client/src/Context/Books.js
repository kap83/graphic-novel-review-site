import React, {useState, useEffect} from 'react';

export const BooksContext = React.createContext();

export function BookProvider({children}) {
    const [booksData, setBooksData] = useState([])



    useEffect(() => {
        fetch('/books')
        .then(res => res.json())
        .then(data => {
          setBooksData(data)
        })
    },[])

    const handleEditedBook = (editedBook) => {
         //create a new array with every book who's id DOESN'T match the updatedBook.id
        const updatedBooksArr = booksData.filter(book => book.id !== editedBook.id)
        //push updatedBook into the updatedBooksArr 
        updatedBooksArr.push(editedBook)
        setBooksData(updatedBooksArr)
    }

    const handleEditedBookReview = (editedReview) => {
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

    const handleDeletedBook = (deletedBook) => {
        const updatedBooksArr = booksData.filter(book => book.id !== deletedBook.id)
        setBooksData(updatedBooksArr)
    }

    const booksValues ={
        booksData,
        setBooksData,
        handleEditedBook,
        handleDeletedBook,
        handleEditedBookReview
    }

    return <BooksContext.Provider value={booksValues}>{children}</BooksContext.Provider>

}