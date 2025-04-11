import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

let initialState = {
    users : [],
    status : "idle", //promise->pending || fulfilled || rejected
    error : null,
}

let fetchUser = createAsyncThunk(
    'user/fetchUser', 
    async function() {
        // 'https://jsonplaceholder.typicode.com/users
        let users = await axios.get("https://jsonplaceholder.typicode.com/users")
        return users.data
    },
)
let userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        
    },
    extraReducers : (builder) => {
        builder.addCase(fetchUser.pending , (state , action) => {
            state.status = 'pending'
        })
        builder.addCase(fetchUser.fulfilled , (state , action) => {
            state.status = 'success',
            state.users = action.payload
        })
        builder.addCase(fetchUser.rejected , (state , action) => {
            state.status = 'error',
            state.error = action.error.message
        })
    }
})

export const { } = userSlice.actions
export default userSlice.reducer
export { fetchUser }