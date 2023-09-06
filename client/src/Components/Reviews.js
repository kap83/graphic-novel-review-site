import React, {useState, useEffect} from 'react'
import EditableComments from './EditableComments'
import ReadOnlyComments from './ReadOnlyComments'
import { Fragment } from 'react'

export default function Reviews({selectedBook}) {

const [isEditing, setIsEditing] = useState(false)
const [reviewsList, setReviewsList] = useState([])
const [editableComment, setEditableComment] = useState({
  id: "",
  comment: "",
  user_id: ""
})

const toggleEdit = (e, review) => {
  e.preventDefault()

  if(isEditing === false) {
    setIsEditing(true)

    const formValues = {
      id: review.id,
      comment: review.comment,
      user_id: review.user_id,
      book_id: selectedBook.id
    }
    setEditableComment(formValues)
  } else {
    setEditableComment([])
    setIsEditing(false)
  }

 
}

useEffect(() => {
  //if selectedBooks.reviews exists, setReviewsList(selectedBook.reviews)
  if(selectedBook.reviews) {
    setReviewsList(selectedBook.reviews)
  }
}, [selectedBook])


console.log("got it?", editableComment)
console.log("reviewList", reviewsList)

  return (
    <>
  <form>
    <table>
      <tbody>
        {reviewsList?.map(review => (
        <Fragment key={review.id}>
          {isEditing ? <EditableComments review={review} toggleEdit={toggleEdit} editableComment={editableComment} /> 
          : <ReadOnlyComments toggleEdit={toggleEdit} review={review} />}
        </Fragment>
        )
        )}
      </tbody>
    </table>
  </form>
    </>
  )
}
