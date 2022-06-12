//This is for the related author books (Google Books API)

import { createSlice } from '@reduxjs/toolkit';

export const authorBookDataSlice = createSlice({
    name: "authorBookData",
    initialState: {value: []},
    reducers: {
        setAuthorBookData: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const {setAuthorBookData} = authorBookDataSlice.actions;

export default authorBookDataSlice.reducer;