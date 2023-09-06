import React from 'react'

export default function EditableComments({review, formatDateAndTime, toggleEdit, editableComment, handleEditFormChange}) {



  if(editableComment.user_id === review.user_id) return (
    <>
       <tr>
      <td>{review.username}</td>
      <td>{formatDateAndTime}</td>
    </tr>
    <tr>
      <td>
      <>
             <input
            type='text'
            style={{width: "500px"}}
            defaultValue={editableComment.comment}
            onChange={handleEditFormChange}
          />
          </>
      </td>
      <td>
        <button type='button'>SAVE</button> 
        <button type='button' onClick={toggleEdit}>CANCEL</button>
        </td>
    </tr>

    </>
  )
}
