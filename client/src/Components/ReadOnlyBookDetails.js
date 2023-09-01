import React from 'react'

export default function ReadOnlyBookDetails({handleEditToggleClick, selectedBook}) {
  return (
    <>
      <li>TITLE: {selectedBook.title}</li>
      <li>AUTHOR: {selectedBook.author}</li>
      <li>ARTIST: {selectedBook.artist}</li>
      <li>GENRE: {selectedBook.genre}</li>
      <li>PUBLISHER: {selectedBook.publisher}</li>
      <li>VOL: {selectedBook.volume}</li>
      <li>
        <button type='button' onClick={handleEditToggleClick}>EDIT</button>
        <button>DELETE</button>
      </li>
</>
  )
}
