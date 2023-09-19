import React, {useState, useContext} from 'react'
import { UserContext } from '../Context/User'
import { BooksContext } from '../Context/Books'
import EditableComments from './EditableComments'

export default function ReadOnlyComments({review, formatDateAndTime}) {



const {currentUser, handleDeletedBookReview} = useContext(UserContext)
const {handleEditedReview, handleDeletedReview} = useContext(BooksContext)
const [isEditing, setIsEditing] = useState(false)
const [showSubmitBtn, setShowSubmitBtn] = useState(false) 
const [editableComment, setEditableComment] = useState({
  id: "",
  comment: "",
  user_id: "",
  created_at: " "
})


const handleSubmitSBtn = () => {
    setShowSubmitBtn(true)
}

const toggleEdit = (e, review) => {
  e.preventDefault()
  setIsEditing(true)
  const formValues = {
    id: review.id,
    comment: review.comment,
    user_id: review.user_id,
    created_at: review.created_at
  }
   setEditableComment(formValues)
}

const cancelEdit = () => {
  setIsEditing(false)
  setEditableComment("")
  setShowSubmitBtn(false)
}

const handleEditFormChange =(e) => {
  e.preventDefault()
  
  setEditableComment(editableComment => ({...editableComment, comment: e.target.value}))
}

const handleSubmit = (e) => {
  e.preventDefault()

  fetch(`/reviews/${editableComment.id}`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editableComment)
  })
  .then(res=> res.json())
  .then(editedReview => {
    
    handleEditedReview(editedReview)
  })
  setIsEditing(false)
  setEditableComment("")
  setShowSubmitBtn(false)
}

function handleDelete() {
  fetch(`/reviews/${review.id}`, {
    method: "DELETE",
  })
.then(handleDeletedReview(review), handleDeletedBookReview(review) )
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
        <tr>
      <td>{review.username}</td>
      <td>{formatDateAndTime}</td>
    </tr>
  <tr>
  {isEditing === true ? 
    <EditableComments 
      editableComment={editableComment}
      handleEditFormChange={handleEditFormChange}
      cancelEdit={cancelEdit}
      /> :
    <>
      <td>{review.comment}</td>
    </>  
    }
  </tr>
      <tr> 
            {
              currentUser.id === review.user_id ?   
                <>
                  {
                    showSubmitBtn === true ? 
                    <td>
                      <button type='submit'>SUBMIT</button>
                    </td> : 
                    <td>
                      <button type='button' onClick={(e) => {
                      handleSubmitSBtn(e)
                      toggleEdit(e, review)
                    }}>EDIT COMMENT</button></td>
                  }
                   <td>
                    <button type='button' onClick={handleDelete}>DELETE COMMENT</button>
                  </td>
                </>
                    : null
            }
      </tr>
        </tbody>
      </table>
    </form>
  
           
    </>
  )
}
