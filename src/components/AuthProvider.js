import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const authenticated = useSelector((state) => state.auth.authenticated)

  return authenticated ? children : <Navigate to="/login" replace />
}

export default AuthProvider
