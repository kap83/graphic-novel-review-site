import React, { useContext} from 'react'
import { UserContext } from '../Context/User'
import {Link} from 'react-router-dom'



export default function Profile() {
  
    const {currentUser} = useContext(UserContext)
    
  return (
    <div>
      <h1>Hi {currentUser.first_name}</h1> 
      <h2>Reviewed Books:</h2>
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
          </tr>
      ))}
        </tbody>
      </table>
    </div>
  )
}