'use client'

import { configureStore } from "@reduxjs/toolkit"
import popupBurgerReducer from "./Features/PopupBurger/popupBurgerSlice"
import popupLangReducer from './Features/PopupLang/popupLangSlice'

export const store = configureStore({
    reducer: {
        popupBurgerReducer,
        popupLangReducer,
    }
})