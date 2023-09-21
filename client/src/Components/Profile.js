import React, { useContext, Fragment} from 'react'
import { UserContext } from '../Context/User'
import {Link} from 'react-router-dom'

export default function Profile() {
  
const {currentUser} = useContext(UserContext)

    console.log(currentUser)
  return (
    <div>
      <h1>Hi {currentUser.first_name}</h1> 
      <h2>Reviewed Books:</h2>
      <p>Click the cover to go to the book's page </p>
      <table>
        <tbody>
          {currentUser?.books.map(book => (
          <tr key={book.id}>
            <td>
             <Link
             to={`/books/${book.id}`}>
             <img 
                src={book.cover_url}  
                alt={book.title}
                width={100}
                height={100}
              />
             </Link>
            </td>
            <td>
             {currentUser.reviews.map(review => (
              <Fragment key={review.id}>
                {review.book_id === book.id ? review.comment: null}
              </Fragment>
             )
             )}
            </td>

          </tr>
      ))}
        </tbody>
      </table>
    </div>
  )
}