import { configureStore } from "@reduxjs/toolkit";
import lowonganReducer from "./slice/lowonganSlice.js"

const store = configureStore({
    reducer: {
        modal: lowonganReducer
    }
})

console.log('store dibuat :', store.getState())

store.subscribe(() => {
    console.log('subscribe redux,', store.getState())
})

export default store