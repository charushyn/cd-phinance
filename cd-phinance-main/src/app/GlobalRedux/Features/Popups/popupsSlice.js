'use client'

import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    isBurgerOpen: false,
    isLangOpen: false,
}


export const popupsSlice = createSlice({
    name: 'popups',
    initialState: initialState,
    reducers: {
        handleBurger: (state) => {
            return{
                isBurgerOpen: !state.isBurgerOpen
            }
        },
        handleLang: (state) => {
            return{
                isLangOpen: !state.isLangOpen
            }
        },
        clearState: (state) => {
            return{
                isBurgerOpen: false, isLangOpen: false
            }
        },
    }
})

export const { handleBurger, handleLang, clearState } = popupsSlice.actions;
export default popupsSlice.reducer;