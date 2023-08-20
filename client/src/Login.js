import React, {useState, useContext} from 'react'
import { UserContext } from './Context/User'

export default function Login() {

      const {username, setUsername, setFirstName} = useContext(UserContext)
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
        .then((user) => {
          console.log(user)
          setUsername(user.username)
          setFirstName(user.first_name)

        }) 
        .catch(res=> setError(res.error))
      }

      const displayError = error ? <i>{error}</i> : '';
        



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
      {displayError}
      <button type='submit'>LOGIN</button>
    </form>
    </>
  )
}
