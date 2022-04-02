import { combineReducers } from 'redux'

// reducer import
import customizationReducer from './customizationReducer.js'

const reducer = combineReducers({
  customization: customizationReducer
})

export default reducer
