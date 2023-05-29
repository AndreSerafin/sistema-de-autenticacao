import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding-bottom: 1rem;
    border-bottom: 2px solid gray;
    > nav {
      display: flex;
      gap: 1rem;
      > a {
        color: black;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
`
