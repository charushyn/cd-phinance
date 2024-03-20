import { configureStore } from "@reduxjs/toolkit"
import popupsReducer from './Features/Popups/popupsSlice'
import langReducer from './Features/Lang/LangSlice'

export const store = configureStore({
    reducer: {
        popupsReducer,
        langReducer,
    }
})