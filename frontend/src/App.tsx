
import { Show, SignInButton, SignUpButton, UserButton, SignOutButton } from '@clerk/react'
import { Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import ProblemsPage from './pages/ProblemsPage'

function App() {

  return (

    <>
      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/problems' element={<ProblemsPage />} />

      </Routes>

    </>
  )
}

export default App
