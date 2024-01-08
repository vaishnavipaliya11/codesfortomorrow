import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen:false
};

export const feedBackSlice = createSlice({
  name: "feedBack",
  initialState,
  reducers: {
    showHideModal: (state, action) => {
        state.isModalOpen= !state.isModalOpen
    },
  },

});

export const { showHideModal } = feedBackSlice.actions;
export default feedBackSlice.reducer;
