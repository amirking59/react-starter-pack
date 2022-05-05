// action - state management
import * as actionTypes from './actions'

export const initialState = {
  authenticated: true,
  token: '',
  userRoles: ['ADMIN', 'USER'],
  activeRole: 'ADMIN'
}

// eslint-disable-next-line default-param-last
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        authenticated: true
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        authenticated: false
      }
    case actionTypes.UPDATE_ACTIVE_ROLE:
      return {
        ...state,
        activeRole: action.role
      }
    default:
      return state
  }
}

export default authReducer
