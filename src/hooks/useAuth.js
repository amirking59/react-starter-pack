import { useSelector } from 'react-redux'

function useAuth() {
  const authenticated = useSelector((state) => state.auth.authenticated)

  return {
    authenticated
  }
}

export default useAuth
