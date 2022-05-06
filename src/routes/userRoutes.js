// project imports
import AuthProvider from 'src/components/AuthProvider.js'

// main layout
import MainLayout from 'src/layouts/MainLayout/index.jsx'

// utils
import Dashboard from 'src/views/Dashboard/index.jsx'
import NotFound from 'src/views/NotFound.js'

const userRoutes = {
  path: '/',
  element: <AuthProvider><MainLayout /></AuthProvider>,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
}

export default userRoutes
