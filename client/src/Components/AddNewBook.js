import React, {useState, useContext} from 'react'
import { UserContext  } from '../Context/User'
import { BooksContext } from '../Context/Books'
import { Link } from 'react-router-dom'

export default function AddNewBook() {
const {currentUser} = useContext(UserContext)
const {setBooksData} = useContext(BooksContext)

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [artist, setArtist] = useState('')
    const [genre, setGenre] = useState('')
    const [publisher, setPublisher] = useState('')
    const [volume, setVolume] = useState('')
    const [coverURL, setCoverURL] = useState('')
    const [userID, setUserID] = useState("") 
    const [checked, setChecked] = useState(false)
  
    const handleCheckbox = () => {
      setChecked(!checked)
      setUserID(checked === true ? null : currentUser.id)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const values = {
       title: title,
       author: author,
       artist: artist,
       genre: genre,
       publisher: publisher,
       volume: volume,
       cover_url: coverURL,
       user_id: userID
      }

      fetch('/books', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(values)
      })
      .then(res => res.json())
      .then(updatedBookData => {
        setBooksData(prevBooksData => [...prevBooksData, updatedBookData])
      })

      setTitle("")
      setAuthor("")
      setArtist("")
      setGenre("")
      setPublisher("")
      setVolume("")
      setCoverURL("")
      setUserID("")
      setChecked("")
    }

    console.log(checked)

  return (
    <div>
      <Link to={'/books'}>
      <p>Back To Books</p>
      </Link>
      <form onSubmit={handleSubmit}>
        <label>
          TITLE: 
          <input
            type='text'
            name='title'
            value={title}
            required
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
            required
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
            required
            onChange={(e) => setArtist(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          GENRE: 
          <input
            type='text'
            name='genre'
            value={genre}
            required
            onChange={(e) => setGenre(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          PUBLISHER: 
          <input
            type='text'
            name='publisher'
            value={publisher}
            required
            onChange={(e) => setPublisher(e.target.value)}
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
            required
            onChange={(e) => setVolume(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label> Cover URL: 
          <input
            type='url'
            name='coverURL'
            value={coverURL}
            required
            onChange={(e) => setCoverURL(e.target.value)}
          />
          <br />
          <br />
          <label>
            Check box if you would like to add this book to your favorites list
            <input 
              type='checkbox'
              value={checked}
              onChange={handleCheckbox}
            />
          </label>
          <br />
          <br />
          <button type='submit'>ADD</button>
        </label>
      </form>
    </div>
  )
}
