import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { BooksContext } from '../Context/Books'
import EditableBookDetails from './EditableBookDetails'
import ReadOnlyBookDetails from './ReadOnlyBookDetails'


export default function BookDetails() {

  const {booksData, setBooksData} = useContext(BooksContext)

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
    cover_url: ""
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


useEffect(() => {
  const findBook = booksData.find(book => book.id === parseId)
  setSelectedBook(findBook)
  setFormValues(findBook)
  // eslint-disable-next-line
}, [parseId])

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
  .then(updatedBook => {
    
    //create a new array with every book who's id DOESN'T match the updatedBook.id
    const updatedBooksArr = booksData.filter(book => book.id !== updatedBook.id)
   //push updatedBook into the updatedBooksArr 
    updatedBooksArr.push(updatedBook)
    //setBooksData by creating a copy of the previous BooksData and replacing it with updatedBookArr
  setBooksData(prevBooksData => [...prevBooksData, updatedBooksArr])

  })
  
  setIsEditing(false)
}


  return (
    <div>
        <ul>
          <li>
            <img 
              src={selectedBook.cover_url}  
              alt={selectedBook.title} 
              width={307}
              height={500}
            />
          </li>
          <form onSubmit={handleBookEditSubmit}>
          {isEditing ? (
              <EditableBookDetails 
                selectedBook={selectedBook} 
                handleEditFormChange={handleEditFormChange}
                handleEditToggleClick={handleEditToggleClick}
                />) : 
                (
                <ReadOnlyBookDetails 
                  selectedBook={selectedBook} 
                  handleEditToggleClick={handleEditToggleClick}
                  />
              )
            }
          </form>
      </ul>
    </div>
  )
}
