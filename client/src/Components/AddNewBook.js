import React, {useState, useContext} from 'react'
import { BooksContext } from '../Context/Books'
import { Link } from 'react-router-dom'

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
      <Link style={{textAlign: "center"}} to={'/books'}>
      <p >Back To Books</p>
      </Link>
      <form onSubmit={handleSubmit}>
        <label>
          TITLE: 
          <input
            type='text'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          AUTHOR: 
          <input
            type='text'
            name='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          ARTIST: 
          <input
            type='text'
            name='artist'
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          VOLUME: 
          <input
            type='text'
            name='volume'
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label> Cover URL: 
          <input
            type='url'
            name='cover_url'
            value={cover_url}
            onChange={(e) => setCover_url(e.target.value)}
          />
          <br />
          <br />
          <button type='submit'>ADD</button>
        </label>
      </form>
    </div>
  )
}