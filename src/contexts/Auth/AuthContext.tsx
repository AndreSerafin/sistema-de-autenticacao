import { createContext } from 'react'
import { User } from '../../interfaces/User'

export interface AuthContexType {
  user: User | null
  signin: (email: string, password: string) => Promise<boolean>
  signout: () => void
}

export const AuthContext = createContext<AuthContexType>(null!)
