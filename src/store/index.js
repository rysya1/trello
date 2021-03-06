import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice'
import { todoSlice } from './todo';
const store = configureStore({
    reducer : {
        auth : authSlice.reducer,
        todo: todoSlice.reducer
    }
})
export default store;