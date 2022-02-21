import { createContext, useContext, useState } from 'react'
import {
  addAuthorizationHeaders,
  api,
  removeAuthorizationHeaders,
} from '../config/api'

addAuthorizationHeaders()

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('user'))
  )
  const [error, setError] = useState(null)

  const login = async ({ email, password, onSuccess }) => {
    if (userData) return

    const response = await api.post(
      '/users/login',
      { email, password },
      {
        validateStatus: () => true, // para que no tire error en el status
      }
    )
    if (response.status === 200) {
      setUserData(response.data)
      console.log(response.data)
      localStorage.setItem('user', JSON.stringify(response.data))
      addAuthorizationHeaders()

      if (onSuccess) {
        onSuccess()
      }
    } else {
      setError(response.data.errors)
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    removeAuthorizationHeaders()
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
