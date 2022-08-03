import { configureStore } from '@reduxjs/toolkit'
import AdviceSliceReducer from "../features/AdviceSlice"

const store = configureStore({
    reducer: {
        advice:AdviceSliceReducer
    }
})

export default store;