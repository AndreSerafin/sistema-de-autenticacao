import styled from 'styled-components'

export const LoginContainer = styled.main`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1.5rem;
  margin: 2rem;
  background-color: lightsteelblue;
  border-radius: 6px;
  width: 30vw;

  h2 {
    color: darkblue;
  }
  input,
  button {
    padding: 0.5rem;
    background: white;
    color: black;
    font-weight: bolder;
    border-radius: 3px;
    border: none;
    font-size: 1rem;
  }

  button {
    background: blue;
    color: white;
    cursor: pointer;

    &:hover {
      transition: 0.6s background;
      background: darkblue;
    }
  }
`
