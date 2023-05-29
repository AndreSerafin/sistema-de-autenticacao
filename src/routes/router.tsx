import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Private } from '../pages/Private'
import { RequireAuth } from '../contexts/Auth/RequireAuth'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  )
}
