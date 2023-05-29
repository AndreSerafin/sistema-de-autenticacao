import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { DefaultLayout } from '../layouts/Default'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
