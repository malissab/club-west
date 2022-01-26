import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin(state, action) {
            state.user = action.payload;
        },
        userLogout(state) {
            state.user = null;
        }

    }
})

export const { userLogin, userLogout } = usersSlice.actions;
export const selectUser = (state) => state.user.user;
export default usersSlice.reducer;
