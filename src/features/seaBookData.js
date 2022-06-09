//This is for the searched books (Google Books API)

import { createSlice } from '@reduxjs/toolkit';

export const seaBookDataSlice = createSlice({
    name: "seaBookData",
    initialState: {value: []},
    reducers: {
        setSeaBookData: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const {setSeaBookData} = seaBookDataSlice.actions;

export default seaBookDataSlice.reducer;