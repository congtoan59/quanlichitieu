import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, aciton) => {
            state.user = aciton.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
});
export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
