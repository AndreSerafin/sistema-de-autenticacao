import { useContext, useState } from 'react'
import { LoginContainer } from './styles'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    if (email && password) {
      const isLogged = await auth.signin(email, password)
      if (isLogged) {
        navigate('/')
      } else {
        alert('Login falhou')
      }
    }
  }

  return (
    <LoginContainer>
      <h2>Faça seu login</h2>
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite sua Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </LoginContainer>
  )
}
