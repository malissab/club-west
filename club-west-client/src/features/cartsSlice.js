import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    cartTotalAmount: 0,
}

const cartsSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload);
        },
    }
});

export const {addToCart} = cartsSlice.actions;
export default cartsSlice.reducer;
