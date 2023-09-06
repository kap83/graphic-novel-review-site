import React, {useContext} from 'react'
import { BooksContext } from '../Context/Books'
import { useNavigate } from 'react-router-dom'

export default function ReadOnlyBookDetails({handleEditToggleClick, selectedBook, parseId}) {

  const {handleDeletedBook} = useContext(BooksContext)
  const navigate = useNavigate()

  const handleDeleteClick = () => {
    fetch(`/books/${parseId}`, {
      method: 'DELETE',
    })
    .then(() => {
      handleDeletedBook(selectedBook)
      navigate('/books')
    })
      
  }

  

  return (
    <>    
    <div className='liStyle'>
      <li>TITLE: {selectedBook.title}</li>
      <li>AUTHOR: {selectedBook.author}</li>
      <li>ARTIST: {selectedBook.artist}</li>
      <li>GENRE: {selectedBook.genre}</li>
      <li>PUBLISHER: {selectedBook.publisher}</li>
      <li>VOL: {selectedBook.volume}</li>
    </div>
    <div>
      <li>
        <button type='button' onClick={handleEditToggleClick}>EDIT</button>
        <button type='button' onClick={handleDeleteClick}>DELETE</button>
      </li>
    </div> 
    
</>
  )
}