import React, {useState, useContext} from 'react'
import { UserContext } from '../Context/User'
// eslint-disable-next-line
import EditableComments from './EditableComments'

export default function ReadOnlyComments({review, formatDateAndTime}) {

const {currentUser} = useContext(UserContext)

const [isEditing, setIsEditing] = useState(false)
const [editableComment, setEditableComment] = useState({
  id: "",
  comment: "",
  user_id: "",
  created_at: " "
})

const toggleEdit = (e, review) => {
  e.preventDefault()
  setIsEditing(true)
  const formValues = {
    id: review.id,
    comment: review.comment,
    user_id: review.user_id,
    book_id: review.id,
    created_at: review.created_at
  }
   setEditableComment(formValues)
}

const cancelEdit = () => {
  setIsEditing(false)
  setEditableComment("")
}

const handleEditFormChange =(e) => {
  e.preventDefault()
  
  setEditableComment(editableComment => ({...editableComment, comment: e.target.value}))
}


  return (
    <>
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
                  <td><button type='button' onClick={(e) => toggleEdit(e, review)}>EDIT</button></td>
                  <td><button>DELETE</button></td>
                </>
                    : null
            }
      </tr>
           
    </>
  )
}
