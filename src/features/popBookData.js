//This is for the popular books (the NYT API)

import { createSlice } from '@reduxjs/toolkit';

export const popBookDataSlice = createSlice({
    name: "popBookData",
    initialState: {value: []},
    reducers: {
        setPopBookData: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const {setPopBookData} = popBookDataSlice.actions;

export default popBookDataSlice.reducer;