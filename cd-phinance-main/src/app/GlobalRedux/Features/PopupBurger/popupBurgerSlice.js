'use client'

import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    isShow: false,
}


export const popupBurgerSlice = createSlice({
    name: 'popupBurger',
    initialState: initialState,
    reducers: {
        setIsShowBurger: (state) => {
            return{
                isShow: !state.isShow
            }
        }
    }
})

export const { setIsShowBurger } = popupBurgerSlice.actions;
export default popupBurgerSlice.reducer;