import styled from 'styled-components'
import backgroundImage from '../../assets/backgroundlogin.jpg'

export const LoginContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #310a64;
  padding: 2rem;
  border-radius: 6px;
  color: white;

  h2 {
    font-size: 1.6rem;
  }

  > button {
    padding: 0.5rem 1rem;
    background: #6d336d;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
      filter: brightness(1.4);
      transition: filter 0.4s;
    }
  }
`

export const InputContaier = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  align-items: center;
  gap: 0.5rem;
  background: #7f4ac6;

  > input {
    font-size: 1rem;
    background: none;
    border: none;
    outline: none;
    &::placeholder {
      color: lightgray;
      font-weight: bold;
    }
  }

  &:focus-within {
    box-shadow: 0 0 0 2px #9c7dc4;
  }
`
