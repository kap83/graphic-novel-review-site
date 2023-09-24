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
  .then(res => {
    if(res.ok) {
      res.json()
      .then(data=> {
        handleEditedBook(data)
        setIsEditing(false)
      })
    }
    else {
      res.json()
      .then(data=> {
        const errorMsg = data.errors.map(error => {
          return ` ${error}`
        })
        alert(errorMsg)
      })
    }
  })

}

const handleClicked =() => {
  setClicked(!clicked)
}

  return (
  <>
    <div 
      style={{padding: "20%"}}
    >
    <div className='one'
        style={{float: "left"}}
       >
       <img 
            className='img1'
              src={selectedBook.cover_url}  
              alt={selectedBook.title} 
            />
      </div>
        <div className='two'>
          <form   
            onSubmit={handleBookEditSubmit}
            >
          <table style={{float: "left", border: "solid green 2px"}}>  
            <tbody>
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
            </tbody>
          </table>
          </form>
    </div>
    </div>
    <div>
    <DisplayCommentsBtn selectedBook={selectedBook}/>
        <button onClick={handleClicked}>{clicked === true ? "FORGET IT" : "ADD COMMENT"}</button> 
        {clicked === true ? <AddComments handleClicked={handleClicked}/> : null }
    </div>
  </>
  )
}