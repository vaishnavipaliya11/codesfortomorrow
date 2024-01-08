import { createSlice } from "@reduxjs/toolkit";
import { getPost } from "./helpers/getPost";

const initialState = {
  allPost: [],
  postLoading: false,
  currentPage: 1,
  pageSize:6,
  isCardHorizontal:true
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = state.currentPage + 1;
    },
    removeCard:(state,action)=>{
        state.allPost= state.allPost.filter(data => data.id !== action.payload)
    },
    toggleCard:(state,action)=>{
      state.isCardHorizontal= !state.isCardHorizontal
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.postLoading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.postLoading = false;
        state.allPost = action.payload;
      })
      .addCase(getPost.rejected, (state) => {
        state.postLoading = true;
      });
  },
});

export const { changePage,removeCard,toggleCard } = postSlice.actions;
export default postSlice.reducer;
