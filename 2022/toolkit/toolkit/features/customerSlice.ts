import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type customertype={
    id:string,
    name:string,
    food:string[]
}
export interface CustomerState {
  value: customertype[]
}

type addfoodtype={
  id:string,
  food:string,
}
const initialState: CustomerState = {
  value: [],
}

export const CustomerSlice = createSlice({
  name: 'Customer',
  initialState,
  reducers: {
    addcustomer: (state,action:PayloadAction<customertype>) => {

     state.value.push(action.payload)
    },
    removecustomer: (state,action:PayloadAction<number>) => {
      state.value.splice(action.payload,1)
     },
   addcustomerfood:(state,action:PayloadAction<addfoodtype>)=>{
   state.value.forEach((customer)=>{
     if(customer.name===action.payload.id)
     {
       customer.food.push(action.payload.food)
     }
   })
   }
  },
})

// Action creators are generated for each case reducer function
export const { addcustomer, addcustomerfood } = CustomerSlice.actions

export default CustomerSlice.reducer