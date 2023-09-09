import React, {useState, useContext} from 'react'
import { UserContext } from '../Context/User'
import { BooksContext } from '../Context/Books'
import { useParams } from 'react-router-dom'
// eslint-disable-next-line
import EditableComments from './EditableComments'

export default function ReadOnlyComments({review, formatDateAndTime}) {

  //create a display btns fn w/ if/else statements

const {currentUser} = useContext(UserContext)
const {handleEditedBookReview} = useContext(BooksContext)

const {id} = useParams()
const parseId = parseInt(id)

const [isEditing, setIsEditing] = useState(false)
const [showSaveBtn, setShowSaveBtn] = useState(false) 
const [editableComment, setEditableComment] = useState({
  id: "",
  comment: "",
  user_id: "",
  created_at: " "
})

const handleShowSaveBtn = () => {
    setShowSaveBtn(true)
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
  setShowSaveBtn(false)
}

const handleEditFormChange =(e) => {
  e.preventDefault()
  setEditableComment(editableComment => ({...editableComment, comment: e.target.value}))
}

const handleSubmit = (e) => {
  e.preventDefault()

  fetch(`/books/${parseId}/reviews/${editableComment.id}`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editableComment)
  })
  .then(res=> res.json())
  .then(editedReview => handleEditedBookReview(editedReview))
  setIsEditing(false)
  setEditableComment("")
  setShowSaveBtn(false)
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
                    showSaveBtn === true ? 
                    <td>
                      <button type='submit'>SUBMIT</button>
                      </td> : 
                    <td>
                      <button type='button' onClick={(e) => {
                      handleShowSaveBtn(e)
                      toggleEdit(e, review)
                    }}>EDIT COMMENT</button></td>
                  }
                  <td>
                    <button>DELETE COMMENT</button>
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
