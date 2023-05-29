import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/router'
import { GlobalStyles } from './styles/global'
import { AuthContext } from './contexts/Auth/AuthContext'
import { AuthProvider } from './contexts/Auth/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
