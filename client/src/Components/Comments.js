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

  return (
    <>
  <form>
    <table>
      <tbody>
        {reviewsList?.map(review => (
        <Fragment key={review.id}>
          {isEditing ? 
            <EditableComments 
              review={review} 
              toggleEdit={toggleEdit} 
              editableComment={editableComment} 
            /> :
            <ReadOnlyComments 
              toggleEdit={toggleEdit} 
              review={review} 
            />}
        </Fragment>
        )
        )}
      </tbody>
    </table>
  </form>
    </>
  )
}
