
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import todoSlice from "../features/todo/todoSlice";
import userSlice from "../features/user/UserSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo : todoSlice,
        user : userSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});