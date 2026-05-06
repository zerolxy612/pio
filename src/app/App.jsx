import { useEffect, useState } from 'react'
import { LoginPage } from '../features/auth/pages/LoginPage'
import { DashboardPage } from '../features/dashboard'

const routes = {
  login: '/login',
  dashboard: '/dashboard',
}

const getRoutePath = (path) => {
  if (path === routes.dashboard) {
    return routes.dashboard
  }

  return routes.login
}

export function App() {
  const [pathname, setPathname] = useState(() => getRoutePath(window.location.pathname))

  useEffect(() => {
    if (window.location.pathname !== pathname) {
      window.history.replaceState(null, '', pathname)
    }

    const handlePopState = () => {
      const nextPath = getRoutePath(window.location.pathname)

      if (window.location.pathname !== nextPath) {
        window.history.replaceState(null, '', nextPath)
      }

      setPathname(nextPath)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [pathname])

  const navigate = (nextPath) => {
    window.history.pushState(null, '', nextPath)
    setPathname(nextPath)
  }

  const handleLogin = () => {
    navigate(routes.dashboard)
  }

  return (
    <>
      {pathname === routes.login && <LoginPage onLogin={handleLogin} />}
      {pathname === routes.dashboard && <DashboardPage />}
    </>
  )
}
