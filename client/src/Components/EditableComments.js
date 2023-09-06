import React from 'react'

export default function EditableComments({review, toggleEdit, editableComments}) {
//make a cancel btn
//include input tag/default values/etc 

  return (
    <>
       <tr>
      <td>{review.username}</td>
    </tr>
    <tr>
      <td>{editableComments.comment}</td>
      <td><button type='button' onClick={toggleEdit}>CANCEL</button></td>
    </tr>

    </>
  )
}
