import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/basiApi";


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer
    }
})