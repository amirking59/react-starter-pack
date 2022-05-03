import { combineReducers } from 'redux'

// reducer import
import customizationReducer from './customizationReducer.js'
import authReducer from './authReducer.js'

const reducer = combineReducers({
  customization: customizationReducer,
  auth: authReducer
})

export default reducer
