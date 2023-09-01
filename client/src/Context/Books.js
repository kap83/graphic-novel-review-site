import React, {useState, useEffect} from 'react';

export const BooksContext = React.createContext();

export function BookProvider({children}) {
    const [booksData, setBooksData] = useState([])

    useEffect(() => {
        fetch('/books')
        .then(res => res.json())
        .then(data => {
          console.log("fetched data", data)
          setBooksData(data)
        })
    },[])


    const booksValues ={
        booksData,
        setBooksData
    }

    return <BooksContext.Provider value={booksValues}>{children}</BooksContext.Provider>

}