import { useRoutes } from 'react-router-dom'

// hooks
import useAuth from 'src/hooks/useAuth.js'

// routes
import adminRoutes from './adminRoutes.js'
import userRoutes from './userRoutes.js'
import simpleRoutes from './simpleRoutes.js'

const Router = () => {
  const { activeRole } = useAuth()
  const routes = [simpleRoutes]

  if (activeRole === 'ADMIN') {
    routes.unshift(adminRoutes)
  } else if (activeRole === 'USER') {
    routes.unshift(userRoutes)
  }

  return useRoutes(routes)
}

export default Router
