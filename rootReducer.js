import { combineReducers } from '@reduxjs/toolkit'
import laundryStatusReducer from './ducks/laundryStatusSlice'

const rootReducer = combineReducers({
  laundryStatus: laundryStatusReducer,
})

export default rootReducer
