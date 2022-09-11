import { createSlice, current } from '@reduxjs/toolkit'
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
      
         
      },
      increase_qty:(state,action:PayloadAction<any>)=>{
        const {checkproductincart,item} = action.payload
        // console.log('that',current(state.product))
state.product.map((single_product:any)=>{
  // console.log(current(single_product),'single product')
  // console.log(checkproductincart.product._id,'checkproductincart')
 if(checkproductincart.product._id === single_product.product._id){
  single_product.item = single_product.item + item
 }
})
      }, 
      decrease_qty:(state,action:PayloadAction<any>)=>{
        console.log('inside decrease qty')
      },
    
    },
  })

  export const { addtocart,increase_qty,decrease_qty } = cartItemSlice.actions

export default cartItemSlice.reducer