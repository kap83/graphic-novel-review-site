import React, {useState, useContext} from 'react'
import { BooksContext } from '../Context/Books'

export default function AddNewBook() {
const {setBooksData} = useContext(BooksContext)

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
            setBooksData(prevBooksData => [...prevBooksData, data])
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
            const message = Object.entries(data.errors).map(error => {
              const field = error[0]
              const errorMsg = error[1]
              // eslint-disable-next-line
              return ` ${field}: ` + ` ${errorMsg}` 
            })
            alert(message)
          })
        }
      }) 
        
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <table>
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
        </tbody>
      </table>
      <button type='submit'>ADD</button>
      </form>
    </div>
  )
}