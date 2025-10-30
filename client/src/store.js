// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'; // <-- update path to match your actual slice(s)

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // add more reducers here
  },
});

export default store;
