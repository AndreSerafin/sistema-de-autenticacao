import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/routes'
import { GlobalStyle } from './styles/GlobalStyles'

export function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}
