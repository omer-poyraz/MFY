import { configureStore } from '@reduxjs/toolkit'
import langReducer from './slices/langSlice'
import menuOpenReducer from './slices/menuOpenSlice'

export const store = configureStore({
    reducer: {
        lang: langReducer,
        menuOpen: menuOpenReducer,
    },
});

export default store;