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

    const handleDeletedBook = (deletedBook) => {
        const updatedBooksArr = booksData.filter(book => book.id !== deletedBook.id)
        setBooksData(updatedBooksArr)
    }

    const booksValues ={
        booksData,
        setBooksData,
        handleEditedBook,
        handleDeletedBook
    }

    return <BooksContext.Provider value={booksValues}>{children}</BooksContext.Provider>

}