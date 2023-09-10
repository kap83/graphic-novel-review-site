import React, {useState, useContext} from 'react'
import { useParams } from 'react-router-dom' 
import { UserContext } from '../Context/User'
import { BooksContext } from '../Context/Books'

export default function AddComments() {

const {currentUser} = useContext(UserContext)
// eslint-disable-next-line
const {handleAddedBook} = useContext(BooksContext)

const {id} = useParams()
const parseId = parseInt(id)

// eslint-disable-next-line
const [newComment, setNewComment] = useState("")

const handleSubmit = () => {
  e.preventDefault()
    
    const formValues = {
      user_id: currentUser.id,
      book_id: parseId,
      comment: newComment
    }

    //JSON.stringify(formValues)
  
}


  return (
    <div>
      <form>
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
            <button type='submit'>SUBMIT</button>
          </tr>
        </tbody>
      </table>
      </form>
    </div>
  )
}
