import React from 'react'

export default function EditableComments({review, toggleEdit, editableComment}) {

  //review.comment - editableComment display all the others. 

  //patch & delete 

let options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minutes: "numeric",
  seconds: "numeric"
}
const formatDateAndTIme = new Intl.DateTimeFormat('en-US', options).format(editableComment.created_at)



  if(editableComment.user_id === review.user_id) return (
    <>
       <tr>
      <td>{review.username}</td>
      <td>{formatDateAndTIme}</td>
    </tr>
    <tr>
      <td>
      <>
             <input
            type='text'
            style={{width: "500px"}}
            defaultValue={editableComment.comment}
          // onChange={}
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
