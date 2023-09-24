import React, {useState, useContext} from 'react'
import { BooksContext } from '../Context/Books'

export default function AddNewBook() {
const {handleAddedBook} = useContext(BooksContext)

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [artist, setArtist] = useState('')
    const [volume, setVolume] = useState('')
    const [cover_url, setCover_url] = useState('')
    const [userID, setUserID] = useState("") 
 
    const handleSubmit = (e) => {
      e.preventDefault()
      const values = {
       title: title,
       author: author,
       artist: artist,
       volume: volume,
       cover_url: cover_url,
       user_id: userID
      }

      fetch('/books', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(values)
      })
      .then(res => {
        if(res.ok) {
          res.json()
          .then(data => {
            handleAddedBook(data)
            setTitle("")
            setAuthor("")
            setArtist("")
            setVolume("")
            setCover_url("")
            setUserID("")
          })
        }
        else {
          res.json()
          .then(data => {
            const errorMsg = data.errors.map(error => {
              return ` ${error}`
            })
            alert(errorMsg)
          })
        }
      }) 
        
    }

  return (
    <div>
      <h1>Add Book</h1>
      <p 
        style={{margin: '0'}}>
          <span 
            style={{fontWeight: 'bold', textDecoration: 'underline'}}>
              NOTE
              </span>
              <span style={{fontWeight: 'bold', marginRight: '1px'}}>:
              </span> 
               IF THE BOOK ONLY HAS ONE VOLUME
      </p>
      <p 
        style={{margin: '0'}}>
          PUT A 1 UNDER VOLUME
      </p>
      <form onSubmit={handleSubmit}>
      <table 
        style={{fontSize: 'larger', margin: '5%  35% '}}>
        <tbody>
          <tr>
            <td>
              TITLE: 
            </td>
            <td>
              <input
                type='text'
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
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
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
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
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
            Cover URL:
            </td>
            <td>
            <input
              type='url'
              name='cover_url'
              value={cover_url}
              onChange={(e) => setCover_url(e.target.value)}
            />
            </td>
          </tr>
          <tr>
            <br />
            <td>
              <button 
                style={{marginLeft: '25%'}} 
                type='submit'>
                SUBMIT
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      </form>
    </div>
  )
}