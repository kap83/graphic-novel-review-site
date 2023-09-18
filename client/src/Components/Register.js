import React, {useState, useContext} from 'react'
import { UserContext } from '../Context/User'

export default function Register() {

    const {setLoggedIn, setCurrentUser} = useContext(UserContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] =useState('')
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

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(signupValues)
        })
        .then(res=> res.json())
        .then(data => {
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
    <div className='registerStyle'>
      <form onSubmit={handleSubmit}>
      <label style={{fontWeight: "bold", marginLeft: "25%"}}>
            FIRST NAME:
            <input 
                style={{marginLeft: "25%"}}
                type='text'
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
            />
        </label>
        <br />
        <br />
        <label style={{fontWeight: "bold", marginLeft: "25%"}}>
            LAST NAME:
            <input 
                style={{marginLeft: "25%"}}
                type='text'
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
            />
        </label>
        <br />
        <br />
        <label style={{fontWeight: "bold", marginLeft: "25%"}}>
            USERNAME:
            <input 
                style={{marginLeft: "25%"}}
                type='text'
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <br />
        <br />
        <label style={{fontWeight: "bold", marginLeft: "25%"}}>
            PASSWORD:
            <input 
                style={{marginLeft: "25%"}}
                type='text'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <br />
        <br />
        <label style={{fontWeight: "bold", marginLeft: "25%"}}>
            RE-ENTER PASSWORD: 
            <input 
                style={{marginLeft: "25%"}}
                type='text'
                value={passwordConfirmation}
                required
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
        </label>
        <br />
        <button type='submit' style={{marginLeft: "40%"}}>SUBMIT</button>
        {displayError}
      </form>
      </div>
    
  )
}