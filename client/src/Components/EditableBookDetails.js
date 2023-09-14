import React from 'react'

export default function EditableBookDetails({handleEditToggleClick, handleEditFormChange, selectedBook}) {

//create css for input boxes. reminder to close and open to see changes 

  return (
    <div className='liStyle'>
      <li>
        COVER URL:
        <input 
            type='url'
            name='cover_url'
            defaultValue={selectedBook.cover_url}
            onChange={handleEditFormChange}
      />
      </li>
      <li>
        TITLE:
        <input 
        type='text'
        name='title'
        defaultValue={selectedBook.title}
        onChange={handleEditFormChange}
      />
      </li>
      <li>
      AUTHOR:
        <input 
         type='text'
         name='author'
         defaultValue={selectedBook.author}
         onChange={handleEditFormChange}
      />
      </li>
      <li>
        ARTIST:
        <input 
         type='text'
         name='artist'
         defaultValue={selectedBook.artist}
         onChange={handleEditFormChange}
      />
      </li>
      <li>
        VOLUME:
        <input 
            type='text'
            name='volume'
            defaultValue={selectedBook.volume}
            onChange={handleEditFormChange}
      />
      </li>
     <li>
      <button type='submit'>SAVE</button>
      <button onClick={handleEditToggleClick}>CANCEL</button>
     </li>
    </div>
  )
}