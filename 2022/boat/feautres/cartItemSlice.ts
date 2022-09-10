import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


  const initialState = {
    product : <any>[]
  }
  
  export const cartItemSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
      addtocart: (state,action:PayloadAction<any>) => {
       
        state.product.push(action.payload)   
        console.log(state.product,'from rtk')
         
      },
      increase_qty:(state,action:PayloadAction<any>)=>{
        const {index,item} = action.payload
        state.product[index].item = state.product[index].item + item
        console.log('inside increse qty',state.product[index].item)
      },
      decrease_qty:(state,action:PayloadAction<any>)=>{
        console.log('inside decrease qty')
      },
    
    },
  })

  export const { addtocart,increase_qty,decrease_qty } = cartItemSlice.actions

export default cartItemSlice.reducer