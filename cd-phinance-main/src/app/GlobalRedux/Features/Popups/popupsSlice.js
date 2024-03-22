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
            return state = {isLangOpen: state.isLangOpen, isBurgerOpen: !state.isBurgerOpen}
        },
        handleLang: (state) => {
            return state = {isLangOpen: !state.isLangOpen, isBurgerOpen: state.isBurgerOpen}
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