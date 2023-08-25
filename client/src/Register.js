import React, {useState, useContext} from 'react'
import { UserContext } from './Context/User'

export default function Register() {

    // eslint-disable-next-line
    const {setLoggedIn, currentUser, setCurrentUser} = useContext(UserContext)
    // eslint-disable-next-line
    const [firstName, setFirstName] = useState('')
    // eslint-disable-next-line
    const [lastName, setLastName] = useState('')
    // eslint-disable-next-line
    const [username, setUsername] = useState('')
    // eslint-disable-next-line
    const [password, setPassword] =useState('')
    // eslint-disable-next-line
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [error, setError] = useState(null)


    function handleSubmit(e) {
        e.preventDefault()
        const signupValues = {
            first_name: firstName,
            last_name: lastName,
            username: username,
            password: password,
            password_confirmation: passwordConfirmation
        }

        console.log("in register", signupValues)

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(signupValues)
        })
        .then(res=> res.json())
        .then(data => {
            console.log("response", data)
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

    console.log("current user", currentUser)
    const displayError = error ? <i>{error}</i> : null

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
            FIRST NAME:
            <input 
                type='text'
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
            />
        </label>
        <label>
            LAST NAME:
            <input 
                type='text'
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
            />
        </label>
        <label>
            USERNAME:
            <input 
                type='text'
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <label>
            PASSWORD:
            <input 
                type='text'
                placeholder='*********'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <label>
            CONFIRM PASSWORD: 
            <input 
                type='text'
                placeholder='*********'
                value={passwordConfirmation}
                required
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
        </label>
        <button type='submit'>SUBMIT</button>
        {displayError}
      </form>
    </div>
  )
}
