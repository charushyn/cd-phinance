'use client'

import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    isShow: false,
}


export const popupLangSlice = createSlice({
    name: 'popupLang',
    initialState: initialState,
    reducers: {
        setIsShowLang: (state) => {
            return{
                isShow: !state.isShow
            }
        }
    }
})

export const { setIsShowLang } = popupLangSlice.actions;
export default popupLangSlice.reducer;