import React, {useContext} from 'react'
import { UserContext } from '../Context/User'
// eslint-disable-next-line
import UsersBooks from './UsersBooks'


export default function Profile() {
  
    const {currentUser} = useContext(UserContext)

    console.log(currentUser)

  return (
    <div>
      <h2>Hi {currentUser.first_name} this is profile!</h2> 
      {/* {currentUser.books.map(book => 
           <UsersBooks 
           key={book.id}
           book={book}
         />
        
      )} */}
    </div>
  )
}
