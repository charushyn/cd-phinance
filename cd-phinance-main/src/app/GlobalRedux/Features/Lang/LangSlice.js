'use client'

import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    lang: 'Ukrainian',
    id: 'ukr',
}


export const langSlice = createSlice({
    name: 'lang',
    initialState: initialState,
    reducers: {
        setLang: (state, action) => {
            return state = action.payload
        },
    }
})

export const { setLang } = langSlice.actions;
export default langSlice.reducer;