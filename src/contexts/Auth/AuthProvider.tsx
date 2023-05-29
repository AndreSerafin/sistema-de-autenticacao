import { ReactNode, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { User } from '../../interfaces/User'
import { userApi } from '../../hooks/useApi'

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const api = userApi()

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken')
      if (storageData) {
        const data = await api.validateToken(storageData)
        if (data.user) {
          setUser(data.user)
        }
      }
    }
    validateToken()
  }, [])

  async function signin(email: string, password: string) {
    const data = await api.signin(email, password)
    if (data.user && data.token) {
      setUser(data.user)
      setToken(data.token)
      return true
    }
    return false
  }

  async function signout() {
    await api.logout()
    setUser(null)
    setToken('')
  }

  function setToken(token: string) {
    localStorage.setItem('authToken', token)
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}
