import { useSelector, useDispatch } from 'react-redux'

import { UPDATE_ACTIVE_ROLE } from 'src/store/actions.js'

function useAuth() {
  const dispatch = useDispatch()

  const authenticated = useSelector((state) => state.auth.authenticated)
  const userRoles = useSelector((state) => state.auth.userRoles)
  const activeRole = useSelector((state) => state.auth.activeRole)

  const setActiveRole = (role) => {
    dispatch({ type: UPDATE_ACTIVE_ROLE, role })
  }

  return {
    authenticated,
    userRoles,
    activeRole,
    setActiveRole
  }
}

export default useAuth
