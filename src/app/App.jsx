import { useState } from 'react'
import { LoginPage } from '../features/auth/pages/LoginPage'
import { DashboardPage } from '../features/dashboard'

export function App() {
  const [currentPage, setCurrentPage] = useState('login')

  const handleLogin = () => {
    setCurrentPage('dashboard')
  }

  return (
    <>
      {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
      {currentPage === 'dashboard' && <DashboardPage />}
    </>
  )
}
