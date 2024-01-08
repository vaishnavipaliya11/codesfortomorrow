import { createSlice } from "@reduxjs/toolkit"

const initialState={
    allPost:[]
}

export const postSlice= createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:{}
})

export default postSlice.reducer