// action - state management
import * as actionTypes from './actions'

export const initialState = {
  opened: true
}

// eslint-disable-next-line default-param-last
const customizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      }
    default:
      return state
  }
}

export default customizationReducer
