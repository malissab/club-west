import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? 
    JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartsSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            
           const itemIndex = state.cartItems.findIndex(item => 
            item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 0;
            } else {
            const tempItem = {...action.payload, cartQuantity: 1};
            state.cartItems.push(tempItem);
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        deleteFromCart(state, action) {
           const removedItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
           state.cartItems = removedItems
           localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        grandTotal(state, action) {
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            });
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    }
});

export const {addToCart, deleteFromCart, grandTotal } = cartsSlice.actions;
export default cartsSlice.reducer;
