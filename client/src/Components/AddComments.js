import React, {useState, useContext} from 'react'
import { useParams } from 'react-router-dom' 
import { UserContext } from '../Context/User'
import { BooksContext } from '../Context/Books'

export default function AddComments({handleAddCommentBtn}) {

const {currentUser} = useContext(UserContext)

const {handleNewReview} = useContext(BooksContext)

const {id} = useParams()
const parseId = parseInt(id)
const [newComment, setNewComment] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()
    
    const formValues = {
      user_id: currentUser.id,
      book_id: parseId,
      comment: newComment
    }

    fetch(`/reviews`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(formValues)
    })
    .then(res => {
      if(res.ok) {
        res.json()
        .then(data => {
          handleNewReview(data)
          setNewComment("")
          handleAddCommentBtn(false)
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


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <span style={{fontWeight: "bold"}}>
                {currentUser.username}
              </span> 
            </td>
          </tr>
          <tr>
            <td>
                review:
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
