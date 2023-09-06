import React from 'react'

export default function ReadOnlyComments({review, toggleEdit}) {
  return (
    <>
    
                    <tr>
                      <td>{review.username}</td>
                    </tr>
                    <tr>
                      <td>{review.comment}</td>
                      <td><button type='button' onClick={(e)=> toggleEdit(e, review)}>EDIT</button></td>
                      <td><button>DELETE</button></td>
                    </tr>
           
    </>
  )
}
