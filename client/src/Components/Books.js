import React, {useContext} from 'react'
import DisplayAllBooks from './DisplayAllBooks'
import { BooksContext } from '../Context/Books'
import {Link} from 'react-router-dom'


export default function Books() {

  const {booksData} = useContext(BooksContext)
  
  return (
    <div>
      <Link to={"/addbook"}>
        <h3>Add A Book</h3>
      </Link>
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
