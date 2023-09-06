import React from 'react'

export default function ReadOnlyComments({review, formatDateAndTime, toggleEdit}) {
  return (
    <>
    
                    <tr>
                      <td>{review.username}</td>
                      <td>{formatDateAndTime}</td>
                    </tr>
                    <tr>
                      <td>{review.comment}</td>
                      <td><button type='button' onClick={(e)=> toggleEdit(e, review)}>EDIT</button></td>
                      <td><button>DELETE</button></td>
                    </tr>
           
    </>
  )
}
