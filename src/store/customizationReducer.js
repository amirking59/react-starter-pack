// action - state management
import * as actionTypes from './actions'

export const initialState = {
  opened: true,
  selected: 'dashboard',
  isDarkMode: false
}

// eslint-disable-next-line default-param-last
const customizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      }
    case actionTypes.SET_MENU_ITEM:
      return {
        ...state,
        selected: action.selected
      }
    case actionTypes.TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode
      }
    default:
      return state
  }
}

export default customizationReducer
