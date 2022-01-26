import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    itemsArr: [],
    selectedItem: {}
}

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        getItems(state, action) {
            state.itemsArr = action.payload;
        },
        selectedItem(state, action) {
            state.selectedItem = action.payload;
        },
        deleteReview(state, action){
            state.selectedItem.reviews = state.selectedItem.reviews.filter(rev => rev.id !== action.payload.id)
        },
        postReview(state, action) {
            state.selectedItem.reviews.push(action.payload);
        },
        updateReview(state, action) {
            state.selectedItem.reviews = state.selectedItem.reviews.map(review => 
                review.id === action.payload.id ? action.payload : review);
            
        }

    }
})

export const {getItems, selectedItem, deleteReview, postReview, updateReview } = itemsSlice.actions;
export default itemsSlice.reducer;
