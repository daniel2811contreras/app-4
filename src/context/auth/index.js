import { createContext, useState } from 'react'

const AuthContext = createContext()
const { Provider, Consumer } = AuthContext

const AuthProvider = ({children}) => {
    const [Auth, setAuth] = useState(false)

    return (
        <Provider
            value={{
                Auth, setAuth
            }}
        >
            {children}
        </Provider>
    )
}

export { AuthProvider, Consumer as AuthConsumer, AuthContext }