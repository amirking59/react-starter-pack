import { lazy } from 'react'

// project imports
import Dashboard from 'src/views/Dashboard'

// main layout
import MainLayout from 'src/layouts/MainLayout/index.jsx'

// utils
import loadable from 'src/utils/loadable/loadable.js'

const Home = loadable(lazy(() => import('src/views/Home').then((module) => ({
  default: module.default
}))))
const Mail = loadable(lazy(() => import('src/views/Mail').then((module) => ({
  default: module.default
}))))

const mainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard />
    }, {
      path: '/home',
      element: <Home />
    }, {
      path: '/mail',
      element: <Mail />
    }]
}

export default mainRoutes
