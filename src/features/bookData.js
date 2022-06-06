import { createSlice } from '@reduxjs/toolkit';

export const bookDataSlice = createSlice({
    name: "bookData",
    initialState: {value: []},
    reducers: {
        setBookData: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const {setBookData} = bookDataSlice.actions;

export default bookDataSlice.reducer;