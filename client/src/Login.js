import React, {useState} from 'react'

export default function Login({onLogin}) {
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')
   
      function handleSubmit(e) {
        e.preventDefault()
        //console.log(username, password)
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
        .then((user) => onLogin(user)) 



      }


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

    </form>

    </>
  )
}
