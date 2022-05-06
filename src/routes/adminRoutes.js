import { lazy } from 'react'

// project imports
import AuthProvider from 'src/components/AuthProvider.js'

// main layout
import MainLayout from 'src/layouts/MainLayout/index.jsx'

// utils
import loadable from 'src/utils/loadable/loadable.js'
import Dashboard from 'src/views/Dashboard/index.jsx'

import NotFound from 'src/views/NotFound.js'

const Mail = loadable(lazy(() => import('src/views/Mail').then((module) => ({
  default: module.default
}))))

const adminRoutes = {
  path: '/',
  element: <AuthProvider><MainLayout /></AuthProvider>,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/mail',
      element: <Mail />
    },
    {
      path: '*',
      element: <NotFound />
    }]
}

export default adminRoutes
