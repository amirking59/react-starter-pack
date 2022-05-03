import { useRoutes } from 'react-router-dom'

// routes
import mainRoutes from './mainRoutes'
import authRoutes from './authRoutes'

const Router = () => useRoutes([mainRoutes, authRoutes])

export default Router
