import React, {useContext} from 'react'
import { BooksContext } from '../Context/Books'
import { useNavigate } from 'react-router-dom'

export default function ReadOnlyBookDetails({handleEditToggleClick, selectedBook, parseId}) {

  const {handleDeletedBook} = useContext(BooksContext)
  const navigate = useNavigate()

  // eslint-disable-next-line
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
    
     <tr>
      <td>
        TITLE: 
      </td>
        <td>
          {selectedBook.title}
        </td>
     </tr>
     <tr>
      <td>
        AUTHOR:
      </td>
      <td>
        {selectedBook.author}
      </td>
     </tr>
     <tr>
      <td>
        ARTIST:
      </td>
      <td>
        {selectedBook.artist}
      </td>
     </tr>
     <tr>
      <td>
        VOLUME: 
      </td>
      <td>
      {selectedBook.volume}
      </td>
     </tr>
     <tr>
        <td>
          {/* <button type='button' onClick={handleEditToggleClick}>EDIT</button> */}
          {/* <button type='button' onClick={handleDeleteClick}>DELETE</button> */}
        </td>
      </tr>
    </>
  )
}
