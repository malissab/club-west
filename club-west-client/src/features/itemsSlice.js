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
        }
    }
})

export const {getItems, selectedItem} = itemsSlice.actions;
export default itemsSlice.reducer;
