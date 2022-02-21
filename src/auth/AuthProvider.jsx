import { useState } from 'react'
import { createContext, useContext } from 'react'
import { api } from '../config/api'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem('user'))
    )
    const [error, setError] = useState(null)

    const login = async ({ email, password }) => {
        try {
            const response = await api.post('/users/login', { email, password })
            setUserData(response.data)
            localStorage.setItem('user', JSON.stringify(response.data))
        } catch (error) {
            setError(error.message)
        }
    }

    const logout = () => {
        localStorage.removeItem('user')
        setUserData(null)
    }

    return (
        <AuthContext.Provider value={{ userData, login, logout, error }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
