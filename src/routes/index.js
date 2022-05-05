import { useRoutes } from 'react-router-dom'

// hooks
// import useAuth from 'src/hooks/useAuth.js'

// routes
import mainRoutes from './mainRoutes'
import authRoutes from './authRoutes'

const Router = () => {
  // const { authenticated } = useAuth()

  const routes = [mainRoutes, authRoutes]

  return useRoutes(routes)
}

export default Router
