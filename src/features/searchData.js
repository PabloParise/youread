//This is for the searched books (Gooble Books API)

import { createSlice } from '@reduxjs/toolkit';

export const searchDataSlice = createSlice({
    name: "searchData",
    initialState: {value: []},
    reducers: {
        setSearchData: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const {setSearchData} = searchDataSlice.actions;

export default searchDataSlice.reducer;