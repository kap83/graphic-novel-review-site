import React, {useState, useContext} from 'react'
import { UserContext  } from './Context/User'
import Profile from './Profile'

export default function Login({handleClick}) {

      const {setLoggedIn, currentUser, setCurrentUser} = useContext(UserContext)
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')
      const [error, setError] = useState(null)
    


      function handleSubmit(e) {
        e.preventDefault()
        const loginValues = {
          username: username,
          password: password
        }

        fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginValues)
        })
        .then(res=> res.json())
        .then(
          (data) => {
            console.log(data)
            if(data.username === username) {
              setCurrentUser(data)
              setLoggedIn(true)
              setUsername('')
              setPassword('')
            } else {
              setError(data.error.login)
            }
        }) 
      }
      
      // eslint-disable-next-line
      const redirectToProfilePageAfterSignIn = currentUser ? <Profile /> : null
      const displayError = error ? <i>{error}</i> : null
      


  return (
    <>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <label>
        USERNAME:
        <input 
        type='text' 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        />
      </label>
      <label>
          PASSWORD:
          <input 
          type='password'
          placeholder='*********'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
      </label>
      <button type='submit'>LOGIN</button>
      {displayError}
    </form>
    <button onClick={handleClick}>Click to Register</button>
    </>
  )
}
