// project imports
import Home from 'src/views/Home'
import Mail from 'src/views/Mail'
import Dashboard from 'src/views/Dashboard'

// main layout
import MainLayout from 'src/layouts/MainLayout/index.jsx'

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
