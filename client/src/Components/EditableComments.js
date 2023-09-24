import React from 'react'

export default function EditableComments({editableComment, handleEditFormChange}) {

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
    </>
  )
}
