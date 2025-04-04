import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],  // 儲存購物車中的商品
  },
  reducers: {
    // 添加商品到購物車
    addItem: (state, action) => {
      // 檢查購物車中是否已有相同的商品
      const itemExists = state.items.some(item => item.name === action.payload.name);
      
      // 如果購物車中沒有相同的商品，則加入
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    // 從購物車中移除商品
    removeItem: (state, action) => {
      // 這裡假設每個商品都有一個唯一的 id
      state.items = state.items.filter(item => item.name !== action.payload.name); // 根據商品名稱移除
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;