import React from 'react'
import {Link} from 'react-router-dom'


export default function DisplayAllBooks({book, id}) {



  return (
    <div >
      <Link to={`/books/${id}`}>
      <button
          type='button'
          className='image-container'
        >
         <img 
            src={book.cover_url}  
            alt={book.title} 
            width={307}
            height={500}
        />
      </button>
      </Link>
    </div>
  )
}
