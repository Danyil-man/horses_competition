import { configureStore } from "@reduxjs/toolkit";
import horsesSlice from "./slice/horsesSlice";

const store = configureStore({
    reducer: horsesSlice
})

export default store;
