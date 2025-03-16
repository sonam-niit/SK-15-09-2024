// Global Store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/counterSlice';
import cartReducer from '../redux/cartSlice';

const store= configureStore({
    reducer:{
        counter: counterReducer,
        cart: cartReducer
    }
})

export default store;