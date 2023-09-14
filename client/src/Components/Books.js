import React, {useContext} from 'react'
import DisplayAllBooks from './DisplayAllBooks'
import { BooksContext } from '../Context/Books'



export default function Books() {

  const {booksData} = useContext(BooksContext)

  console.log(booksData)

  return (
    <div>
      {booksData?.map(book => 
        <DisplayAllBooks 
          key={book.id}
          book={book}
          id={book.id}
        />
        )}
    </div>
  )
}
