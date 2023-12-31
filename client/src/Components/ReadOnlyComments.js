import React, {useState, useContext} from 'react'
import { UserContext } from '../Context/User'
import { BooksContext } from '../Context/Books'
import EditableComments from './EditableComments'

export default function ReadOnlyComments({review, formatDateAndTime}) {

const {currentUser, handleEditedBookReviewArr, handleDeletedBookReview} = useContext(UserContext)
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
  .then(res => {
    if(res.ok) {
      res.json()
      .then(data => {
        handleEditedBookReviewArr(data)
        handleEditedReview(data)
        setIsEditing(false)
        setEditableComment("")
        setShowSubmitBtn(false)
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

function handleDelete() {
  fetch(`/reviews/${review.id}`, {
    method: "DELETE",
  })
.then(handleDeletedReview(review), handleDeletedBookReview(review) )
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <table style={{width: '450px'}}>
        <tbody>
        <tr>
      <td>
        <span style={{fontWeight: 'bold', paddingRight: '1%'}}>
          {review.username} 
        </span>
          wrote on {formatDateAndTime}
        </td>
    </tr>
  <tr>
  {isEditing === true ? 
    <EditableComments 
      editableComment={editableComment}
      handleEditFormChange={handleEditFormChange}
      /> :
    <>
      <td>{review.comment}</td>
    </>  
    }
  </tr>
      <tr > 
            {
              currentUser.id === review.user_id ?   
                <>
                  {
                    showSubmitBtn === true ? 
                    <td >
                      <button type='submit'>SUBMIT</button>
                      <button type='button' onClick={cancelEdit}>CANCEL</button>
                    </td> 
                    : 
                    <td style={{paddingBottom: '20px'}}>
                      <button type='button' onClick={(e) => {
                      handleSubmitSBtn(e)
                      toggleEdit(e, review)
                    }}>EDIT REVIEW</button>
                    <span style={{paddingLeft: '2px'}}>
                      <button type='button' 
                        onClick={handleDelete}>
                          DELETE REVIEW
                      </button>
                    </span>
                    </td>
                  }
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
