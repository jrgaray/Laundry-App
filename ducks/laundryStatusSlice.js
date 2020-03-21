import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const laundryStatusSlice = createSlice({
  name: 'laundryStatus',
  initialState,
  reducers: {
    addLoad: (state, action) => state.concat(action.payload),
    removeLoad: (state, action) => {
      const newState = state
      newState.splice(action.payload, 1)
      return newState
    },
  },
})

export const { addLoad, removeLoad } = laundryStatusSlice.actions

export default laundryStatusSlice.reducer
