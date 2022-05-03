// action - state management
import * as actionTypes from './actions'

export const initialState = {
  authenticated: false,
  token: ''
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
    default:
      return state
  }
}

export default authReducer
