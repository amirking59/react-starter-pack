// project imports
import Login from 'src/views/Auth/Login'

// layout
import MinimalLayout from 'src/layouts/MinimalLayout'

const authRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <Login />
    }
  ]
}

export default authRoutes
