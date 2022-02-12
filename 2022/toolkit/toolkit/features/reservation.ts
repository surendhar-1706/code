import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface CounterState {
    value: string[]
  }

const initialState: CounterState = {
    value: [],
  }
export const reservationSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      add: (state,action:PayloadAction<string>) => {
        state.value.push(action.payload)
      },
      remove: (state,action:PayloadAction<number>) => {
       state.value.splice(action.payload,1)
      },
      
    },
  })
export const { add, remove,  } = reservationSlice.actions

export default reservationSlice.reducer