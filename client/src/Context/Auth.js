import React, {useState} from 'react'

export const AuthContext = React.createContext()

export function AuthProvider({children}) {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordConfirmation, setPasswordConfirmation] = useState(null)

    const authValues = {
        username,
        setUsername,
        password,
        setPassword,
        passwordConfirmation,
        setPasswordConfirmation
    }

    return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>

}