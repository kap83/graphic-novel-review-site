import React, {useState, useContext} from 'react'
import { useParams } from 'react-router-dom' 
import { UserContext } from '../Context/User'
import { BooksContext } from '../Context/Books'

export default function AddComments({handleClicked}) {

const {currentUser} = useContext(UserContext)
// eslint-disable-next-line
const {handleNewReview} = useContext(BooksContext)

const {id} = useParams()
const parseId = parseInt(id)

// eslint-disable-next-line
const [newComment, setNewComment] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()
    
    const formValues = {
      user_id: currentUser.id,
      book_id: parseId,
      comment: newComment
    }


    fetch(`/books/${parseId}/reviews`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(formValues)
    })
    .then(res=> res.json())
    .then(newReview => handleNewReview(newReview))

    setNewComment("")
    handleClicked(false)
   
  
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>{currentUser.username}</td>
          </tr>
          <tr>
            <td>
              comment: 
              <input 
                type='text'
                onChange={(e) => setNewComment(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button type='submit'>SUBMIT</button>
            </td>
          </tr>
        </tbody>
      </table>
      </form>
    </div>
  )
}
