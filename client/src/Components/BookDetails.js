import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { BooksContext } from '../Context/Books'

export default function BookDetails() {

  const {booksData} = useContext(BooksContext)

  const [selectedBook, setSelectedBook] = useState({
    title: "",
    author: "",
    artist: "",
    genre: "",
    publisher: "",
    volume: "",
    cover_url: ""
  })

  const {id} = useParams()
  const parseId = parseInt(id)


useEffect(() => {
  const findBook = booksData.find(book => book.id === parseId)
  setSelectedBook(findBook)
  // eslint-disable-next-line
}, [parseId])
 

  return (
    <div className="popup">
        <ul className='popupUlStyle'>
        <li>
            <img 
            src={selectedBook.cover_url}  
            alt={selectedBook.title} 
            width={307}
            height={500}
        />
          </li>
          <li>TITLE: {selectedBook.title}</li>
          <li>AUTHOR: {selectedBook.author}</li>
          <li>ARTIST: {selectedBook.artist}</li>
          <li>GENRE: {selectedBook.genre}</li>
          <li>PUBLISHER: {selectedBook.publisher}</li>
          <li>VOL: {selectedBook.volume}</li>
           
      </ul>
    </div>
  )
}
