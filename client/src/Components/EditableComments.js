import React from 'react'

export default function EditableComments({editableComment, cancelEdit, handleEditFormChange}) {


  return (
    <>
     <td>
             <input
            type='text'
            style={{width: "500px"}}
            defaultValue={editableComment.comment}
            onChange={handleEditFormChange}
          />
      </td>
      <td>
        <button type='button' onClick={cancelEdit}>CANCEL</button>
        </td>
    </>
  )
}
