import React, {useState, useContext} from 'react'
import { UserContext  } from '../Context/User'

export default function Login({handleClick}) {

      // eslint-disable-next-line
      const {setLoggedIn, notLoggedInError, setCurrentUser} = useContext(UserContext)
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

      const displayError = error ? <i>{error}</i> : null
     

  return (
    <div className='loginStyle'>
    <h1>{notLoggedInError}</h1>
    <form onSubmit={handleSubmit}>
      <label style={{fontWeight: "bold"}}>
        USERNAME:
        <input 
        style={{marginLeft: "1%"}}
        type='text' 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label style={{fontWeight: "bold"}}>
          PASSWORD:
          <input 
          style={{marginLeft: "1%"}}
          type='password'
          placeholder='*********'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
      </label>
      <br />
      <h3 style={{marginLeft: "4%"}}>{displayError}</h3>
      <button style={{marginLeft: "27%"}} type='submit'>LOGIN</button>
      <button style={{marginLeft: "1%"}} onClick={handleClick}>REGISTER</button>
    </form>
    </div>
  )
}