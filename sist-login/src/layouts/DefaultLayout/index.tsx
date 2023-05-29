import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { Wrapper } from './styles'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'

export function DefaultLayout() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  async function handleLogout() {
    await auth.signout()
    navigate('/')
  }

  return (
    <Wrapper>
      <header>
        <h1>Header do Site</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/private">Private</NavLink>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <Outlet />
    </Wrapper>
  )
}
