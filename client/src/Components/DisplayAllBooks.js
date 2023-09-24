import React from 'react'
import {Link} from 'react-router-dom'


export default function DisplayAllBooks({book, id}) {

  return (
    <div>
      <Link 
      to={`/books/${id}`}>
         <img 
            className='img1'
            src={book.cover_url}  
            alt={book.title} 
        />
      </Link>
    </div>
  )
}