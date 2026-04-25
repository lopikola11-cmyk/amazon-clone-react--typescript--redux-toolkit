import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = "https://amazon-clone-react-typescript-redux-3lcl.onrender.com";

const initialState = {
  checkouts: [],
  quantity: null,
};

export const fetchCheckouts = createAsyncThunk(
  'cart/fetchCheckouts',
  async () => {
    const response = await axios.get(`${API}/api/cart-items?expand=product`);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCheckouts: (state, action) => {
      state.checkouts = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCheckouts.fulfilled, (state, action) => {
      state.checkouts = action.payload;
    });
  },
});

export const { setCheckouts, setQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
