import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    review: {}
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        postReviews(state, action) {
           return action.payload;
        }
    }
})

export const { postReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;
