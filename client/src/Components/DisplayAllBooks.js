import React from 'react'
import {Link} from 'react-router-dom'


export default function DisplayAllBooks({book, id}) {



  return (
    <div className='image-container'>
      <Link to={`/books/${id}`}>
         <img 
            src={book.cover_url}  
            alt={book.title} 
            width={307}
            height={500}
        />
      </Link>
    </div>
  )
}
