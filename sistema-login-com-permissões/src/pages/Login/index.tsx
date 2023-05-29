import { Lock, User } from 'phosphor-react'
import { FormLogin, InputContaier, LoginContainer } from './styles'

export function Login() {
  return (
    <LoginContainer>
      <FormLogin action="">
        <h2>Faça Login!</h2>
        <InputContaier>
          <label htmlFor="user">
            <User weight="fill" size={20} />
          </label>
          <input id="user" type="text" placeholder="Email" />
        </InputContaier>
        <InputContaier>
          <label htmlFor="password">
            <Lock weight="fill" size={20} />
          </label>
          <input id="password" type="password" placeholder="Senha" />
        </InputContaier>
        <button>Entrar</button>
      </FormLogin>
    </LoginContainer>
  )
}
