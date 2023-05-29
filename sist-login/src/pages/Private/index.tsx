import { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'

export function Private() {
  const auth = useContext(AuthContext)

  return (
    <>
      <h3>Private Page</h3>
      <p>Olá {auth.user?.name}, Tudo Bem?</p>
    </>
  )
}
