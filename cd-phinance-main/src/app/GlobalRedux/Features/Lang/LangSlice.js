'use client'

import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    lang: 'Ukrainian'
}


export const langSlice = createSlice({
    name: 'lang',
    initialState: initialState,
    reducers: {
        setLang: (state, action) => {
            return{
                lang: action.payload
            }
        },
    }
})

export const { setLang } = langSlice.actions;
export default langSlice.reducer;