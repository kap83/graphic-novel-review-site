import React, { useContext} from 'react'
import { UserContext } from '../Context/User'
import {Link} from 'react-router-dom'



export default function Profile() {
  
    const {currentUser} = useContext(UserContext)
    
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
              {review.comment}
            </td>
            
          </tr>
      ))}
         
        </tbody>
      </table>


    </div>
  )
}