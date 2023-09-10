import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { BooksContext } from '../Context/Books'
import EditableBookDetails from './EditableBookDetails'
import ReadOnlyBookDetails from './ReadOnlyBookDetails'
import DisplayCommentsBtn from './DisplayCommentsBtn'
import AddComments from './AddComments'

export default function BookDetails() {

  const {booksData, handleEditedBook} = useContext(BooksContext)

  const {id} = useParams()
  const parseId = parseInt(id)
 
  const [selectedBook, setSelectedBook] = useState({
    id: "",
    title: "",
    author: "",
    artist: "",
    genre: "",
    publisher: "",
    volume: "",
    cover_url: "",
    reviews: []
  })


  const [isEditing, setIsEditing] = useState(false)

  const [formValues, setFormValues] = useState({
    id: "",
    cover_url: "",
    title: "",
    author: "",
    artist: "",
    genre: "",
    publisher: "",
    volume: ""
   })

   const [clicked, setClicked] = useState(false)


useEffect(() => {
  const findBook = booksData?.find(book => book.id === parseId)
  setSelectedBook(findBook)
  setFormValues(findBook)
  // eslint-disable-next-line
}, [parseId, booksData])

const handleEditToggleClick = () => {
  setIsEditing(!isEditing)
}

const handleEditFormChange = (e) => {
  e.preventDefault() 
  setFormValues(formValues => ({...formValues, [e.target.name]: e.target.value}))
 
}

const handleBookEditSubmit = (e) => {
  e.preventDefault() 

  fetch(`/books/${parseId}`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formValues)
  })
  .then(res=> res.json())
  .then(editedBook => handleEditedBook(editedBook))
  
  setIsEditing(false)
}

const handleClicked =() => {
  setClicked(!clicked)
}

  return (
    <div>
        <ul className='ulStyle'>
        <li>
            <img 
              src={selectedBook.cover_url}  
              alt={selectedBook.title} 
            />
          </li>
          <form   
          onSubmit={handleBookEditSubmit}>
          {isEditing ? (
              <EditableBookDetails 
                selectedBook={selectedBook} 
                handleEditFormChange={handleEditFormChange}
                handleEditToggleClick={handleEditToggleClick}
                />) : 
                (
                <ReadOnlyBookDetails 
                  selectedBook={selectedBook} 
                  parseId={parseId}
                  handleEditToggleClick={handleEditToggleClick}
                  />
              )
            }
          </form>
      </ul>
      <DisplayCommentsBtn selectedBook={selectedBook}/>
      <button onClick={handleClicked}>ADD COMMENT</button> 
      {clicked === true ? <AddComments /> : null }
    </div>
  )
}