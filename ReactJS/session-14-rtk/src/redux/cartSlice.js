import { createSlice } from "@reduxjs/toolkit"

const initialState={
    items:[]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state,action)=>{
            const existing= state.items.find(item=>item.product.id==action.payload.id);
            if(existing){
                existing.quantity+=1;
            }else{
                state.items.push({product:action.payload,quantity:1})
            }
        },
        removeItem: (state,action)=>{
            state.items= state.items.filter(item=>item.product.id!==action.payload)
        }
    }
})
export const {addItem,removeItem}= cartSlice.actions
export default cartSlice.reducer;
