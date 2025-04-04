// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // 引入購物車 reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,  // 使用 cartReducer 處理購物車狀態
  },
});

export default store;  // 匯出 store