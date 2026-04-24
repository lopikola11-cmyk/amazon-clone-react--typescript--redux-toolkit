

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

type Rating = {
  stars: number;
  count: number;
};

type Product = {
  id: string;
  image: string;
  name: string;
  keywords: string[];
  rating: Rating;
  priceCents: number;
  createdAt: string;
  updatedAt: string;
};

export type Checkout = {
  id: number;
  productId: string;
  quantity: number;
  deliveryOptionId: string;
  createdAt: string;
  updatedAt: string;
  product: Product;
};

type CartState = {
    checkouts: Checkout[];
    quantity: number | null;
};
const initialState: CartState = {
    checkouts: [],
    quantity: null,
};

export const fetchCheckouts = createAsyncThunk <Checkout[]>('cart/fetchCheckouts', async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    return response.data as Checkout[];
});




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