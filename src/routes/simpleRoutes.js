// project imports
import Login from 'src/views/Auth/Login'
import NotFound from 'src/views/NotFound.js'

// layout
import MinimalLayout from 'src/layouts/MinimalLayout'

const simpleRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <Login />
    }, {
      path: '*',
      element: <NotFound />
    }
  ]
}

export default simpleRoutes
