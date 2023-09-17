import React, {useState, useContext} from 'react'
import { UserContext } from '../Context/User'
import {Link} from 'react-router-dom'



export default function Profile() {
  
    const {currentUser} = useContext(UserContext)
    console.log(currentUser)

    const [showComment, setShowComment] = useState(false)
    const [reviewId, setReviewId] = useState(null)

    console.log(reviewId)

    const handleShowComment = (e) => {
     const clickedId = e.target.id
      setReviewId(clickedId === reviewId ? null : clickedId)
      setShowComment(!showComment)
    }

    
  return (
    <div>
      <h1>Hi {currentUser.first_name}</h1> 
      <h2>Reviewed Books: </h2>
      <table>
        <tbody>
          {currentUser?.reviewed_books.map(review => (
          <tr key={review.review_id}>
            <td>
             <Link
             to={`/books/${review.book_id}`}>
             <img 
                src={review.cover_url}  
                alt={review.title}
                width={100}
                height={100}
              />
             </Link>
            </td>
            <td>
              <button id={review.review_id} onClick={(e)=> handleShowComment(e)}>{ showComment ? "HIDE COMMENT" : "SHOW COMMENT"}</button>
            </td>
              {console.log(reviewId === review.review_id)}
          </tr>
      ))}
         
        </tbody>
      </table>


    </div>
  )
}