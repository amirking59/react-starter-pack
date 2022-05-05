import { Navigate } from 'react-router-dom'

// hooks
import useAuth from 'src/hooks/useAuth.js'

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const { authenticated } = useAuth()

  return authenticated ? children : <Navigate to="/login" replace />
}

export default AuthProvider
