import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Login } from '../../pages/Login'

interface RequireAuthProps {
  children: React.JSX.Element
}

export function RequireAuth({ children }: RequireAuthProps) {
  const auth = useContext(AuthContext)

  if (!auth.user) {
    return <Login />
  }
  return children
}
