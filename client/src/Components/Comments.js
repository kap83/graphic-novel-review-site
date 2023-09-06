import React, {useState, useEffect} from 'react'
import EditableComments from './EditableComments'
import ReadOnlyComments from './ReadOnlyComments'
import { Fragment } from 'react'

export default function Comments({selectedBook}) {

const [isEditing, setIsEditing] = useState(false)
const [reviewsList, setReviewsList] = useState([])
const [editableComment, setEditableComment] = useState({
  id: "",
  comment: "",
  user_id: "",
  created_at: " "
})

console.log("test", editableComment)

const toggleEdit = (e, review) => {
  e.preventDefault()

  if(isEditing === false) {
    setIsEditing(true)

    const formValues = {
      id: review.id,
      comment: review.comment,
      user_id: review.user_id,
      book_id: selectedBook.id,
      created_at: selectedBook.created_at
    }
    setEditableComment(formValues)
  } else {
    setEditableComment({})
    setIsEditing(false)
  }
}

useEffect(() => {
  //if selectedBooks.reviews exists, setReviewsList(selectedBook.reviews)
  if(selectedBook && selectedBook.reviews) {
    setReviewsList(selectedBook.reviews)
  }
}, [selectedBook])

const handleEditFormChange =(e) => {
  e.preventDefault()
  
  setEditableComment(editableComment => ({...editableComment, comment: e.target.value}))
}

const handleSubmit = (e) => {
  e.preventDefault()

  fetch(`/books/{editableComment.book_id}/reviews/{:editComment.id}`)
}

  return (
    <>
  <form onSubmit={handleSubmit}>
    <table>
      <tbody>
        {reviewsList?.map(review => {
            let options = {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minutes: "numeric",
              seconds: "numeric"
            } 
            const timestamp = Date.parse(review.created_at)
            const formatDateAndTime = new Intl.DateTimeFormat('en-US', options).format(timestamp)
            return ( 
          <Fragment key={review.id}>
          {isEditing ? 
            <EditableComments 
              review={review} 
              toggleEdit={toggleEdit} 
              editableComment={editableComment} 
              handleEditFormChange={handleEditFormChange}
              formatDateAndTime={formatDateAndTime}
            /> :
            <ReadOnlyComments 
              toggleEdit={toggleEdit} 
              review={review} 
              formatDateAndTime={formatDateAndTime}
            />}
        </Fragment>
            )
        }
        )}
      </tbody>
    </table>
  </form>
    </>
  )
}
