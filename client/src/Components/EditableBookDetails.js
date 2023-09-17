import React from 'react'

export default function EditableBookDetails({handleEditToggleClick, handleEditFormChange, selectedBook}) {

//create css for input boxes. reminder to close and open to see changes 

  return (
    <>
      <tr>
        <td>
          COVER URL: 
        </td>
        <td>
        <input 
            type='url'
            name='cover_url'
            defaultValue={selectedBook.cover_url}
            onChange={handleEditFormChange}
      />
        </td>
      </tr>
      <tr>
      <td>
        TITLE: 
      </td>
        <td>
          <input 
          type='text'
          name='title'
          defaultValue={selectedBook.title}
          onChange={handleEditFormChange}
        />
        </td>
     </tr>
     <tr>
      <td>
        AUTHOR:
      </td>
      <td>
        <input 
          type='text'
          name='author'
          defaultValue={selectedBook.author}
          onChange={handleEditFormChange}
        />
      </td>
     </tr>
     <tr>
      <td>
        ARTIST:
      </td>
      <td>
        <input 
          type='text'
          name='artist'
          defaultValue={selectedBook.artist}
          onChange={handleEditFormChange}
        />
      </td>
     </tr>
     <tr>
      <td>
        VOLUME: 
      </td>
      <td>
        <input 
            type='text'
            name='volume'
            defaultValue={selectedBook.volume}
            onChange={handleEditFormChange}
        />
      </td>
     </tr>
     <tr>
      <td>
      <button type='submit'>SAVE</button>
      <button onClick={handleEditToggleClick}>CANCEL</button>
      </td>
     </tr>
    </>
  )
}