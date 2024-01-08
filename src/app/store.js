import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
import feedbackReducer from "../features/feedback/feedbackSlice";
export const store = configureStore({
  reducer: {
    post: postReducer,
    feedBack: feedbackReducer,
  },
});
